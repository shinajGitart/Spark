import React, { useEffect, useRef } from "react";

/**
 * TubeCursor — real WebGL/WebGPU tubes cursor powered by threejs-components.
 * Loaded dynamically from CDN so no npm install is required.
 *
 * Renders a fixed full-screen canvas behind the page content (pointer-events
 * disabled). Drop-in compatible with the previous TubeCursor API.
 */
export default function TubeCursor({
  initialColors = ["#2F347D", "#27306B", "#A92A2E", "#C63A3A"],
  lightColors = ["#C63A3A", "#A92A2E", "#2F347D", "#F8F9FB"],
  lightIntensity = 220,
  enableRandomizeOnClick = false,
  className = "",
}) {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    let removeClick = null;
    let destroyed = false;

    (async () => {
      try {
        const mod = await import(
          /* webpackIgnore: true */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const TubesCursorCtor = mod.default ?? mod;
        if (!canvasRef.current || destroyed) return;

        const app = TubesCursorCtor(canvasRef.current, {
          tubes: {
            colors: initialColors,
            lights: {
              intensity: lightIntensity,
              colors: lightColors,
            },
          },
        });
        appRef.current = app;

        if (enableRandomizeOnClick) {
          const handler = () => {
            const c = randomColors(initialColors.length);
            const l = randomColors(lightColors.length);
            app.tubes.setColors(c);
            app.tubes.setLightsColors(l);
          };
          document.body.addEventListener("click", handler);
          removeClick = () =>
            document.body.removeEventListener("click", handler);
        }
      } catch (err) {
        // CDN unavailable — fail silently; page still works without cursor fx
        // eslint-disable-next-line no-console
        console.warn("[TubeCursor] failed to load", err);
      }
    })();

    return () => {
      destroyed = true;
      if (removeClick) removeClick();
      try {
        appRef.current?.dispose?.();
        appRef.current = null;
      } catch {
        /* ignore */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="tube-cursor"
      className={`fixed inset-0 block h-full w-full pointer-events-none ${className}`}
      style={{ zIndex: 30, mixBlendMode: "screen", opacity: 0.6 }}
    />
  );
}

function randomColors(count) {
  return new Array(count).fill(0).map(
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );
}
