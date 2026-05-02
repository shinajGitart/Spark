import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  FlaskConical,
  Plug,
  Battery,
  Leaf,
  Wrench,
  ShieldCheck,
  Boxes,
} from "lucide-react";

const sectors = [
  { label: "Oil & Gas", icon: Flame },
  { label: "Petrochemical", icon: FlaskConical },
  { label: "Power & Utilities", icon: Plug },
  { label: "Energy", icon: Battery },
  { label: "Environment", icon: Leaf },
  { label: "Maintenance", icon: Wrench },
  { label: "Safety", icon: ShieldCheck },
  { label: "Warehouse Solutions", icon: Boxes },
];

export default function Sectors() {
  return (
    <section
      id="sectors"
      data-testid="sectors-section"
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 0%, rgba(198,58,58,0.15), transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.22em] text-[#D9D9DE]/80">
              <span className="w-1 h-1 rounded-full bg-[#2F347D]" /> Coverage
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-5">
              Sectors we serve.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                data-testid={`sector-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative px-5 py-6 rounded-2xl glass overflow-hidden"
              >
                <span
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 50% 0%, rgba(198,58,58,0.18), transparent 70%)",
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl grid place-items-center"
                    style={{
                      background: "linear-gradient(135deg,#2F347D33,#C63A3A22)",
                      border: "1px solid rgba(217,217,222,0.1)",
                    }}
                  >
                    <Icon size={18} className="text-[#F8F9FB]" />
                  </div>
                  <div className="font-display font-semibold text-[15px]">
                    {s.label}
                  </div>
                </div>
                <div
                  className="mt-4 h-px w-full opacity-30"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #C63A3A, transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
