"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Scores } from "@/lib/scoring";
import { TRAIT_LABELS } from "@/lib/scoring";
import { research, researchOrder } from "@/lib/research";

type Props = {
  scores: Scores;
};

export default function ResearchReveal({ scores }: Props) {
  return (
    <section className="card p-7 sm:p-10 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-aurora"
        aria-hidden
      />

      <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
        The reveal
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.05]"
      >
        Wait, this was actually research.
      </motion.h2>
      <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
        The quiz looks like a founder personality test. It is. But the trait
        dimensions and the weightings are pulled from the academic literature on
        what actually predicts entrepreneurial outcomes. Three sources sit
        underneath every score on this page.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {researchOrder.map((key, idx) => {
          const r = research[key];
          const traitScores = r.relevantTraits.map((t) => ({
            trait: TRAIT_LABELS[t],
            score: scores[t],
          }));
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: 0.08 * idx,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-text-subtle">
                Source 0{idx + 1}
              </div>
              <h3 className="font-display mt-2 text-lg font-bold">
                {r.authorTag}
              </h3>
              <p className="mt-3 text-sm text-text-primary/90 leading-relaxed">
                {r.finding}
              </p>
              <div className="mt-4 space-y-1.5">
                {traitScores.map(({ trait, score }) => (
                  <div
                    key={trait}
                    className="flex items-center justify-between text-xs text-text-muted"
                  >
                    <span>{trait}</span>
                    <span className="font-display tabular-nums text-text-primary">
                      {score}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-text-subtle leading-relaxed">
                {r.citation}
              </p>
              {r.doi ? (
                <a
                  href={r.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[11px] text-text-muted hover:text-text-primary transition-colors break-all"
                >
                  {r.doi}
                </a>
              ) : null}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 max-w-2xl"
      >
        <p className="text-base sm:text-lg text-text-primary/90 leading-relaxed">
          Personality traits matter. The research is consistent on that. But the
          same research is just as consistent that traits do not operate in a
          vacuum. The founders who succeed are the ones who pair their traits
          with deliberate, written planning and an environment that lets those
          traits compound. If your archetype surprised you, that is the point.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link href="#" className="btn-primary">
            Read the full paper
          </Link>
          <Link href="/" className="btn-ghost">
            Take the quiz again
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
