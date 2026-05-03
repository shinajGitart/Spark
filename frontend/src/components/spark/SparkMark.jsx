import React from "react";
import { motion } from "framer-motion";

/**
 * SparkMark — GPU-friendly animated SVG "lightning bolt" inspired by SPARK logo.
 * Optimised: static radial glow + subtle breathing; single orbit ring; transforms only.
 */
export default function SparkMark({ size = 220, className = "" }) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width: size,
        height: size,
        transform: "translateZ(0)",
        willChange: "transform",
      }}
      data-testid="spark-mark"
    >
      {/* static soft halo (no filter animation — GPU cheap) */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(198,58,58,0.55) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(47,52,125,0.6) 0%, transparent 60%)",
          willChange: "transform, opacity",
        }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* inner softer glow (static) */}
      <div
        aria-hidden
        className="absolute inset-4 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(248,249,251,0.12), transparent 65%)",
        }}
      />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="bolt-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C63A3A" />
            <stop offset="50%" stopColor="#F8F9FB" />
            <stop offset="100%" stopColor="#2F347D" />
          </linearGradient>
          <radialGradient id="bolt-shine" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F8F9FB" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F8F9FB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* single dashed orbit ring (linear rotate = GPU-friendly, no layout) */}
        <motion.g
          style={{ transformOrigin: "100px 100px", willChange: "transform" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#bolt-grad)"
            strokeWidth="0.7"
            strokeDasharray="2 7"
            opacity="0.8"
          />
        </motion.g>

        {/* the bolt (stylized S) — static with gentle breathing */}
        <motion.path
          d="M125 38 L70 100 L100 100 L75 162 L138 92 L108 92 Z"
          fill="url(#bolt-grad)"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: [1, 1.02, 1], opacity: 1 }}
          transition={{
            scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8, ease: "easeOut" },
          }}
          style={{ transformOrigin: "100px 100px", willChange: "transform" }}
        />

        {/* soft shine overlay on bolt */}
        <path
          d="M125 38 L70 100 L100 100 L75 162 L138 92 L108 92 Z"
          fill="url(#bolt-shine)"
          opacity="0.9"
        />

        {/* inner pulse */}
        <motion.circle
          cx="100"
          cy="100"
          r="5"
          fill="#F8F9FB"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
