import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

import KaydonLogo from "../partners/Kaydon.png";
import CentralLogo from "../partners/central.png";
import AutoLogo from "../partners/auto.png";
import EcoLogo from "../partners/eco.png";
import HeadLogo from "../partners/head.png";

/* ─── Global Partner logo tile ─────────────────────────────────────── */
function LogoTile({ name, logo, href, accent = "#C63A3A" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
      data-testid={`logo-tile-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="group relative flex items-center justify-center pl-4 pr-4 py-3 rounded-xl glass min-w-[220px] h-[66px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(217,217,222,0.28)] cursor-pointer no-underline"
      style={{
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 18px ${accent}44, 0 4px 24px rgba(0,0,0,0.35)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* subtle accent shimmer on hover */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${accent}18, transparent 70%)`,
        }}
      />
      <img
        src={logo}
        alt={name}
        className="relative max-h-[38px] max-w-[150px] w-auto h-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
        draggable={false}
      />
    </a>
  );
}

/* ─── Approved Vendor monogram tile (unchanged) ─────────────────────── */
function BrandTile({ name, mono, accent = "#C63A3A" }) {
  return (
    <div
      className="group relative flex items-center gap-4 pl-3 pr-5 py-3 rounded-xl glass min-w-[220px] transition-all duration-300 hover:-translate-y-0.5"
      data-testid={`brand-tile-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      {/* monogram badge */}
      <div
        className="relative w-11 h-11 rounded-lg grid place-items-center overflow-hidden shrink-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
          border: "1px solid rgba(217,217,222,0.2)",
        }}
      >
        <span
          aria-hidden
          className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${accent}44, transparent 70%)`,
          }}
        />
        <span className="relative font-display font-bold text-[13px] tracking-tight text-[#F8F9FB]">
          {mono}
        </span>
        <span
          className="absolute bottom-0 left-1.5 right-1.5 h-[2px] rounded-full"
          style={{ background: accent, opacity: 0.75 }}
        />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="font-display font-semibold text-[13.5px] text-[#F8F9FB] tracking-tight">
          {name}
        </span>
        <span className="text-[9.5px] uppercase tracking-[0.24em] text-[#D9D9DE]/55">
          Vendor
        </span>
      </div>
    </div>
  );
}

// helper — derive monogram
const mono = (n) => {
  const cleaned = n.replace(/['']/g, "");
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

/* ─── Data ───────────────────────────────────────────────────────────── */
const globalsData = [
  {
    name: "Kaydon Filtration",
    logo: KaydonLogo,
    href: "https://www.kaydonfiltration.com/",
    accent: "#C63A3A",
  },
  {
    name: "Central Automotive Products",
    logo: CentralLogo,
    href: "https://www.central-auto.co.jp/en/index.html",
    accent: "#2F347D",
  },
  {
    name: "Autonomy Dynamics",
    logo: AutoLogo,
    href: "https://autonomydynamics.com/en/",
    accent: "#27306B",
  },
  {
    name: "Eco Environmental",
    logo: EcoLogo,
    href: "https://eco.yikeou.com/",
    accent: "#C63A3A",
  },
  {
    name: "Chubu Techno",
    logo: HeadLogo,
    href: "https://en.c-techno.co.jp/",
    accent: "#A92A2E",
  },
];

const vendorsData = [
  { name: "Aramco", accent: "#C63A3A" },
  { name: "Saudi Energy", accent: "#2F347D" },
  { name: "NEOM", accent: "#A92A2E" },
  { name: "Red Sea Global", accent: "#C63A3A" },
  { name: "KAFD", accent: "#27306B" },
  { name: "SABIC", accent: "#2F347D" },
  { name: "SEVEN", accent: "#C63A3A" },
  { name: "ROSHN", accent: "#A92A2E" },
  { name: "Ma'aden", accent: "#27306B" },
  { name: "SWCC", accent: "#2F347D" },
  { name: "Sadara", accent: "#C63A3A" },
  { name: "YASREF", accent: "#A92A2E" },
  { name: "ADNOC", accent: "#C63A3A" },
  { name: "Bahri", accent: "#2F347D" },
  { name: "Matarat", accent: "#27306B" },
  { name: "Boutique Group", accent: "#A92A2E" },
].map((x) => ({ ...x, mono: mono(x.name) }));

/* ─── Marquee ────────────────────────────────────────────────────────── */
function Marquee({ items, direction = "forward", speed = 70, type = "vendor" }) {
  // duplicate for seamless loop
  const arr = [...items, ...items];
  const cls =
    direction === "forward" ? "marquee-track-fwd" : "marquee-track-rev";

  return (
    <div className="relative overflow-hidden mask-fade">
      <div
        className={`flex gap-3 whitespace-nowrap w-max ${cls}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {type === "logo"
          ? arr.map((b, i) => (
              <LogoTile
                key={i}
                name={b.name}
                logo={b.logo}
                href={b.href}
                accent={b.accent}
              />
            ))
          : arr.map((b, i) => (
              <BrandTile key={i} name={b.name} mono={b.mono} accent={b.accent} />
            ))}
      </div>

      <style>{`
        @keyframes mq-fwd { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes mq-rev { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }
        .marquee-track-fwd { animation: mq-fwd linear infinite; will-change: transform; }
        .marquee-track-rev { animation: mq-rev linear infinite; will-change: transform; }
        .marquee-track-fwd:hover, .marquee-track-rev:hover { animation-play-state: paused; }
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
      `}</style>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────── */
export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, rgba(47,52,125,0.2), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <SectionLabel center>Trusted Network</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 leading-[1.05]">
            Trusted across major{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(120deg,#C63A3A,#F8F9FB,#2F347D)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              industrial ecosystems.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 space-y-3">
          {/* ── Global Partners ── */}
          <div className="flex items-center gap-3 ml-1 mb-4">
            <span
              className="inline-block h-[14px] w-[2px]"
              style={{ background: "#C63A3A", boxShadow: "0 0 10px #C63A3A" }}
            />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9D9DE]/85 font-medium">
              Global Partners
            </span>
          </div>
          <Marquee items={globalsData} direction="forward" speed={55} type="logo" />

          {/* ── Approved Vendors ── */}
          <div className="flex items-center gap-3 ml-1 mt-10 mb-4">
            <span
              className="inline-block h-[14px] w-[2px]"
              style={{ background: "#2F347D", boxShadow: "0 0 10px #2F347D" }}
            />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9D9DE]/85 font-medium">
              Approved Vendors
            </span>
          </div>
          <Marquee items={vendorsData} direction="forward" speed={85} type="vendor" />
          <div className="mt-3">
            <Marquee items={vendorsData} direction="reverse" speed={95} type="vendor" />
          </div>
        </div>
      </div>
    </section>
  );
}
