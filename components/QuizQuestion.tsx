"use client";

import { motion } from "framer-motion";
import type { Question } from "@/lib/questions";

type Props = {
  question: Question;
  selectedValue: number | null;
  onSelect: (value: number) => void;
};

export default function QuizQuestion({ question, selectedValue, onSelect }: Props) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight">
        {question.text}
      </h2>
      {question.satiricalFlavor ? (
        <p className="mt-3 text-sm text-text-subtle italic">
          {question.satiricalFlavor}
        </p>
      ) : null}

      <div className="mt-8 grid gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = selectedValue === opt.value;
          return (
            <motion.button
              key={`${question.id}-${idx}`}
              type="button"
              onClick={() => onSelect(opt.value)}
              data-selected={isSelected}
              className="option-card group"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04 * idx }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid place-items-center size-6 shrink-0 rounded-full border text-[10px] font-semibold transition-colors ${
                    isSelected
                      ? "border-transparent bg-gradient-to-br from-violet-500 to-cyan-400 text-white"
                      : "border-[var(--color-border)] text-text-subtle group-hover:text-text-muted"
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-base sm:text-[17px] leading-snug">
                  {opt.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
