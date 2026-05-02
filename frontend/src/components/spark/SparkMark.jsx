import React from "react";
import { motion } from "framer-motion";

/**
 * SparkMark — animated SVG "S/lightning bolt" inspired by SPARK logo.
 * Pure SVG, gradient + glow, no PNG dependency.
 */
export default function SparkMark({ size = 220, className = "" }) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }} data-testid="spark-mark">
      {/* outer glow rings */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #2F347D, #C63A3A, #A92A2E, #27306B, #2F347D)",
          filter: "blur(28px)",
          opacity: 0.55,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div
        aria-hidden
        className="absolute inset-2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(198,58,58,0.6), rgba(9,11,26,0.0) 60%), radial-gradient(circle at 70% 70%, rgba(47,52,125,0.7), rgba(9,11,26,0.0) 65%)",
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
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.25 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* outer hex/circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="url(#bolt-grad)"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />

        {/* the bolt (stylized S) */}
        <motion.path
          d="M125 38 L70 100 L100 100 L75 162 L138 92 L108 92 Z"
          fill="url(#bolt-grad)"
          filter="url(#glow)"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.92, 1.04, 0.96, 1], opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          style={{ transformOrigin: "100px 100px" }}
        />
        {/* grainy overlay on bolt */}
        <path
          d="M125 38 L70 100 L100 100 L75 162 L138 92 L108 92 Z"
          fill="#F8F9FB"
          opacity="0.10"
          filter="url(#grain)"
        />

        {/* inner pulse */}
        <motion.circle
          cx="100"
          cy="100"
          r="6"
          fill="#F8F9FB"
          animate={{ opacity: [0.2, 1, 0.2], r: [4, 7, 4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
