import { questions, type TraitDimension } from "./questions";
import { archetypes, type Archetype } from "./archetypes";

export type Scores = Record<TraitDimension, number>;

const TRAIT_WEIGHTS: Record<TraitDimension, number> = {
  emotional_stability: 0.17,
  openness: 0.17,
  conscientiousness: 0.16,
  planning_rigor: 0.25,
  environment_quality: 0.25,
};

export function calculateScores(answers: Record<string, number>): Scores {
  const dimensionTotals: Record<TraitDimension, number> = {
    emotional_stability: 0,
    openness: 0,
    conscientiousness: 0,
    planning_rigor: 0,
    environment_quality: 0,
  };
  const dimensionCounts: Record<TraitDimension, number> = {
    emotional_stability: 0,
    openness: 0,
    conscientiousness: 0,
    planning_rigor: 0,
    environment_quality: 0,
  };

  for (const q of questions) {
    const raw = answers[q.id];
    if (raw === undefined || raw === null) continue;
    dimensionTotals[q.dimension] += raw;
    dimensionCounts[q.dimension] += 1;
  }

  const scores = {} as Scores;
  (Object.keys(dimensionTotals) as TraitDimension[]).forEach((dim) => {
    const count = dimensionCounts[dim];
    if (count === 0) {
      scores[dim] = 50;
      return;
    }
    const avg = dimensionTotals[dim] / count;
    const normalized = ((avg + 2) / 4) * 100;
    scores[dim] = Math.max(0, Math.min(100, Math.round(normalized)));
  });

  return scores;
}

export function calculateFounderScore(scores: Scores): number {
  let total = 0;
  (Object.keys(TRAIT_WEIGHTS) as TraitDimension[]).forEach((dim) => {
    total += scores[dim] * TRAIT_WEIGHTS[dim];
  });
  return Math.round(total);
}

export function determineArchetype(scores: Scores): Archetype {
  const overallAvg =
    (scores.emotional_stability +
      scores.openness +
      scores.conscientiousness +
      scores.planning_rigor +
      scores.environment_quality) /
    5;

  if (overallAvg < 35) {
    return archetypes.untested_optimist;
  }

  const candidates: Array<{ id: string; score: number }> = [
    {
      id: "resilient_builder",
      score: scores.emotional_stability * 1.3 + (scores.conscientiousness + scores.planning_rigor) * 0.35,
    },
    {
      id: "methodical_operator",
      score: scores.conscientiousness * 1.0 + scores.planning_rigor * 1.3,
    },
    {
      id: "ecosystem_native",
      score:
        scores.environment_quality * 1.4 +
        (scores.emotional_stability + scores.openness + scores.conscientiousness) * 0.2,
    },
    {
      id: "visionary_generalist",
      score: scores.openness * 1.4 - scores.conscientiousness * 0.4 + scores.emotional_stability * 0.4,
    },
  ];

  candidates.sort((a, b) => b.score - a.score);
  return archetypes[candidates[0].id];
}

export const TRAIT_LABELS: Record<TraitDimension, string> = {
  emotional_stability: "Emotional Stability",
  openness: "Openness",
  conscientiousness: "Conscientiousness",
  planning_rigor: "Planning Rigor",
  environment_quality: "Environment Quality",
};

export const TRAIT_DESCRIPTIONS: Record<TraitDimension, string> = {
  emotional_stability:
    "How well you stay functional under pressure. The ability to take a hit and still make tomorrow's calls.",
  openness:
    "How readily you generate new ideas, change directions, and notice patterns across unrelated fields.",
  conscientiousness:
    "How reliably you follow through. Habits, attention to detail, and the discipline to finish what you started.",
  planning_rigor:
    "How seriously you treat written planning. The research finds this is where traits actually convert into outcomes.",
  environment_quality:
    "The density of operators, capital, and feedback around you. Founders rarely succeed alone, and rarely succeed in the wrong city.",
};
