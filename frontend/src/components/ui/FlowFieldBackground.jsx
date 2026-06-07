import React, { useEffect, useRef } from "react";

export default function FlowFieldBackground({
  className = "",
  color = "#B22F32",
  secondaryColor = "#2F347D",
  trailOpacity = 0.12,
  particleCount = 520,
  speed = 0.7,
  enableSparks = true,
  enableGlowLayer = true,
  mouseRepulsion = true,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles = [];
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.px = this.x;
        this.py = this.y;
        this.vx = 0;
        this.vy = 0;
        this.age = initial ? Math.random() * 300 : 0; // stagger on init
        this.life = Math.random() * 260 + 140;
        // ~40% secondary (blue/indigo), 60% primary (red)
        this.useSecondary = Math.random() > 0.62;
        // occasional brighter "spark" particle
        this.isSpark = Math.random() > 0.88;
      }

      update() {
        // store previous position for line segment
        this.px = this.x;
        this.py = this.y;

        // curl-noise style flow angle
        const angle =
          (Math.cos(this.x * 0.0042) + Math.sin(this.y * 0.0042)) * Math.PI +
          Math.cos(this.y * 0.003) * 0.6;

        this.vx += Math.cos(angle) * 0.22 * speed;
        this.vy += Math.sin(angle) * 0.22 * speed;

        // mouse repulsion — only when mouseRepulsion is true
        if (mouseRepulsion) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const IR = 75;
          if (dist < IR) {
            const force = (IR - dist) / IR;
            this.vx -= dx * force * 0.022;
            this.vy -= dy * force * 0.022;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.94;
        this.vy *= 0.94;

        this.age++;
        if (this.age > this.life) this.reset();

        // wrap around edges
        if (this.x < 0) { this.x = width;  this.px = this.x; }
        if (this.x > width)  { this.x = 0; this.px = this.x; }
        if (this.y < 0) { this.y = height; this.py = this.y; }
        if (this.y > height) { this.y = 0; this.py = this.y; }
      }

      draw(context) {
        // fade in at birth, fade out at death
        const t = this.age / this.life;
        const alpha = Math.sin(t * Math.PI); // 0→1→0 arc

        const baseColor = this.useSecondary ? secondaryColor : color;

        // very rare white highlight — only when enableSparks is true
        if (this.isSpark) {
          if (!enableSparks) return; // skip entirely when disabled
          if (alpha < 0.15) return;
          context.globalAlpha = alpha * 0.28;
          context.fillStyle = "#F8F9FB";
          context.beginPath();
          context.arc(this.x, this.y, 0.9, 0, Math.PI * 2);
          context.fill();
          context.globalAlpha = 1;
          return;
        }

        // segment length guard — skip if particle just wrapped
        const segLen = Math.hypot(this.x - this.px, this.y - this.py);
        if (segLen > 20) return;

        // soft glow layer — only when enableGlowLayer is true
        if (enableGlowLayer) {
          context.globalAlpha = alpha * 0.30;
          context.strokeStyle = baseColor;
          context.lineWidth = this.useSecondary ? 4.0 : 5.5;
          context.lineCap = "round";
          context.beginPath();
          context.moveTo(this.px, this.py);
          context.lineTo(this.x, this.y);
          context.stroke();
        }

        // core line — crisp, fully saturated color
        context.globalAlpha = alpha * 0.88;
        context.strokeStyle = baseColor;
        context.lineWidth = this.useSecondary ? 0.9 : 1.2;
        context.beginPath();
        context.moveTo(this.px, this.py);
        context.lineTo(this.x, this.y);
        context.stroke();

        context.globalAlpha = 1;

        // small accent dot at particle head
        context.globalAlpha = alpha * 0.70;
        context.fillStyle = baseColor;
        context.beginPath();
        context.arc(this.x, this.y, this.useSecondary ? 0.9 : 1.2, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!visible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      // semi-transparent fill creates the trailing effect
      ctx.globalAlpha = 1;
      ctx.fillStyle = `rgba(9, 11, 26, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Pause RAF when section is scrolled off-screen — eliminates scroll jank
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(container);

    init();
    animate();

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [color, secondaryColor, trailOpacity, particleCount, speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
