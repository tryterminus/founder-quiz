"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Scores } from "@/lib/scoring";
import type { TraitDimension } from "@/lib/questions";
import { TRAIT_LABELS, TRAIT_DESCRIPTIONS } from "@/lib/scoring";

const ORDER: TraitDimension[] = [
  "emotional_stability",
  "openness",
  "conscientiousness",
  "planning_rigor",
  "environment_quality",
];

const WEIGHTED: TraitDimension[] = ["planning_rigor", "environment_quality"];

export default function TraitBreakdown({ scores }: { scores: Scores }) {
  const [active, setActive] = useState<TraitDimension | null>(null);
  return (
    <section className="card p-7 sm:p-9">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            Your trait breakdown
          </h2>
          <p className="mt-2 text-sm text-text-muted max-w-xl">
            Five dimensions, normalized 0 to 100. Tap any row to see what it measures.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-text-subtle">
          Weighting note
          <span className="ml-2 normal-case tracking-normal text-text-muted">
            Planning and environment count more.
          </span>
        </p>
      </div>

      <div className="mt-7 space-y-4">
        {ORDER.map((dim, idx) => {
          const v = scores[dim];
          const isActive = active === dim;
          const isWeighted = WEIGHTED.includes(dim);
          return (
            <button
              key={dim}
              type="button"
              onClick={() => setActive(isActive ? null : dim)}
              className="w-full text-left group focus:outline-none"
              aria-expanded={isActive}
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-text-primary flex items-center gap-2">
                  {TRAIT_LABELS[dim]}
                  {isWeighted ? (
                    <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-text-muted">
                      Weighted ×1.5
                    </span>
                  ) : null}
                </span>
                <span className="font-display tabular-nums text-text-muted">
                  {v}
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
                <motion.div
                  className={`h-full rounded-full ${
                    isWeighted
                      ? "bg-gradient-to-r from-amber-400 to-pink-500"
                      : "bg-gradient-to-r from-violet-500 to-cyan-400"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${v}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.08 * idx,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
              {isActive ? (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-sm text-text-muted leading-relaxed"
                >
                  {TRAIT_DESCRIPTIONS[dim]}
                </motion.p>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
