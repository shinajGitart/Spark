import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import SparkMark from "./SparkMark";

function Particles({ count = 28 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 14,
        dur: 12 + Math.random() * 14,
        size: 1 + Math.random() * 2.4,
        hue: i % 2 === 0 ? "#C63A3A" : "#2F347D",
      })),
    [count]
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 12px ${p.hue}`,
            animation: `float-up ${p.dur}s linear ${p.delay}s infinite`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

function LightningLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="ll1" x1="0" x2="1">
          <stop offset="0%" stopColor="#C63A3A" stopOpacity="0" />
          <stop offset="50%" stopColor="#C63A3A" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2F347D" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ll2" x1="0" x2="1">
          <stop offset="0%" stopColor="#2F347D" stopOpacity="0" />
          <stop offset="50%" stopColor="#F8F9FB" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#A92A2E" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="draw-bolt"
        d="M0 220 L300 220 L340 180 L520 180 L560 240 L900 240 L940 200 L1440 200"
        fill="none"
        stroke="url(#ll1)"
        strokeWidth="1.2"
      />
      <path
        className="draw-bolt"
        style={{ animationDelay: "0.6s" }}
        d="M0 580 L260 580 L300 540 L600 540 L640 600 L1080 600 L1120 560 L1440 560"
        fill="none"
        stroke="url(#ll2)"
        strokeWidth="1"
      />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden grain"
      style={{ background: "#090B1A" }}
    >
      {/* gradient glows */}
      <div className="absolute -top-40 -left-32 w-[60vw] h-[60vw] glow-blue drift-a" aria-hidden />
      <div className="absolute -bottom-40 -right-32 w-[60vw] h-[60vw] glow-red drift-b" aria-hidden />
      <div
        className="absolute inset-0 hue-shift opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(47,52,125,0.45), transparent 70%), radial-gradient(40% 40% at 80% 100%, rgba(198,58,58,0.35), transparent 70%)",
        }}
        aria-hidden
      />
      {/* sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="sweep absolute -top-10 left-0 h-[140%] w-[35%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(248,249,251,0.07), transparent)",
          }}
        />
      </div>

      <LightningLines />
      <Particles />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F8F9FB 1px, transparent 1px), linear-gradient(90deg, #F8F9FB 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.7), transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.7), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 lg:pt-48 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="lg:col-span-7">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs tracking-wider uppercase text-[#D9D9DE]"
          >
            <MapPin size={12} className="text-[#C63A3A]" />
            <span>Dammam · Saudi Arabia</span>
            <span className="w-1 h-1 rounded-full bg-[#C63A3A]" />
            <span className="text-[#D9D9DE]/70">Industrial Solutions</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display font-bold mt-6 text-[44px] sm:text-[58px] lg:text-[78px] leading-[0.95] tracking-tight text-balance"
          >
            <span className="block">Industrial Supply</span>
            <span className="block">
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#C63A3A 0%,#F8F9FB 50%,#2F347D 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                & Service
              </span>{" "}
              Solutions
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 max-w-xl text-[15px] sm:text-base text-[#D9D9DE]/80 leading-relaxed"
          >
            Reliable procurement, MRO, maintenance, safety, environmental,
            warehouse, chemical and technical solutions powering Saudi Arabia's
            industrial sectors.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              data-testid="hero-cta-primary"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium overflow-hidden"
              style={{
                background:
                  "linear-gradient(120deg,#A92A2E 0%,#C63A3A 50%,#2F347D 100%)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(120deg,#2F347D 0%,#27306B 60%,#C63A3A 100%)",
                }}
              />
            </a>

            <a
              href="#contact"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium glass hover:bg-white/10 transition-colors"
            >
              <Zap size={14} className="text-[#C63A3A]" />
              Contact SPARK
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.45)}
            className="mt-12 grid grid-cols-3 max-w-md gap-4"
          >
            {[
              { k: "2023", v: "Founded" },
              { k: "20+", v: "Approved Vendors" },
              { k: "8", v: "Service Lines" },
            ].map((s) => (
              <div key={s.v} className="px-4 py-3 rounded-xl glass">
                <div className="font-display text-2xl font-semibold">
                  <span style={{
                    backgroundImage:"linear-gradient(120deg,#C63A3A,#F8F9FB 80%)",
                    WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"
                  }}>{s.k}</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#D9D9DE]/60 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT MARK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <SparkMark size={360} className="spark-pulse" />
            {/* orbiting dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 -mt-1 -ml-1 rounded-full"
              style={{ background: "#F8F9FB", boxShadow: "0 0 12px #F8F9FB" }}
              animate={{
                x: [140, 0, -140, 0, 140],
                y: [0, 140, 0, -140, 0],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,11,26,0) 0%, rgba(9,11,26,1) 100%)",
        }}
      />
    </section>
  );
}
