import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./SectionLabel";

import pic1 from "../we/homepic1.jpg";
import pic2 from "../we/homepic2.jpg";
import pic3 from "../we/homepic3.jpg";
import pic4 from "../we/homwpic4.jpg";
import pic5 from "../we/homepic5.jpg";

/**
 * Background slideshow with elegant gradient fallbacks if image files don't exist.
 * We try /homepic{n}.{ext}; if all fail, the gradient placeholder remains.
 */
const SLIDES = [
  {
    grad:
      "radial-gradient(ellipse at 30% 30%, #2F347D 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, #A92A2E 0%, transparent 55%), linear-gradient(135deg, #0d1230, #1a0e1c)",
    src: pic1,
  },
  {
    grad:
      "radial-gradient(ellipse at 70% 30%, #C63A3A 0%, transparent 55%), radial-gradient(ellipse at 30% 70%, #27306B 0%, transparent 55%), linear-gradient(135deg, #1a0d10, #0d1230)",
    src: pic2,
  },
  {
    grad:
      "radial-gradient(ellipse at 50% 50%, #2F347D 0%, transparent 60%), linear-gradient(135deg, #090B1A, #1a1230)",
    src: pic3,
  },
  {
    grad:
      "radial-gradient(ellipse at 20% 80%, #A92A2E 0%, transparent 60%), linear-gradient(135deg, #0d1230, #090B1A)",
    src: pic4,
  },
  {
    grad:
      "radial-gradient(ellipse at 80% 20%, #C63A3A 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, #2F347D 0%, transparent 55%), linear-gradient(135deg, #090B1A, #150a14)",
    src: pic5,
  },
];

const cards = [
  {
    title: "Saudi-Based Industrial Partner",
    body: "Headquartered in Dammam, embedded in Saudi Arabia's industrial heartland.",
    image: "/card-industrial.jpg",
  },
  {
    title: "Quality-Driven Supply & Services",
    body: "Premium-grade products, pre-vetted vendors and rigorous quality checkpoints.",
    image: "/card-quality.jpg",
  },
  {
    title: "Supporting Major Industrial Sectors",
    body: "From oil & gas and petrochemicals to energy, environment, safety and warehousing.",
    image: "/card-oilgas.jpg",
  },
];

export default function About() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative overflow-hidden py-32 lg:py-40"
    >
      {/* slideshow background */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${SLIDES[i].src}), ${SLIDES[i].grad}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
        {/* dark overlay — keeps text crisp, allows 50% image visibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,11,26,0.75) 0%, rgba(9,11,26,0.62) 40%, rgba(9,11,26,0.82) 100%)",
          }}
        />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Who We Are</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05]"
          >
            Powering Saudi industry with{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(120deg,#C63A3A,#F8F9FB,#2F347D)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              reliable supply
            </span>{" "}
            & service.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-[#D9D9DE]/90 max-w-2xl text-base leading-relaxed"
          >
            SPARK Renewable Energy (Sharara) Co. is a Dammam-based supply and
            service company supporting corporate and industrial organizations
            with reliable, cost-effective and quality-driven solutions.
          </motion.p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c, idx) => {
            return (
              <motion.div
                key={c.title}
                data-testid={`about-card-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-7 rounded-2xl glass-strong overflow-hidden min-h-[220px]"
              >
                {/* card background image */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    backgroundImage: `url(${c.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(9,11,26,0.55) 0%, rgba(9,11,26,0.82) 60%, rgba(9,11,26,0.95) 100%)",
                  }}
                />
                <span
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(198,58,58,0.16), rgba(47,52,125,0.22))",
                  }}
                />
                <span
                  className="absolute -inset-px rounded-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(198,58,58,0.55), rgba(47,52,125,0.55))",
                    WebkitMask:
                      "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: 1,
                  }}
                />
                <div className="relative z-10 flex flex-col justify-end h-full pt-10">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#D9D9DE]/85 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* slide dots */}
        <div className="mt-10 flex items-center gap-2" data-testid="about-slide-dots">
          {SLIDES.map((_, idx) => (
            <span
              key={idx}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === idx ? 28 : 10,
                background: i === idx ? "#C63A3A" : "rgba(217,217,222,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
