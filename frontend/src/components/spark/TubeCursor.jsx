import React, { useEffect, useRef } from "react";

/**
 * TubeCursor — lightweight canvas trail in SPARK brand colors.
 * Zero external deps. GPU-friendly, handles DPR, pauses when tab hidden.
 */
export default function TubeCursor({
  initialColors = ["#2F347D", "#27306B", "#A92A2E", "#C63A3A"],
  lightColors = ["#C63A3A", "#A92A2E", "#2F347D", "#F8F9FB"],
  lightIntensity = 220,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Disable on coarse-pointer / small screens (mobile) — battery friendly
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let w = 0, h = 0;
    const dpr = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    const points = [];
    const maxPoints = 10;   // short trail — snappy, not draggy
    let raf;
    let running = true;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // All colors pre-indexed — no per-frame object allocation
    const allColors = [...initialColors, ...lightColors];
    let skipMove = false; // mousemove throttle flag

    const onMove = (e) => {
      // Throttle: capture every other mousemove event
      skipMove = !skipMove;
      if (skipMove) return;
      points.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.length > maxPoints) points.shift();
    };

    const tick = () => {
      if (!running) return;

      // Skip draw entirely when trail is empty — zero GPU cost at idle
      if (points.length > 1) {
        ctx.clearRect(0, 0, w, h);
        for (let i = 1; i < points.length; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const t = i / points.length;
          // Simple solid color — no gradient allocation, no shadowBlur flush
          ctx.strokeStyle = allColors[i % allColors.length];
          ctx.lineWidth = 1.0 + t * 3.0;  // max 4.0
          ctx.lineCap = "round";
          ctx.globalAlpha = t * 0.7;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        // Decay — vanishes in ~15 frames
        for (let i = 0; i < points.length; i++) points[i].life *= 0.86;
        while (points.length && points[0].life < 0.04) points.shift();
      }

      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [initialColors, lightColors, lightIntensity]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="tube-cursor"
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: 30,
        mixBlendMode: "screen",
        opacity: 0.55,
        willChange: "contents",
      }}
    />
  );
}
