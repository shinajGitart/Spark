import React from "react";
import FlowFieldBackground from "../ui/FlowFieldBackground";
import { motion } from "framer-motion";
import {
  Beaker,
  Wrench,
  HardHat,
  Settings2,
  Recycle,
  Warehouse,
  LineChart,
  Drill,
} from "lucide-react";
import SectionLabel from "./SectionLabel";

const items = [
  {
    no: "01",
    icon: Beaker,
    title: "Chemical Solutions",
    blurb: "Industrial-grade chemicals tailored to process requirements.",
    accent: "#C63A3A",
  },
  {
    no: "02",
    icon: Wrench,
    title: "MRO",
    blurb: "Maintenance, repair & operations consumables, on time, every time.",
    accent: "#2F347D",
  },
  {
    no: "03",
    icon: HardHat,
    title: "Safety & PPE",
    blurb: "Certified personal protective equipment for high-risk operations.",
    accent: "#A92A2E",
  },
  {
    no: "04",
    icon: Settings2,
    title: "Maintenance & Service",
    blurb: "On-site technical service teams for industrial uptime.",
    accent: "#27306B",
  },
  {
    no: "05",
    icon: Recycle,
    title: "Waste Management",
    blurb: "Compliant environmental & waste handling across sectors.",
    accent: "#C63A3A",
  },
  {
    no: "06",
    icon: Warehouse,
    title: "Warehouse Solutions",
    blurb: "Storage systems, racking and material handling fit-outs.",
    accent: "#2F347D",
  },
  {
    no: "07",
    icon: LineChart,
    title: "Market Research",
    blurb: "Sourcing intelligence for procurement and supply decisions.",
    accent: "#A92A2E",
  },
  {
    no: "08",
    icon: Drill,
    title: "Machine Tools",
    blurb: "Precision tooling and machinery for industrial workshops.",
    accent: "#27306B",
  },
];

function Row({ item, idx }) {
  const Icon = item.icon;
  const reverse = idx % 2 === 1;
  return (
    <motion.div
      data-testid={`capability-row-${idx}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid lg:grid-cols-12 gap-8 items-center py-14 lg:py-20 border-b border-white/5 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* TEXT */}
      <div className="lg:col-span-7 lg:[direction:ltr]">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-[78px] sm:text-[110px] leading-none font-bold opacity-20"
            style={{
              backgroundImage: `linear-gradient(180deg, ${item.accent}, transparent 90%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {item.no}
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
          {item.title}
        </motion.h3>
        <motion.p
          className="mt-4 text-[#D9D9DE]/85 max-w-xl text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          {item.blurb}
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
          {/* gradient orb */}
          <div
            className="absolute inset-6 rounded-full"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${item.accent}cc, transparent 60%), radial-gradient(circle at 70% 70%, #2F347Daa, transparent 60%)`,
              filter: "blur(20px)",
              opacity: 0.7,
            }}
          />
          {/* outer rings */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id={`row-grad-${idx}`} x1="0" x2="1">
                <stop offset="0%" stopColor={item.accent} />
                <stop offset="100%" stopColor="#2F347D" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="100" cy="100" r="84"
              fill="none" stroke={`url(#row-grad-${idx})`} strokeWidth="0.6"
              strokeDasharray="2 6"
              initial={{ rotate: 0 }} animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
            <motion.circle
              cx="100" cy="100" r="62"
              fill="none" stroke={`url(#row-grad-${idx})`} strokeWidth="0.4"
              strokeDasharray="1 4"
              initial={{ rotate: 0 }} animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
          </svg>
          {/* center icon */}
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="w-20 h-20 rounded-2xl glass-strong grid place-items-center"
              style={{
                boxShadow: `0 0 40px ${item.accent}40, inset 0 0 30px rgba(255,255,255,0.04)`,
              }}
            >
              <Icon size={28} style={{ color: "#F8F9FB" }} />
            </div>
          </div>
          {/* lightning sweep */}
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <div
              className="sweep absolute inset-y-0 w-1/3"
              style={{
                background: `linear-gradient(90deg, transparent, ${item.accent}55, transparent)`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-testid="capabilities-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Flow-field particle background – Capabilities section only ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.52 }}>
        <FlowFieldBackground
          color="#B22F32"
          secondaryColor="#2F347D"
          trailOpacity={0.12}
          particleCount={380}
          speed={0.7}
        />
      </div>

      {/* dark overlay — clean #090B1A base, no grey wash */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "rgba(9,11,26,0.48)",
        }}
      />

      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(47,52,125,0.18), transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-5 mb-10">
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
          <p className="text-[#D9D9DE]/80 max-w-xl text-sm leading-relaxed">
            One contract. Eight specialised industrial service lines, engineered
            around uptime, safety and procurement excellence.
          </p>
        </div>

        <div className="mt-4">
          {items.map((it, i) => (
            <Row key={it.title} item={it} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
