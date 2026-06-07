import React, { useRef, useEffect } from "react";
import FlowFieldBackground from "../ui/FlowFieldBackground";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

// Cap images
import chemicalImg from "../cap/chemical.png";
import mroImg from "../cap/mro.png";
import safetyImg from "../cap/safety.png";
import maintenanceImg from "../cap/maintenance.png";
import wasteImg from "../cap/waste.png";
import warehouseImg from "../cap/warehouse.png";
import marketImg from "../cap/market.png";
import machineImg from "../cap/machine.png";

const items = [
  {
    no: "01",
    img: chemicalImg,
    title: "Chemical Solutions",
    blurb: "Industrial-grade chemicals tailored to process requirements.",
    accent: "#C63A3A",
  },
  {
    no: "02",
    img: mroImg,
    title: "MRO",
    blurb: "Maintenance, repair & operations consumables, on time, every time.",
    accent: "#2F347D",
  },
  {
    no: "03",
    img: safetyImg,
    title: "Safety & PPE",
    blurb: "Certified personal protective equipment for high-risk operations.",
    accent: "#A92A2E",
  },
  {
    no: "04",
    img: maintenanceImg,
    title: "Maintenance & Service",
    blurb: "On-site technical service teams for industrial uptime.",
    accent: "#27306B",
  },
  {
    no: "05",
    img: wasteImg,
    title: "Waste Management",
    blurb: "Compliant environmental & waste handling across sectors.",
    accent: "#C63A3A",
  },
  {
    no: "06",
    img: warehouseImg,
    title: "Warehouse Solutions",
    blurb: "Storage systems, racking and material handling fit-outs.",
    accent: "#2F347D",
  },
  {
    no: "07",
    img: marketImg,
    title: "Market Research",
    blurb: "Sourcing intelligence for procurement and supply decisions.",
    accent: "#A92A2E",
  },
  {
    no: "08",
    img: machineImg,
    title: "Machine Tools",
    blurb: "Precision tooling and machinery for industrial workshops.",
    accent: "#27306B",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   CapabilitiesBody
   All scroll-driven animation is done via direct DOM manipulation so we
   never trigger React re-renders on scroll (zero jank / zero state updates).
   ───────────────────────────────────────────────────────────────────────── */
function CapabilitiesBody() {
  const containerRef  = useRef(null);
  const fillRef       = useRef(null);
  const dotRef        = useRef(null);
  const rowRefs       = useRef([]);
  const nodeRefs      = useRef([]);
  const orbRefs       = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const fillEl    = fillRef.current;
    const dotEl     = dotRef.current;
    if (!container || !fillEl || !dotEl) return;

    let rafId;
    let currentProgress = 0;   // smoothed display value
    let targetProgress  = 0;   // raw scroll-computed value

    const lerp = (a, b, t) => a + (b - a) * t;

    /* Raw scroll → target progress (0–1) */
    const computeTarget = () => {
      const rect  = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      // 0 when top of container hits bottom of viewport
      // 1 when bottom of container hits top of viewport
      const raw = 1 - rect.bottom / (viewH + rect.height);
      return Math.min(1, Math.max(0, raw));
    };

    /* Apply progress to DOM directly — no setState */
    const apply = (p) => {
      // backbone line height (clamp to [0, 100]%)
      const lineP   = Math.min(1, Math.max(0, (p - 0.04) / 0.84));
      const pct     = lineP * 100;

      fillEl.style.height    = pct + "%";
      dotEl.style.transform  = `translateY(calc(${pct / 100 * container.offsetHeight}px - 4px))`;

      // dim / highlight rows
      const activeIdx = Math.min(items.length - 1, Math.floor(lineP * items.length));
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const opacity = i === activeIdx ? "1" : i < activeIdx ? "0.6" : "0.4";
        row.style.opacity = opacity;
      });
      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        const it = items[i];
        if (i === activeIdx) {
          node.style.background   = it.accent;
          node.style.borderColor  = it.accent;
          node.style.boxShadow    = `0 0 12px ${it.accent}, 0 0 28px ${it.accent}55`;
          node.style.transform    = "scale(1.3)";
        } else if (i < activeIdx) {
          node.style.background   = `${it.accent}66`;
          node.style.borderColor  = "rgba(255,255,255,0.15)";
          node.style.boxShadow    = "none";
          node.style.transform    = "scale(1)";
        } else {
          node.style.background   = "rgba(255,255,255,0.08)";
          node.style.borderColor  = "rgba(255,255,255,0.15)";
          node.style.boxShadow    = "none";
          node.style.transform    = "scale(1)";
        }
      });
      orbRefs.current.forEach((orb, i) => {
        if (!orb) return;
        orb.style.opacity = i === activeIdx ? "0.85" : "0.45";
      });
    };

    /* RAF loop — lerp currentProgress → targetProgress each frame */
    const tick = () => {
      // 0.1 lerp factor → silky smooth, not sluggish
      currentProgress = lerp(currentProgress, targetProgress, 0.1);
      apply(currentProgress);
      rafId = requestAnimationFrame(tick);
    };

    /* On scroll: update targetProgress only — no DOM writes here */
    const onScroll = () => {
      targetProgress = computeTarget();
    };

    // Init
    targetProgress  = computeTarget();
    currentProgress = targetProgress;
    apply(currentProgress);

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-4 relative">

      {/* ── Desktop backbone connector — lg only ── */}
      <div
        aria-hidden
        className="hidden lg:flex lg:flex-col absolute left-1/2 top-0 bottom-0 w-px pointer-events-none"
        style={{ transform: "translateX(-50%)" }}
      >
        {/* track — dim base line */}
        <div
          className="absolute inset-0 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(47,52,125,0.22) 10%, rgba(198,58,58,0.22) 90%, transparent 100%)",
          }}
        />
        {/* fill — driven by scroll via ref */}
        <div
          ref={fillRef}
          className="absolute top-0 left-0 w-px"
          style={{
            height: "0%",
            background: "linear-gradient(180deg, rgba(198,58,58,0.95), rgba(47,52,125,0.9))",
            boxShadow: "0 0 8px rgba(198,58,58,0.55), 0 0 20px rgba(47,52,125,0.35)",
          }}
        />
        {/* travelling dot — uses transform so it's compositor-only */}
        <div
          ref={dotRef}
          className="absolute left-0 w-2 h-2 rounded-full"
          style={{
            top: 0,
            marginLeft: "-3px",
            background: "#C63A3A",
            boxShadow: "0 0 10px #C63A3A, 0 0 26px rgba(198,58,58,0.6)",
            willChange: "transform",
          }}
        />
      </div>

      {/* ── Rows ── */}
      {items.map((it, i) => {
        const reverse = i % 2 === 1;
        return (
          <motion.div
            key={it.title}
            ref={(el) => (rowRefs.current[i] = el)}
            data-testid={`capability-row-${i}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`relative grid lg:grid-cols-12 gap-8 items-center py-14 lg:py-20 border-b border-white/5 ${
              reverse ? "lg:[direction:rtl]" : ""
            }`}
            style={{ opacity: 0.4 }}
          >
            {/* connector node — lg only */}
            <div
              aria-hidden
              className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            >
              <div
                ref={(el) => (nodeRefs.current[i] = el)}
                className="w-3 h-3 rounded-full border"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.15)",
                  transition: "background 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease",
                }}
              />
            </div>

            {/* TEXT */}
            <div className="lg:col-span-7 lg:[direction:ltr]">
              <div className="flex items-center gap-4">
                <span
                  className="font-display text-[78px] sm:text-[110px] leading-none font-bold opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${it.accent}, transparent 90%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {it.no}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0 lg:max-w-[260px]" />
              </div>
              <motion.h3
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mt-3 leading-tight"
                initial={{ x: reverse ? 40 : -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
              >
                {it.title}
              </motion.h3>
              <motion.p
                className="mt-4 text-[#D9D9DE]/85 max-w-xl text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.25 }}
              >
                {it.blurb}
              </motion.p>
            </div>

            {/* VISUAL */}
            <div className="lg:col-span-5 lg:[direction:ltr]">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="relative aspect-square w-full max-w-[380px] mx-auto"
              >
                {/* gradient orb — opacity driven by ref */}
                <div
                  ref={(el) => (orbRefs.current[i] = el)}
                  className="absolute inset-6 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${it.accent}cc, transparent 60%), radial-gradient(circle at 70% 70%, #2F347Daa, transparent 60%)`,
                    filter: "blur(20px)",
                    opacity: 0.45,
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* rings + image — no icon */}
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id={`row-grad-${i}`} x1="0" x2="1">
                      <stop offset="0%" stopColor={it.accent} />
                      <stop offset="100%" stopColor="#2F347D" />
                    </linearGradient>
                    <clipPath id={`inner-clip-${i}`}>
                      <circle cx="100" cy="100" r="56" />
                    </clipPath>
                  </defs>
                  {/* outer dashed ring */}
                  <motion.circle
                    cx="100" cy="100" r="84"
                    fill="none"
                    stroke={`url(#row-grad-${i})`}
                    strokeWidth="0.6"
                    strokeDasharray="2 6"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "100px 100px" }}
                  />
                  {/* inner dashed ring */}
                  <motion.circle
                    cx="100" cy="100" r="62"
                    fill="none"
                    stroke={`url(#row-grad-${i})`}
                    strokeWidth="0.4"
                    strokeDasharray="1 4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "100px 100px" }}
                  />
                  {/* capability image inside inner circle — NO icon overlay */}
                  <image
                    href={it.img}
                    x="44" y="44"
                    width="112" height="112"
                    clipPath={`url(#inner-clip-${i})`}
                    preserveAspectRatio="xMidYMid slice"
                    opacity="0.72"
                  />
                  {/* subtle accent ring around image */}
                  <circle
                    cx="100" cy="100" r="56"
                    fill="none"
                    stroke={it.accent}
                    strokeWidth="0.6"
                    opacity="0.45"
                  />
                </svg>

                {/* lightning sweep — kept for premium feel */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <div
                    className="sweep absolute inset-y-0 w-1/3"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${it.accent}44, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Section shell ─────────────────────────────────────────────────────── */
export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-testid="capabilities-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Lifted dark-premium base — removes flat-black feel ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, #0D1024 0%, #11152B 30%, #151A33 55%, #11152B 75%, #0D1024 100%)",
        }}
      />

      {/* Flow-field particle animation — clean red/blue lines, no fog, no white */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.72 }}>
        <FlowFieldBackground
          color="#C63A3A"
          secondaryColor="#2F347D"
          trailOpacity={0.40}
          particleCount={140}
          speed={0.65}
          enableSparks={false}
          enableGlowLayer={false}
          mouseRepulsion={false}
        />
      </div>

      {/* Soft red ambient glow — centre-left, behind content */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 20% 55%, rgba(198,58,58,0.13), transparent 70%)",
        }}
      />
      {/* Soft blue ambient glow — centre-right */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 80% 40%, rgba(47,52,125,0.15), transparent 70%)",
        }}
      />
      {/* Top-centre blue lift — lifts the heading area */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 35% at 50% 0%, rgba(47,52,125,0.22), transparent 65%)",
        }}
      />

      {/* Reduced dark overlay — just enough to keep text crisp, not enough to kill particles */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{ background: "rgba(9,11,26,0.28)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-10">
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 leading-[1.05] max-w-2xl">
            Solutions{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(120deg,#C63A3A,#F8F9FB,#2F347D)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              we provide.
            </span>
          </h2>
          <p className="text-[#D9D9DE]/80 max-w-xl text-sm leading-relaxed mt-1">
            One contract. Eight specialised industrial service lines, engineered
            around uptime, safety and procurement excellence.
          </p>
        </div>

        <CapabilitiesBody />
      </div>
    </section>
  );
}
