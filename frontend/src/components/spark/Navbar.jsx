import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import SparkMark from "./SparkMark";

const links = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-[#090B1A]/70 border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" data-testid="navbar-logo">
          <div className="relative w-10 h-10">
            <SparkMark size={40} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[17px] tracking-wide">
              SPARK
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#D9D9DE]/60">
              Sharara Renewable Energy
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="relative px-4 py-2 text-sm text-[#D9D9DE]/85 hover:text-white transition-colors"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-[#C63A3A] to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="navbar-cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium relative overflow-hidden group"
            style={{
              background: "linear-gradient(120deg,#A92A2E,#C63A3A 60%,#2F347D)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap size={14} /> Contact Us
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(120deg,#2F347D,#C63A3A)" }}
            />
          </a>

          <button
            data-testid="navbar-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-lg glass"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 py-4 mx-4 mt-3 rounded-2xl glass-strong flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-[#D9D9DE]/90 border-b border-white/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-full text-sm font-medium text-center"
                style={{ background: "linear-gradient(120deg,#A92A2E,#C63A3A 60%,#2F347D)" }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
