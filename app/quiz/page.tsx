"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { questions } from "@/lib/questions";
import ProgressBar from "@/components/ProgressBar";
import QuizQuestion from "@/components/QuizQuestion";

const STORAGE_KEY = "founder-quiz:answers";

export default function QuizPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [advancing, setAdvancing] = useState(false);

  const total = questions.length;
  const current = questions[index];
  const selectedValue = answers[current.id] ?? null;

  const handleSelect = useCallback(
    (value: number) => {
      if (advancing) return;
      setAnswers((prev) => ({ ...prev, [current.id]: value }));
      setAdvancing(true);
      window.setTimeout(() => {
        setAdvancing(false);
        if (index === total - 1) {
          const finalAnswers = { ...answers, [current.id]: value };
          try {
            window.localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(finalAnswers),
            );
          } catch {
            // ignore quota errors
          }
          router.push("/results");
        } else {
          setIndex((i) => i + 1);
        }
      }, 250);
    },
    [advancing, current.id, index, total, answers, router],
  );

  const handleBack = useCallback(() => {
    if (index === 0) return;
    setIndex((i) => i - 1);
  }, [index]);

  return (
    <div className="relative min-h-dvh">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-60" aria-hidden />
      <div className="mx-auto w-full max-w-xl px-6 pt-10 pb-20 sm:pt-16">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-text-subtle hover:text-text-muted transition-colors"
          >
            Founder Diagnostic
          </Link>
          <button
            type="button"
            onClick={handleBack}
            disabled={index === 0}
            className="inline-flex items-center gap-1.5 text-sm text-text-muted disabled:opacity-30 hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
        </div>

        <div className="mt-8">
          <ProgressBar current={index + 1} total={total} />
        </div>

        <div className="mt-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            <QuizQuestion
              key={current.id}
              question={current}
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-xs text-text-subtle text-center"
        >
          Selecting an answer auto-advances. Use Back to revise.
        </motion.p>
      </div>
    </div>
  );
}
