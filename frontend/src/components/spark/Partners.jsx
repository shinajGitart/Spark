import React from "react";
import { motion } from "framer-motion";

const globals = [
  "Kaydon Filtration",
  "Central Automotive Products",
  "Chubu Techno",
  "Autonomy Dynamics",
  "Eco Environmental",
];

const vendors = [
  "Aramco","Saudi Energy","NEOM","Red Sea Global","KAFD","SABIC","SEVEN","ROSHN",
  "Ma'aden","SWCC","Sadara","YASREF","ADNOC","Bahri","Matarat","Boutique Group",
];

function Marquee({ items, speed = "slow", testid }) {
  const arr = [...items, ...items];
  return (
    <div className="relative overflow-hidden mask-fade" data-testid={testid}>
      <div
        className={`flex gap-3 whitespace-nowrap w-max ${
          speed === "slow" ? "marquee-track-slow" : "marquee-track"
        }`}
      >
        {arr.map((name, i) => (
          <div
            key={i}
            className="px-5 py-3 rounded-full glass text-sm text-[#D9D9DE]/90 flex items-center gap-2"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background:
                  i % 2 ? "#C63A3A" : "#2F347D",
                boxShadow: `0 0 10px ${i % 2 ? "#C63A3A" : "#2F347D"}`,
              }}
            />
            <span className="font-display font-medium tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
            "radial-gradient(60% 50% at 50% 100%, rgba(47,52,125,0.18), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.22em] text-[#D9D9DE]/80 mx-auto">
            <span className="w-1 h-1 rounded-full bg-[#C63A3A]" /> Trust
          </div>
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

        <div className="mt-14 space-y-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#D9D9DE]/60 ml-1">
            Global Partners
          </div>
          <Marquee items={globals} speed="fast" testid="partners-marquee-global" />

          <div className="mt-10 text-[11px] uppercase tracking-[0.22em] text-[#D9D9DE]/60 ml-1">
            Approved Vendors
          </div>
          <Marquee items={vendors} speed="slow" testid="partners-marquee-vendors" />
          <div className="reverse-track">
            <ReverseMarquee items={vendors} />
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
        .marquee-track-reverse { animation: marquee-rev 50s linear infinite; }
        @keyframes marquee-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}

function ReverseMarquee({ items }) {
  const arr = [...items, ...items];
  return (
    <div className="relative overflow-hidden mask-fade">
      <div className="flex gap-3 whitespace-nowrap w-max marquee-track-reverse">
        {arr.map((name, i) => (
          <div
            key={i}
            className="px-5 py-3 rounded-full glass text-sm text-[#D9D9DE]/90 flex items-center gap-2"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 2 ? "#2F347D" : "#C63A3A",
                boxShadow: `0 0 10px ${i % 2 ? "#2F347D" : "#C63A3A"}`,
              }}
            />
            <span className="font-display font-medium tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
