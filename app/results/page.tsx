"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  calculateScores,
  determineArchetype,
  calculateFounderScore,
  type Scores,
} from "@/lib/scoring";
import ResultsArchetype from "@/components/ResultsArchetype";
import TraitBreakdown from "@/components/TraitBreakdown";
import ResearchReveal from "@/components/ResearchReveal";
import ShareCard from "@/components/ShareCard";

const STORAGE_KEY = "founder-quiz:answers";

export default function ResultsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number> | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        router.replace("/quiz");
        return;
      }
      const parsed = JSON.parse(raw) as Record<string, number>;
      setAnswers(parsed);
    } catch {
      router.replace("/quiz");
      return;
    } finally {
      setHydrated(true);
    }
  }, [router]);

  const computed = useMemo(() => {
    if (!answers) return null;
    const scores: Scores = calculateScores(answers);
    const archetype = determineArchetype(scores);
    const founderScore = calculateFounderScore(scores);
    return { scores, archetype, founderScore };
  }, [answers]);

  if (!hydrated || !computed) {
    return (
      <div className="min-h-dvh grid place-items-center text-text-muted text-sm">
        Loading your results...
      </div>
    );
  }

  return (
    <div className="relative min-h-dvh">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-50" aria-hidden />
      <div className="mx-auto w-full max-w-3xl px-6 pt-10 pb-24 sm:pt-16">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-text-subtle hover:text-text-muted transition-colors"
          >
            Founder Diagnostic
          </Link>
          <ShareCard
            archetype={computed.archetype}
            founderScore={computed.founderScore}
          />
        </div>

        <div className="mt-12 space-y-8">
          <ResultsArchetype
            archetype={computed.archetype}
            founderScore={computed.founderScore}
          />
          <TraitBreakdown scores={computed.scores} />
          <ResearchReveal scores={computed.scores} />
        </div>

        <footer className="mt-16 border-t border-[var(--color-border)] pt-6 text-xs text-text-subtle">
          A companion piece to a research paper by Zach Nye, UVU ENG 2026.
        </footer>
      </div>
    </div>
  );
}
