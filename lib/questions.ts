export type TraitDimension =
  | "emotional_stability"
  | "openness"
  | "conscientiousness"
  | "planning_rigor"
  | "environment_quality";

export type QuestionOption = {
  label: string;
  value: number;
};

export type Question = {
  id: string;
  text: string;
  dimension: TraitDimension;
  options: QuestionOption[];
  satiricalFlavor?: string;
};

export const questions: Question[] = [
  {
    id: "q1",
    text: "Your seed round just got pulled 48 hours before close. What's your first move?",
    dimension: "emotional_stability",
    satiricalFlavor: "There is no wrong answer. There is only the answer you would actually pick.",
    options: [
      { label: "Spiral, draft a quitting email, then delete it.", value: -2 },
      { label: "Vent to one trusted friend, then come back to it tomorrow.", value: 0 },
      { label: "Take a walk, write down what I learned, regroup tonight.", value: 1 },
      { label: "Call the next three investors on my list before I let myself feel anything.", value: 2 },
    ],
  },
  {
    id: "q2",
    text: "A lead engineer quits the morning of a board meeting.",
    dimension: "emotional_stability",
    options: [
      { label: "Cancel the board meeting, I cannot do this today.", value: -2 },
      { label: "Push through the meeting, but I will be visibly off.", value: -1 },
      { label: "Take 20 minutes, reset, then walk in like nothing happened.", value: 1 },
      { label: "Use it as the opening line. Honesty plays in the room.", value: 2 },
    ],
  },
  {
    id: "q3",
    text: "Your launch flops. Three months of work, twelve signups.",
    dimension: "emotional_stability",
    options: [
      { label: "Quietly shut down the project. It clearly was not working.", value: -2 },
      { label: "Take a few weeks off, then maybe revisit.", value: -1 },
      { label: "Treat the twelve signups like gold and start interviews tomorrow.", value: 2 },
      { label: "Ship the next iteration this week. Nothing teaches you faster than another launch.", value: 1 },
    ],
  },
  {
    id: "q4",
    text: "Pick the side project history that sounds most like you.",
    dimension: "openness",
    options: [
      { label: "One idea, three years, still iterating.", value: -1 },
      { label: "Two or three projects, all in the same industry.", value: 0 },
      { label: "A graveyard of half-finished prototypes across wildly different fields.", value: 2 },
      { label: "I have not really had time for side projects.", value: -2 },
    ],
  },
  {
    id: "q5",
    text: "How do you usually find your best ideas?",
    dimension: "openness",
    options: [
      { label: "I read one industry deeply and notice what is broken.", value: 1 },
      { label: "I borrow patterns from one field and apply them to another.", value: 2 },
      { label: "I wait for them. They tend to arrive.", value: 0 },
      { label: "Honestly, ideas are not really my bottleneck.", value: -1 },
    ],
  },
  {
    id: "q6",
    text: "How many of your last five weekends involved working on your startup, hobby project, or side hustle?",
    dimension: "conscientiousness",
    options: [
      { label: "Zero. Weekends are for rest.", value: -2 },
      { label: "One or two, when I felt inspired.", value: -1 },
      { label: "Three or four, mostly by choice.", value: 1 },
      { label: "All five. I am not sure I remember the last weekend off.", value: 2 },
    ],
  },
  {
    id: "q7",
    text: "Your inbox at this exact moment.",
    dimension: "conscientiousness",
    satiricalFlavor: "Be honest. We are all friends here.",
    options: [
      { label: "Inbox zero, with rules and labels.", value: 2 },
      { label: "Under 50 unread, mostly handled within the day.", value: 1 },
      { label: "Somewhere between 200 and 2,000.", value: -1 },
      { label: "I stopped looking at the number.", value: -2 },
    ],
  },
  {
    id: "q8",
    text: "Do you have a written plan for the next six months of your work?",
    dimension: "planning_rigor",
    satiricalFlavor: "Written. Actually written down.",
    options: [
      { label: "Yes, with milestones, owners, and a budget.", value: 2 },
      { label: "Yes, in a doc. It is a little loose, but it exists.", value: 1 },
      { label: "It lives in my head, mostly.", value: -1 },
      { label: "Plans feel premature. I prefer to move and see.", value: -2 },
    ],
  },
  {
    id: "q9",
    text: "Before you commit to a new direction, how often do you write down what would have to be true for it to work?",
    dimension: "planning_rigor",
    options: [
      { label: "Always. I have a template.", value: 2 },
      { label: "Most of the time, in a doc or a notes app.", value: 1 },
      { label: "Sometimes, when the stakes feel high.", value: 0 },
      { label: "Rarely. I trust my read.", value: -2 },
    ],
  },
  {
    id: "q10",
    text: "How do you handle a goal that slips its deadline?",
    dimension: "planning_rigor",
    options: [
      { label: "Run a quick retro on why it slipped, then re-plan.", value: 2 },
      { label: "Push the deadline and keep going.", value: 0 },
      { label: "Get frustrated, then push the deadline.", value: -1 },
      { label: "Lose interest and quietly move on.", value: -2 },
    ],
  },
  {
    id: "q11",
    text: "Your co-founder lives in your city. Pick the city.",
    dimension: "environment_quality",
    options: [
      { label: "San Francisco or New York.", value: 2 },
      { label: "Austin, Boston, LA, Seattle, or another tier-one tech city.", value: 1 },
      { label: "A growing scene, like Miami, Denver, or Provo.", value: 0 },
      { label: "Somewhere quieter. I like the lower noise floor.", value: -1 },
    ],
  },
  {
    id: "q12",
    text: "How many people in your immediate circle have started a company that raised outside funding?",
    dimension: "environment_quality",
    satiricalFlavor: "Friends, former coworkers, family. Not your favorite podcast hosts.",
    options: [
      { label: "Five or more. It is just the water I swim in.", value: 2 },
      { label: "Two or three. A few real ones I can text.", value: 1 },
      { label: "One. They are kind of my benchmark.", value: 0 },
      { label: "None, really. I am the first one in my circle to try this.", value: -2 },
    ],
  },
];
