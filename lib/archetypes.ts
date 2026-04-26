import type { TraitDimension } from "./questions";

export type Archetype = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  blindSpots: string[];
  dominantTraits: TraitDimension[];
  emoji: string;
  gradient: string;
};

export const archetypes: Record<string, Archetype> = {
  resilient_builder: {
    id: "resilient_builder",
    name: "The Resilient Builder",
    tagline: "Stable hands. Long memory. Quiet engine.",
    description:
      "You absorb shocks the way a good shock should be absorbed, by spreading them out instead of cracking. People underestimate how much of a founder's job is just refusing to flinch on a Tuesday afternoon. You do that part well.",
    strengths: [
      "Hard to rattle when the numbers go bad",
      "Treats setbacks as data, not identity",
      "Coworkers stay because you stay",
    ],
    blindSpots: [
      "Steadiness can drift into stubbornness",
      "May under-plan because you trust yourself to handle whatever comes",
      "Risk of grinding through ideas that should have been killed earlier",
    ],
    dominantTraits: ["emotional_stability"],
    emoji: "🪨",
    gradient: "from-violet-500 to-cyan-500",
  },
  methodical_operator: {
    id: "methodical_operator",
    name: "The Methodical Operator",
    tagline: "The plan is the moat.",
    description:
      "You are the founder investors quietly love because you actually do what you said you would do. You write things down, you revisit them, and you measure whether they happened. This is not glamorous, but the research is unusually loud about it: people who plan in writing convert their traits into outcomes more reliably than people who do not.",
    strengths: [
      "Turns ideas into milestones, then milestones into shipped work",
      "Catches risks early because you actually re-read your own plan",
      "Builds teams that trust the roadmap",
    ],
    blindSpots: [
      "Can over-index on the plan and miss the signal in the room",
      "May resist the kind of weird, off-roadmap bets that produce outliers",
      "Risk of confusing motion on the plan with motion in the market",
    ],
    dominantTraits: ["conscientiousness", "planning_rigor"],
    emoji: "🧭",
    gradient: "from-cyan-500 to-violet-600",
  },
  ecosystem_native: {
    id: "ecosystem_native",
    name: "The Ecosystem Native",
    tagline: "Your network is doing half the work for you.",
    description:
      "You happen to live, work, and socialize where founders are. That is not a small thing. The research is clear that environment is not just background, it is multiplier. The same traits perform very differently in a city full of operators than in a city without one.",
    strengths: [
      "Pattern matching on what good looks like, because you see it weekly",
      "Warm intros are not a strategy, they are just how your week goes",
      "Faster feedback loops because more of your friends speak the language",
    ],
    blindSpots: [
      "May confuse access with skill",
      "Easy to absorb the local consensus and miss what it gets wrong",
      "Risk of building for the people one block away instead of the actual market",
    ],
    dominantTraits: ["environment_quality"],
    emoji: "🌐",
    gradient: "from-cyan-400 to-pink-500",
  },
  visionary_generalist: {
    id: "visionary_generalist",
    name: "The Visionary Generalist",
    tagline: "More ideas than days. More days than finished projects.",
    description:
      "You see things other people do not, and you genuinely enjoy the part of the work that other founders find painful, the messy front edge where nobody knows what to build yet. The catch is the part after that, the long unglamorous middle, where openness alone does not carry you. Pair this archetype with a Methodical Operator and you become dangerous.",
    strengths: [
      "Generates real opportunity, not just commentary",
      "Comfortable in ambiguity that paralyzes other founders",
      "Pulls in talent because the vision is honestly compelling",
    ],
    blindSpots: [
      "Ships less than you think you do",
      "Often three steps ahead of your team, including the ones who matter",
      "Plans tend to live in your head, which makes them hard to delegate",
    ],
    dominantTraits: ["openness"],
    emoji: "🔭",
    gradient: "from-amber-400 to-pink-500",
  },
  untested_optimist: {
    id: "untested_optimist",
    name: "The Untested Optimist",
    tagline: "Real energy. Not yet real evidence.",
    description:
      "You want this. That matters more than the internet pretends it does. But based on what you told the quiz, you have not yet built the habits, the plan, or the surrounding environment that lets that wanting compound. None of that is fixed. The honest read is that you are early, not unfit.",
    strengths: [
      "Genuine enthusiasm is rarer than it looks",
      "Open to feedback in a way more experienced founders are not",
      "Will outwork people who think they are above the work",
    ],
    blindSpots: [
      "Trait scores alone will not save a missing plan",
      "Currently lacks the environment that turns effort into leverage",
      "Risk of mistaking motion for progress on a project nobody asked for yet",
    ],
    dominantTraits: ["emotional_stability", "openness"],
    emoji: "🌱",
    gradient: "from-amber-300 to-violet-500",
  },
};

export const archetypeOrder: string[] = [
  "resilient_builder",
  "methodical_operator",
  "ecosystem_native",
  "visionary_generalist",
  "untested_optimist",
];
