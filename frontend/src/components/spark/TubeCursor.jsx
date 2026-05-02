import React, { useEffect, useRef } from "react";

/**
 * TubeCursor — lightweight canvas-based cursor trail that draws glowing
 * "tubes" in SPARK colors. Subtle, performant, no external deps.
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
    const ctx = canvas.getContext("2d");
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let w = 0, h = 0;
    const points = [];
    const maxPoints = 28;
    const mouse = { x: -9999, y: -9999, vx: 0, vy: 0, lastX: 0, lastY: 0 };
    let raf;
    let hue = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      mouse.vx = e.clientX - mouse.lastX;
      mouse.vy = e.clientY - mouse.lastY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      points.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.length > maxPoints) points.shift();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // ambient floating tubes
      hue = (hue + 0.4) % 360;

      // draw connections
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const t = i / points.length;
        const c1 = initialColors[i % initialColors.length];
        const c2 = lightColors[i % lightColors.length];
        const grad = ctx.createLinearGradient(p0.x, p0.y, p1.x, p1.y);
        grad.addColorStop(0, c1);
        grad.addColorStop(1, c2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5 + t * 6;
        ctx.shadowColor = c2;
        ctx.shadowBlur = (lightIntensity / 220) * 22 * t;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
        p1.life *= 0.98;
      }

      // fade out tail
      for (let i = 0; i < points.length; i++) points[i].life *= 0.97;
      while (points.length && points[0].life < 0.05) points.shift();

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [initialColors, lightColors, lightIntensity]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="tube-cursor"
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
