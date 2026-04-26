import type { TraitDimension } from "./questions";

export type ResearchSource = {
  authorTag: string;
  finding: string;
  citation: string;
  doi?: string;
  relevantTraits: TraitDimension[];
};

export const research: Record<string, ResearchSource> = {
  branca: {
    authorTag: "Branca et al.",
    finding:
      "Across 141 Italian startup founders, conscientiousness and emotional stability were the traits that consistently predicted resilience under pressure. Openness and extraversion did not. The effect was meaningfully stronger for founders who had already run a business before, which is the first hint in the literature that traits do not work in isolation. They get amplified, or muted, by experience and context.",
    citation:
      "Branca, E., Intenza, M., & Doni, F. (2025). Startup entrepreneurs' personality traits and resilience: Unveiling the interplay of prior experience. International Entrepreneurship and Management Journal, 21(2).",
    doi: "https://doi.org/10.1007/s11365-024-01023-y",
    relevantTraits: ["emotional_stability", "conscientiousness"],
  },
  dierberger: {
    authorTag: "Dierberger et al.",
    finding:
      "In a national survey of 355 entrepreneurs across 42 states, founders with a clear mission and vision skewed toward better outcomes, yet a surprising number of them were operating without a real business plan. The pattern is consistent: traits like drive and perseverance only convert to outcomes when they are paired with the early, deliberate decisions a written plan forces you to make.",
    citation:
      "Dierberger, G., Isaacson, M., Erickson, C., & Dierberger, T. P. (2020). Kissing frogs: The challenges of becoming a successful entrepreneur. The Journal of Applied Business Research, 36(2), 59–76.",
    doi: "https://doi.org/10.19030/jabr.v36i2.10342",
    relevantTraits: ["conscientiousness", "planning_rigor"],
  },
  muchineripi: {
    authorTag: "Muchineripi et al.",
    finding:
      "Interviews with 20 immigrant entrepreneurs in South Africa surfaced three competitive advantages over local competition: resilience, adaptability, and networking. The same trait profile produced different outcomes depending on the surrounding ecosystem. Environment is not background context, it is part of the causal story that decides whether a founder's traits actually compound.",
    citation:
      "Muchineripi, J. N., Donga, G., & Gavaza, B. K. (2025). Immigrant entrepreneurs' competitive advantage: The role of cultural and disruptive innovation. International Journal of Business Ecosystem & Strategy, 7(4), 97–105.",
    doi: "https://doi.org/10.36096/ijbes.v7i4.843",
    relevantTraits: ["environment_quality"],
  },
};

export const researchOrder: string[] = ["branca", "dierberger", "muchineripi"];
