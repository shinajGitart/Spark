import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

import KaydonLogo from "../partners/Kaydon.png";
import CentralLogo from "../partners/central.png";
import AutoLogo from "../partners/auto.png";
import EcoLogo from "../partners/eco.png";
import HeadLogo from "../partners/head.png";

/* ─── Flag badge ─────────────────────────────────────────────────────── */
/**
 * Country metadata row — plain inline: flag + country name.
 * No pill, no badge, no chip. Just clean premium metadata.
 */
function FlagBadge({ code, label }) {
  return (
    <span className="inline-flex items-center gap-[5px]">
      <img
        src={`https://flagcdn.com/20x15/${code}.png`}
        srcSet={`https://flagcdn.com/40x30/${code}.png 2x`}
        width={16}
        height={12}
        alt={label}
        className="rounded-[2px] object-cover shrink-0 opacity-85"
        draggable={false}
        loading="lazy"
      />
      <span
        className="text-[9px] uppercase tracking-[0.22em] font-medium leading-none"
        style={{ color: "rgba(217,217,222,0.55)" }}
      >
        {label}
      </span>
    </span>
  );
}

/* ─── Global Partner logo tile ─────────────────────────────────────── */
function LogoTile({ name, logo, href, accent = "#C63A3A", flags = [] }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
      data-testid={`logo-tile-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="group relative flex flex-col justify-between pl-4 pr-4 pt-4 pb-3 rounded-xl glass min-w-[230px] h-[96px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(217,217,222,0.28)] cursor-pointer no-underline overflow-hidden"
      style={{ boxShadow: "none" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 18px ${accent}44, 0 4px 24px rgba(0,0,0,0.35)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* accent shimmer on hover */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${accent}16, transparent 70%)`,
        }}
      />

      {/* ── Logo zone — centred in the upper portion ── */}
      <div className="relative flex items-center justify-center flex-1">
        <img
          src={logo}
          alt={name}
          className="max-h-[40px] max-w-[160px] w-auto h-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
          draggable={false}
        />
      </div>

      {/* ── Flag zone — clean metadata row at the bottom ── */}
      {flags.length > 0 && (
        <div
          className="relative flex items-center gap-3 mt-2 pt-2"
          style={{ borderTop: "1px solid rgba(217,217,222,0.08)" }}
        >
          {flags.map((f, idx) => (
            <React.Fragment key={f.code}>
              {idx > 0 && (
                <span
                  aria-hidden
                  className="w-px h-3 shrink-0"
                  style={{ background: "rgba(217,217,222,0.2)" }}
                />
              )}
              <FlagBadge code={f.code} label={f.label} />
            </React.Fragment>
          ))}
        </div>
      )}
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
    flags: [{ code: "us", label: "USA" }],
  },
  {
    name: "Central Automotive Products",
    logo: CentralLogo,
    href: "https://www.central-auto.co.jp/en/index.html",
    accent: "#2F347D",
    flags: [{ code: "jp", label: "Japan" }],
  },
  {
    name: "Autonomy Dynamics",
    logo: AutoLogo,
    href: "https://autonomydynamics.com/en/",
    accent: "#27306B",
    flags: [{ code: "jp", label: "Japan" }],
  },
  {
    name: "Eco Environmental",
    logo: EcoLogo,
    href: "https://eco.yikeou.com/",
    accent: "#C63A3A",
    flags: [
      { code: "cn", label: "China" },
      { code: "jp", label: "Japan" },
    ],
  },
  {
    name: "Chubu Techno",
    logo: HeadLogo,
    href: "https://en.c-techno.co.jp/",
    accent: "#A92A2E",
    flags: [{ code: "jp", label: "Japan" }],
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
                flags={b.flags || []}
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
      {/* ── Lifted premium dark base — makes logos visually clear ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #090B1A 0%, #0D1024 20%, #11152B 50%, #1A2040 75%, #0D1024 90%, #090B1A 100%)",
        }}
      />
      {/* subtle red edge glow — left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 0% 50%, rgba(198,58,58,0.08), transparent 70%)",
        }}
      />
      {/* subtle blue edge glow — right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 50%, rgba(47,52,125,0.10), transparent 70%)",
        }}
      />
      {/* soft top vignette so the section blends with the section above */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #090B1A, transparent)",
        }}
      />
      {/* soft bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #090B1A, transparent)",
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
