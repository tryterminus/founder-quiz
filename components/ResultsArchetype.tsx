"use client";

import { motion } from "framer-motion";
import type { Archetype } from "@/lib/archetypes";

type Props = {
  archetype: Archetype;
  founderScore: number;
};

export default function ResultsArchetype({ archetype, founderScore }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate overflow-hidden card p-7 sm:p-10"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 opacity-30 bg-gradient-to-br ${archetype.gradient}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-grid"
        aria-hidden
        style={{ maskImage: "radial-gradient(ellipse at top right, black 30%, transparent 70%)" }}
      />

      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
          Your archetype
        </p>
        <ScoreRing value={founderScore} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6"
      >
        <div className="text-5xl sm:text-6xl">{archetype.emoji}</div>
        <h2 className="font-display mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
          {archetype.name}
        </h2>
        <p className="mt-3 text-lg text-text-muted">{archetype.tagline}</p>
      </motion.div>

      <p className="mt-6 text-base sm:text-lg text-text-primary/90 leading-relaxed max-w-2xl">
        {archetype.description}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Column title="Strengths" items={archetype.strengths} accent="violet" />
        <Column title="Blind spots" items={archetype.blindSpots} accent="amber" />
      </div>
    </motion.section>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.max(0, Math.min(100, value)) / 100) * c;

  return (
    <div className="relative size-[72px]">
      <svg viewBox="0 0 64 64" className="size-full -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={r}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="32"
          cy="32"
          r={r}
          stroke="url(#scoreGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: c, strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center leading-none">
          <div className="font-display text-lg font-bold">{value}</div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-text-subtle mt-0.5">
            Score
          </div>
        </div>
      </div>
    </div>
  );
}

function Column({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: "violet" | "amber";
}) {
  const dot =
    accent === "violet"
      ? "bg-gradient-to-r from-violet-500 to-cyan-400"
      : "bg-gradient-to-r from-amber-400 to-pink-500";
  return (
    <div>
      <h3 className="font-display text-sm uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed">
            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dot}`} />
            <span className="text-text-primary/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
