import React from "react";

/**
 * SectionLabel — clean vertical-accent uppercase label.
 * Replaces prompt-style capsules across the site.
 */
export default function SectionLabel({ children, accent = "#C63A3A", center = false, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-3 ${center ? "mx-auto" : ""} ${className}`}
      data-testid="section-label"
    >
      <span
        className="inline-block h-[14px] w-[2px]"
        style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
      />
      <span
        className="text-[11px] uppercase tracking-[0.28em] text-[#D9D9DE]/85 font-medium"
      >
        {children}
      </span>
    </div>
  );
}
