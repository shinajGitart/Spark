import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Globe, MapPin } from "lucide-react";
import SparkMark from "./SparkMark";

export default function CtaFooter() {
  return (
    <>
      {/* CTA */}
      <section
        id="contact"
        data-testid="cta-section"
        className="relative py-28 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(198,58,58,0.18), transparent 70%), radial-gradient(40% 40% at 80% 50%, rgba(47,52,125,0.22), transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center glass-strong"
          >
            <span
              className="absolute -inset-px rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(198,58,58,0.6), rgba(47,52,125,0.6))",
                WebkitMask:
                  "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: 1,
              }}
            />
            <div className="flex justify-center mb-6">
              <SparkMark size={80} />
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
              Ready to collaborate{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#C63A3A,#F8F9FB,#2F347D)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                with SPARK?
              </span>
            </h3>
            <p className="mt-5 text-[#D9D9DE]/80 max-w-xl mx-auto">
              Connect with our team to discuss industrial supply, service and
              partnership opportunities.
            </p>
            <a
              href="mailto:info@spark-re.sa"
              data-testid="cta-button"
              className="group mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(120deg,#A92A2E 0%,#C63A3A 50%,#2F347D 100%)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        data-testid="footer"
        className="relative pt-20 pb-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <SparkMark size={48} />
              <div>
                <div className="font-display font-bold text-lg">SPARK</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#D9D9DE]/60">
                  Sharara Renewable Energy Co.
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-[#D9D9DE]/70 max-w-md leading-relaxed">
              Industrial supply, service and technical solutions for Saudi
              Arabia's energy, petrochemical and industrial ecosystems.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#D9D9DE]/50 mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm text-[#D9D9DE]/85">
              {["Home","Capabilities","About","Sectors","Partners","Contact"].map((l) => (
                <li key={l}>
                  <a className="hover:text-white transition-colors" href={`#${l.toLowerCase()}`}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#D9D9DE]/50 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-[#D9D9DE]/90">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-[#C63A3A]" />
                Dammam, Kingdom of Saudi Arabia
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C63A3A]" />
                <a href="tel:+966138105757" className="hover:text-white">+966 13 810 5757</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#C63A3A]" />
                <a href="mailto:info@spark-re.sa" className="hover:text-white">info@spark-re.sa</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={15} className="text-[#C63A3A]" />
                <a href="https://www.spark-re.sa" target="_blank" rel="noreferrer" className="hover:text-white">www.spark-re.sa</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D9D9DE]/55">
          <span>© {new Date().getFullYear()} SPARK / Sharara Renewable Energy Co. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C63A3A]" />
            Crafted in Dammam · KSA
          </span>
        </div>
      </footer>
    </>
  );
}
