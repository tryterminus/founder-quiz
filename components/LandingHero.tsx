"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Compass, FileSearch } from "lucide-react";

export default function LandingHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-50 bg-grid"
        aria-hidden
        style={{ maskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)" }}
      />

      <main className="mx-auto w-full max-w-3xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3 py-1 text-xs uppercase tracking-[0.18em] text-text-muted">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            Founder Diagnostic, v1
          </div>

          <h1 className="font-display mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Are You{" "}
            <span className="text-gradient-primary">Built</span>{" "}
            to Be a Founder?
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-text-muted leading-relaxed">
            A 12-question diagnostic, based on actual research on what makes founders
            succeed. Find your archetype in under three minutes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/quiz" className="btn-primary group">
              Take the test
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="text-sm text-text-subtle">No email required.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24"
        >
          <h2 className="font-display text-sm uppercase tracking-[0.22em] text-text-subtle">
            How it works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <HowCard
              icon={<ClipboardList className="size-5" />}
              step="01"
              title="Take the quiz"
              body="Twelve questions. One screen at a time. Designed for the way you actually think on a Tuesday."
            />
            <HowCard
              icon={<Compass className="size-5" />}
              step="02"
              title="Get your archetype"
              body="One of five founder profiles, weighted across five trait dimensions, with a composite score."
            />
            <HowCard
              icon={<FileSearch className="size-5" />}
              step="03"
              title="See the research"
              body="Your archetype is mapped to actual academic findings. The reveal at the end is the point."
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20"
        >
          <div className="divider-soft" />
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-text-subtle">
              Backed by research from
            </p>
            <p className="text-sm text-text-muted">
              <span className="font-medium text-text-primary">Branca et al.</span>
              <span className="mx-3 text-text-subtle">·</span>
              <span className="font-medium text-text-primary">Dierberger et al.</span>
              <span className="mx-3 text-text-subtle">·</span>
              <span className="font-medium text-text-primary">Muchineripi et al.</span>
            </p>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-8 text-sm text-text-subtle">
          A companion piece to a research paper by Zach Nye, UVU ENG 2026.
        </div>
      </footer>
    </div>
  );
}

function HowCard({
  icon,
  step,
  title,
  body,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="card p-5 hover:border-[#3a3a44] transition-colors">
      <div className="flex items-center justify-between">
        <div className="inline-flex size-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/[0.03] text-text-primary">
          {icon}
        </div>
        <span className="font-display text-xs tracking-[0.22em] text-text-subtle">
          {step}
        </span>
      </div>
      <h3 className="font-display mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">{body}</p>
    </div>
  );
}
