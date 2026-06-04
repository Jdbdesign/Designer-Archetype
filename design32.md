# Designer Archetype Quiz — Design Specification
> Read this entire file before writing any code. This is the single source of truth for UI, interactions, animations, data, and logic.
> The quiz questions are UNCHANGED. Only the result output has been significantly enhanced.

---

## 1. Project Overview

A personality-style web quiz that identifies a designer's archetype from 6 possible results. Users answer 10 scenario-based questions and receive a rich, educational result experience — not just a label, but a personalised growth system.

**Stack:** React + Vite. Single-page app. No backend needed. All state in memory.

**Goal of the UI:** Feel like a premium design tool. Every screen should feel share-worthy. The result page should feel like a personalised design school curriculum.

---

## 2. Aesthetic Direction

**Theme:** Dark editorial with vivid archetype colour accents.

- **Background:** `#0D0D0D` — warm near-black
- **Surface cards:** `#161616` with subtle borders
- **Primary text:** `#F0EDE8` — warm off-white
- **Secondary text:** `#888580`
- **Border colour:** `rgba(255,255,255,0.08)`

**Typography:**
- **Display / headings:** `Fraunces` (Google Font) — weight 900 for big headings, weight 400 italic for elegant subheadings
- **Body / UI:** `Plus Jakarta Sans` (Google Font) — 400 body, 500 labels, 600 buttons
- Import both from Google Fonts

**Visual personality:** Dark background with bright archetype colour splashes. Bold serif display type mixed with clean sans UI. Animated — things move, breathe, respond. Not corporate.

---

## 3. Colour System — The 6 Archetypes

| Key | Name | Primary | Glow | Light Text | Dark BG |
|-----|------|---------|------|------------|---------|
| SA | Systems Architect | `#3B82F6` | `rgba(59,130,246,0.15)` | `#93C5FD` | `#0C1829` |
| VP | Visual Poet | `#F97316` | `rgba(249,115,22,0.15)` | `#FED7AA` | `#1C0F05` |
| UW | User Whisperer | `#10B981` | `rgba(16,185,129,0.15)` | `#6EE7B7` | `#041C12` |
| CA | Chaos Agent | `#8B5CF6` | `rgba(139,92,246,0.15)` | `#C4B5FD` | `#100820` |
| SP | Strategic Partner | `#F59E0B` | `rgba(245,158,11,0.15)` | `#FDE68A` | `#1C1404` |
| BB | Bridge Builder | `#EC4899` | `rgba(236,72,153,0.15)` | `#FBCFE8` | `#1C0712` |

---

## 4. The 6 Archetypes — Core Identity Data

```js
const ARCHETYPES = {
  SA: {
    key: "SA",
    name: "Systems Architect",
    emoji: "⬡",
    tagline: "You don't design screens. You design ecosystems.",
    description: "You see the whole before the parts. While others push pixels, you're thinking in tokens, components, and logic. Your work is the invisible foundation that everyone else builds on — and the team would collapse without it.",
    superpowers: ["Design Systems", "Cross-product Thinking", "Developer Handoff"],
    blindspot: "Can over-engineer simple problems",
    parallel: "Dieter Rams",
  },
  VP: {
    key: "VP",
    name: "Visual Poet",
    emoji: "◎",
    tagline: "Every pixel is intentional. Every screen tells a story.",
    description: "You feel design before you think it. Typography, colour, motion aren't just tools — they're your vocabulary. Your work makes people stop mid-scroll and stare. You believe beautiful and functional are not opposites.",
    superpowers: ["Visual Excellence", "Emotional Storytelling", "Brand Identity"],
    blindspot: "Sometimes beauty beats usability",
    parallel: "Jonathan Ive",
  },
  UW: {
    key: "UW",
    name: "User Whisperer",
    emoji: "◉",
    tagline: "If the user is confused, the design has failed.",
    description: "You are the user's advocate in every room. You ask 'but why?' more than anyone on the team — and the product is always better for it. Data and empathy are your twin superpowers. You never ship what you haven't tested.",
    superpowers: ["UX Research", "Information Architecture", "Usability"],
    blindspot: "Can get stuck in research loops",
    parallel: "Don Norman",
  },
  CA: {
    key: "CA",
    name: "Chaos Agent",
    emoji: "◬",
    tagline: "Rules are suggestions. Constraints are invitations.",
    description: "You thrive where others freeze. Ambiguity is your playground and speed is your superpower. You ship before others finish planning — and somehow it always works. You were born for the 0-to-1 problem.",
    superpowers: ["0-to-1 Design", "Rapid Prototyping", "Creative Direction"],
    blindspot: "Creates inconsistency, skips documentation",
    parallel: "Early-stage startup designers",
  },
  SP: {
    key: "SP",
    name: "Strategic Partner",
    emoji: "◇",
    tagline: "Design without business context is just decoration.",
    description: "You speak fluent business and fluent design. Every decision maps to a metric, a goal, an outcome. Leadership listens when you speak — because you've earned that seat. You are equally comfortable in a design crit and a boardroom.",
    superpowers: ["Product Strategy", "Stakeholder Management", "Design Leadership"],
    blindspot: "Can lose craft detail for the big picture",
    parallel: "Julie Zhuo",
  },
  BB: {
    key: "BB",
    name: "Bridge Builder",
    emoji: "◫",
    tagline: "My job is making sure everyone is on the same page.",
    description: "You are the team's connective tissue. Where others see silos, you build bridges. Devs understand your specs. PMs trust your process. Users benefit from your clarity. You make every team you join significantly better.",
    superpowers: ["Team Facilitation", "Handoff Quality", "Design Ops"],
    blindspot: "Under-advocates for their own design vision",
    parallel: "Design ops leaders",
  },
};
```

---

## 5. Quiz Questions — UNCHANGED

```js
const QUESTIONS = [
  {
    id: 1,
    q: "A new project just landed. What's the first thing you do?",
    opts: [
      { l: "A", t: "Open Figma and start sketching immediately", a: "CA" },
      { l: "B", t: "Write down all the questions I need answered first", a: "UW" },
      { l: "C", t: "Ask what the business goal is and who's the target user", a: "SP" },
      { l: "D", t: "Check if there's an existing component or pattern to reuse", a: "SA" },
      { l: "E", t: "Set up a kickoff meeting with the full team", a: "BB" },
      { l: "F", t: "Look for creative references and visual inspiration", a: "VP" },
    ],
  },
  {
    id: 2,
    q: "A developer says your design is 'too complex to build.' You:",
    opts: [
      { l: "A", t: "Simplify it — shipping something beats shipping nothing", a: "CA" },
      { l: "B", t: "Walk them through why each design decision matters", a: "VP" },
      { l: "C", t: "Ask what's complex and find a practical middle ground", a: "BB" },
      { l: "D", t: "Check if this breaks design system consistency", a: "SA" },
      { l: "E", t: "Involve the PM to prioritise what's truly essential", a: "SP" },
      { l: "F", t: "Ask which part most confuses users and start there", a: "UW" },
    ],
  },
  {
    id: 3,
    q: "Your design gets harsh feedback in a critique. Your gut reaction:",
    opts: [
      { l: "A", t: "Defend it — you thought these decisions through carefully", a: "CA" },
      { l: "B", t: "Take notes furiously — every comment is useful data", a: "UW" },
      { l: "C", t: "Check if the critique aligns with the original business goal", a: "SP" },
      { l: "D", t: "Feel inspired — friction leads to better solutions", a: "VP" },
      { l: "E", t: "Check if it violates any established patterns or principles", a: "SA" },
      { l: "F", t: "Think about how to reframe the narrative for all stakeholders", a: "BB" },
    ],
  },
  {
    id: 4,
    q: "Your ideal work environment:",
    opts: [
      { l: "A", t: "Fast-paced startup, shipping features every week", a: "CA" },
      { l: "B", t: "Research-led product team with time to get things right", a: "UW" },
      { l: "C", t: "A company where design has a seat at the executive table", a: "SP" },
      { l: "D", t: "A mature team building and maintaining a design system", a: "SA" },
      { l: "E", t: "A creative studio doing bold, expressive brand work", a: "VP" },
      { l: "F", t: "A cross-functional team where collaboration is the default", a: "BB" },
    ],
  },
  {
    id: 5,
    q: "What does 'good design' mean to you?",
    opts: [
      { l: "A", t: "It ships fast and solves the problem — nothing more, nothing less", a: "CA" },
      { l: "B", t: "It makes the user feel genuinely understood and seen", a: "UW" },
      { l: "C", t: "It scales — works today and still works in three years", a: "SA" },
      { l: "D", t: "It's visually stunning and emotionally resonant", a: "VP" },
      { l: "E", t: "It moves a business metric in the right direction", a: "SP" },
      { l: "F", t: "Everyone — devs, PMs, users — can use and understand it", a: "BB" },
    ],
  },
  {
    id: 6,
    q: "What does your Figma workspace look like?",
    opts: [
      { l: "A", t: "Perfectly structured — named frames, pages, and a cover", a: "SA" },
      { l: "B", t: "A little chaotic but I know exactly where everything is", a: "CA" },
      { l: "C", t: "Clean enough — focused on what matters for handoff", a: "SP" },
      { l: "D", t: "A research repository full of sticky notes and insights", a: "UW" },
      { l: "E", t: "Aesthetic — even my WIP files look presentable", a: "VP" },
      { l: "F", t: "Collaborative — everything is commented and shared with the team", a: "BB" },
    ],
  },
  {
    id: 7,
    q: "If you could have one design superpower, you'd pick:",
    opts: [
      { l: "A", t: "Read minds — understand any user's mental model instantly", a: "UW" },
      { l: "B", t: "Time manipulation — prototype 10 ideas before lunch", a: "CA" },
      { l: "C", t: "See the future — know what will scale before you build it", a: "SA" },
      { l: "D", t: "Perfect vision — spot every visual flaw no one else notices", a: "VP" },
      { l: "E", t: "Persuasion — sell any design idea to any stakeholder", a: "SP" },
      { l: "F", t: "Telepathy — make every team member instantly aligned", a: "BB" },
    ],
  },
  {
    id: 8,
    q: "A product is beautiful but users keep getting confused. You say:",
    opts: [
      { l: "A", t: '"Scrap it. We need to start over."', a: "CA" },
      { l: "B", t: '"Run a usability test before we change anything."', a: "UW" },
      { l: "C", t: '"Beauty and clarity can coexist — let\'s solve both."', a: "VP" },
      { l: "D", t: '"Is this pattern consistent with the rest of the product?"', a: "SA" },
      { l: "E", t: '"What is this confusion costing us in conversion or retention?"', a: "SP" },
      { l: "F", t: '"Let\'s align the team on what we\'re actually optimising for."', a: "BB" },
    ],
  },
  {
    id: 9,
    q: "What would your colleagues most likely say about you?",
    opts: [
      { l: "A", t: '"Always pushing the team to move faster."', a: "CA" },
      { l: "B", t: '"Always asking \'but have we validated this?\'"', a: "UW" },
      { l: "C", t: '"The one who connects design to the bigger picture."', a: "SP" },
      { l: "D", t: '"Makes everything look absolutely incredible."', a: "VP" },
      { l: "E", t: '"The reason our design system doesn\'t fall apart."', a: "SA" },
      { l: "F", t: '"Keeps everyone talking to each other."', a: "BB" },
    ],
  },
  {
    id: 10,
    q: "You feel most proud as a designer when:",
    opts: [
      { l: "A", t: "You shipped something in record time that actually worked", a: "CA" },
      { l: "B", t: "A user test shows your design is genuinely intuitive", a: "UW" },
      { l: "C", t: "Leadership references your work in a company all-hands", a: "SP" },
      { l: "D", t: "Someone screenshots your UI just because it's beautiful", a: "VP" },
      { l: "E", t: "A new designer navigates your whole system with zero onboarding help", a: "SA" },
      { l: "F", t: "A cross-functional project flows smoothly because of how you ran it", a: "BB" },
    ],
  },
];
```

---

## 6. Scoring Logic

```js
function calculateResult(answers) {
  const scores = {};
  answers.forEach(a => { scores[a] = (scores[a] || 0) + 1; });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
```

---

## 7. Enhanced Result Data — All 6 Archetypes

This is the full content dataset for the result page. Each archetype has 8 content sections.

```js
const RESULT_DATA = {

  // ─────────────────────────────────────────────
  SA: {

    masteryLevels: [
      { level: 1, title: "Component Collector", description: "You organise Figma files well and reuse components consistently.", action: "Build your first auto-layout component with documented variants." },
      { level: 2, title: "System Builder", description: "You've built or contributed to a live design system used by others.", action: "Write the governance doc — who can change the system, how, and why." },
      { level: 3, title: "System Strategist", description: "You govern the system, influence adoption across teams, and train others.", action: "Measure your system's adoption rate and present the data to leadership." },
      { level: 4, title: "Platform Thinker", description: "You design the system that designs the product — multi-brand, multi-platform, future-proof.", action: "Study how Salesforce Lightning or IBM Carbon handle cross-product token architecture." },
    ],

    weeklyChallenge: {
      title: "The Token Audit",
      description: "Open a live product you didn't build. Spend 90 minutes reverse-engineering its spacing, colour, and typography into a token structure. What's consistent? What's broken? Document both. Share the audit with one developer and get their reaction.",
      why: "Systems Architects often build systems for ideal conditions. This forces you to think about systems under real-world entropy.",
    },

    antiPattern: {
      name: "The Infinite Refactor",
      description: "You rebuild the button component for the fourth time because you found a marginally better way to structure variants — while the product team is waiting on three screens. Your system becomes a perfectionism trap that blocks shipping.",
      catchIt: "Ask yourself: 'Is this change solving a real problem a designer or developer has hit today, or am I optimising for an imaginary future?' If no one has complained about it, leave it.",
    },

    growthUnlock: "Right now you are the designer teams call when everything is a mess. When you fix the over-engineering habit, you become the one who builds systems that scale to 10x the team — and that's a VP of Design career path.",

    books: [
      { title: "Atomic Design", author: "Brad Frost", reason: "The foundational framework for how components become systems. Read this before you touch Figma tokens." },
      { title: "Design Systems", author: "Alla Kholmatova", reason: "The most practical book on building systems that real teams actually adopt and maintain." },
      { title: "A Philosophy of Software Design", author: "John Ousterhout", reason: "Not a design book — a software architecture book. Systems Architects who read like engineers build better systems." },
    ],

    tools: [
      { name: "Tokens Studio", reason: "Manage design tokens in Figma that sync directly to code. Your system lives in one place." },
      { name: "Supernova", reason: "Transforms your Figma design system into living documentation automatically." },
      { name: "Storybook", reason: "Learn to read it. The best Systems Architects speak the language developers use to document components." },
      { name: "Zeroheight", reason: "Where your system documentation lives publicly. Makes adoption 3x easier." },
      { name: "Figma Variables", reason: "Master this before tokens. It is the bridge between design decisions and code." },
    ],

    designersToFollow: [
      { name: "Nathan Curtis", why: "The most rigorous thinker on design system governance, contribution models, and team adoption." },
      { name: "Kaelig Deloumeau-Prigent", why: "Shopify's design system lead. Study how he thinks about token architecture at scale." },
      { name: "Donna Vitan", why: "Airbnb's design systems work under her shows what mature, multi-brand system thinking looks like in practice." },
    ],

    wisdomCards: [
      "A design system is not a component library. It is a shared language. Build the language first.",
      "The best design systems are boring. Exciting systems are a red flag — it means designers are over-engineering.",
      "If a developer can't find the right component in 30 seconds, your system has failed regardless of how beautiful it is.",
      "Document the decisions, not just the outcomes. Future you will ask 'why is this token named this way?'",
      "Consistency is not the goal. The goal is to reduce cognitive load. Consistency is just one way to get there.",
      "Every component you add to the system is a component every designer must learn. Add with restraint.",
      "The graveyard of design systems is full of ones that solved hypothetical future problems instead of real current ones.",
      "Your system is only as good as its weakest documentation.",
      "Adoption is a design problem. Treat your developers as users. Run usability tests on your system.",
      "The sign of a mature system is not how many components it has — it is how confidently you can say no to adding a new one.",
    ],
  },

  // ─────────────────────────────────────────────
  VP: {

    masteryLevels: [
      { level: 1, title: "Aesthetic Chaser", description: "Your work looks great but you struggle to explain why you made each visual decision.", action: "For your next design, write one sentence justifying every type, colour, and spacing choice before sharing." },
      { level: 2, title: "Visual Storyteller", description: "Your designs have a clear point of view and you can articulate the emotional intent behind them.", action: "Create a mood board before every project — not for inspiration, but to define the emotional target." },
      { level: 3, title: "Brand Architect", description: "You design cohesive visual identities that work across touchpoints and communicate without words.", action: "Take one product you've designed and rebuild it in two completely different visual languages. Compare what gets lost." },
      { level: 4, title: "Creative Director", description: "You set the visual direction for entire products and teams. Your taste becomes the team's taste.", action: "Write a visual brand manifesto for a product you believe in. 500 words. No mockups. Just words." },
    ],

    weeklyChallenge: {
      title: "The Usability Audit",
      description: "Pick your most visually impressive design. Run a 30-minute unmoderated usability test on Maze or Lyssna with 5 strangers. Watch what confuses them. Fix the top two problems without changing the visual language.",
      why: "Your instincts for beauty are strong. This challenge builds the instinct for beauty that also works — which is the rarer skill.",
    },

    antiPattern: {
      name: "The Ego Pixel",
      description: "You spend three hours perfecting a micro-animation that 97% of users will never consciously notice, while the empty state, the error screen, and the onboarding flow are still undesigned. You are designing for your portfolio, not your user.",
      catchIt: "Before any visual refinement, ask: 'What is the least beautiful screen in this product right now?' Design that first.",
    },

    growthUnlock: "Right now you are the designer who makes products beautiful. When you fix the usability gap, you become the designer who makes products beautiful and successful — and that person gets to set creative direction for entire companies.",

    books: [
      { title: "The Elements of Typographic Style", author: "Robert Bringhurst", reason: "Your typographic instincts need a rigorous foundation. This is the book. Read it slowly." },
      { title: "Interaction of Color", author: "Josef Albers", reason: "Colour theory for people who already have colour intuition. It will change how you see everything." },
      { title: "Making and Breaking the Grid", author: "Timothy Samara", reason: "Understanding when to break the grid is only possible when you deeply understand the grid. This is that book." },
    ],

    tools: [
      { name: "Fontaine / Fontpair", reason: "Type pairing tools that go deeper than Google Fonts defaults. Your typography should never look generic." },
      { name: "Coolors Pro", reason: "Build and stress-test colour systems. Check accessibility without leaving the palette tool." },
      { name: "Rive", reason: "Motion design that lives in the product. If you're animating in After Effects, you're designing for a portfolio. Rive is for shipping." },
      { name: "Mobbin", reason: "The best real-world UI reference library. Study patterns from products with serious design investment." },
      { name: "Contrast", reason: "A menubar app that checks colour contrast ratios as you design. Beauty without accessibility is a half-finished job." },
    ],

    designersToFollow: [
      { name: "Rauno Falk", why: "Study how he uses motion to communicate state, not decoration. His Vercel and Arc work is master class material." },
      { name: "Paco Coursey", why: "Obsessive attention to visual detail in UI that also ships. Proves beautiful and functional is not a tradeoff." },
      { name: "Benoît Paumard", why: "Editorial design thinking applied to digital products. His work will expand what you think UI can look like." },
    ],

    wisdomCards: [
      "White space is not empty space. It is breathing room for the eye and signal for the brain.",
      "The most important typographic decision is the one the reader never notices.",
      "Colour is never just colour. It carries temperature, weight, emotion, and cultural memory.",
      "If you can remove it and the design still communicates, it should be removed.",
      "Beautiful design that nobody uses is graphic art. Learn the difference.",
      "The best visual designers are also the most disciplined. Restraint is a skill.",
      "Learn to design in black and white first. Colour should reinforce hierarchy, not create it.",
      "Motion should have a reason. If you can't state the reason in one sentence, remove the animation.",
      "Study print design. The constraints that shaped 500 years of typography are still true on screen.",
      "Your taste is your most valuable asset. Protect it. Don't let bad briefs erode it.",
    ],
  },

  // ─────────────────────────────────────────────
  UW: {

    masteryLevels: [
      { level: 1, title: "Assumption Mapper", description: "You identify what you don't know before designing, and you write down your assumptions.", action: "Before your next project, list every assumption you are making about the user. Prioritise which three you most need to validate." },
      { level: 2, title: "Insight Hunter", description: "You run regular user interviews and usability tests, and you know how to synthesise findings into actionable insights.", action: "Build a personal research repository. Every insight you find should live somewhere you can retrieve it in 60 seconds." },
      { level: 3, title: "Research Strategist", description: "You decide what research method fits which question, and you influence the product roadmap through research findings.", action: "Present a research finding to your leadership team using only business language — no UX jargon, just outcomes and risks." },
      { level: 4, title: "Experience Architect", description: "You design the entire research practice for your organisation, not just individual studies.", action: "Write a research operations handbook: how your team recruits participants, stores insights, and measures research impact." },
    ],

    weeklyChallenge: {
      title: "The Intuition Sprint",
      description: "Design one small feature this week using only your intuition — no research, no interviews, no validation. Ship it. Then watch what actually happens. Document the difference between what you predicted and what occurred.",
      why: "User Whisperers often mistrust their own judgment. This challenge builds calibration — learning when your instincts are right and when they need data.",
    },

    antiPattern: {
      name: "The Research Rabbit Hole",
      description: "You schedule a second round of interviews before acting on the first. You want three more data points before recommending a direction. You are using research as a shield against the discomfort of making a call. Meanwhile, the team ships without you.",
      catchIt: "Set a research budget before every project: 'I will spend X hours on research and then I will make a recommendation regardless of what I still don't know.' Hold the line.",
    },

    growthUnlock: "Right now you are the designer who catches mistakes before they ship. When you fix the decisiveness gap, you become the designer who shapes roadmaps — and that is where product design leadership starts.",

    books: [
      { title: "Continuous Discovery Habits", author: "Teresa Torres", reason: "The definitive book on embedding research into weekly product cycles rather than one-off studies." },
      { title: "Interviewing Users", author: "Steve Portigal", reason: "The craft of user interviews is deeper than you think. This will make every conversation you have more valuable." },
      { title: "The User Experience Team of One", author: "Leah Buley", reason: "How to do meaningful research when you are the only researcher in the room. Practical, realistic, and immediately applicable." },
    ],

    tools: [
      { name: "Maze", reason: "Unmoderated usability testing at scale. Run tests while you sleep and get results before standup." },
      { name: "Dovetail", reason: "Your research repository. Every interview, every insight, every pattern — searchable and shareable." },
      { name: "Lyssna", reason: "Quick preference tests, first-click tests, and five-second tests. Fast validation without a full study." },
      { name: "Hotjar", reason: "Session recordings and heatmaps. Watch what real users do, not what they say they do." },
      { name: "Optimal Workshop", reason: "Card sorting and tree testing tools for information architecture work. Your IA decisions should never be guesses." },
    ],

    designersToFollow: [
      { name: "Teresa Torres", why: "Her continuous discovery framework is the most practical system for embedding research into product teams." },
      { name: "Nikkel Blaase", why: "His writing on UX strategy and research communication is essential for designers who want to influence beyond their team." },
      { name: "Kate Kaplan", why: "NN/g's writing on research methods and synthesis is rigorous and immediately practical. Study her frameworks." },
    ],

    wisdomCards: [
      "The user is not like you. This is the most important sentence in UX. Repeat it before every design decision.",
      "Empathy is not the same as sympathy. Empathy is accurate. Sympathy is projection.",
      "Five users will find 85% of your usability problems. Most teams never run a single test. You are already ahead.",
      "The best research question is not 'what do users want?' It is 'what are users trying to do, and what gets in their way?'",
      "Your assumptions are hypotheses. Treat them accordingly.",
      "A usability problem found in testing costs 10x less to fix than one found in production.",
      "Listening is a design skill. Most designers are too busy thinking about their next question to actually hear the answer.",
      "Research without synthesis is data. Synthesis is the work.",
      "Never ask users what they want. Watch what they do. The gap between the two is where design lives.",
      "The goal of research is not to validate your design. It is to find out what you got wrong before it costs you.",
    ],
  },

  // ─────────────────────────────────────────────
  CA: {

    masteryLevels: [
      { level: 1, title: "Fast Sketcher", description: "You generate ideas quickly and prototype before others have finished their brief.", action: "Run a personal 20-minute design sprint: one problem, six rough solutions, one direction chosen. Time it." },
      { level: 2, title: "Validated Shipper", description: "You move fast AND you check whether what you shipped actually worked before moving to the next thing.", action: "For your last three shipped features, find the usage data. What worked? What didn't? Write it down." },
      { level: 3, title: "Creative Catalyst", description: "You unblock entire teams. Your speed and energy sets the pace and possibility space for everyone around you.", action: "Run a design sprint for your team. Facilitate, not just participate. Watch how others ideate differently from you." },
      { level: 4, title: "Chaos Architect", description: "You channel your bias for action into a system — you move fast within a framework you designed to handle your speed.", action: "Build your own personal design process document: how you start, how you validate, how you hand off. Make it repeatable." },
    ],

    weeklyChallenge: {
      title: "The Documentation Sprint",
      description: "Pick one feature you shipped in the last 30 days. Spend two hours documenting it: the decision rationale, component notes, and edge cases. Show it to a developer who didn't work on it and ask what questions they still have. Fix those gaps.",
      why: "Your superpower is speed. Documentation is the habit that makes your speed compound instead of creating debt.",
    },

    antiPattern: {
      name: "The Perpetual Pivot",
      description: "You get bored three weeks into a project and start proposing a complete redesign. Or you ship v1, declare success, and move on before checking if it actually solved the problem. Your graveyard of half-finished ideas is growing.",
      catchIt: "Commit to a 'completion tax': for every new idea you propose, you must first document one thing you already shipped. No new work until the last thing is properly closed.",
    },

    growthUnlock: "Right now you are the designer everyone wants for the hard first problem. When you fix the follow-through gap, you become the designer who builds things that last and scale — and that is creative director territory.",

    books: [
      { title: "Sprint", author: "Jake Knapp", reason: "The five-day structure that makes your speed legitimate and reproducible for any team." },
      { title: "Shape Up", author: "Ryan Singer", reason: "How Basecamp thinks about scoping and building fast without creating chaos. Read this and then decide what you agree with." },
      { title: "Continuous Discovery Habits", author: "Teresa Torres", reason: "How to move fast without losing the user. The antidote to the speed trap." },
    ],

    tools: [
      { name: "Whimsical", reason: "Fastest tool for flows and wireframes. Gets ideas out of your head before your attention moves on." },
      { name: "Framer", reason: "Prototype in the medium. When you can make it real in hours, you skip weeks of debate." },
      { name: "Raycast", reason: "Speed up every repetitive task on your machine. Chaos Agents should automate everything that can be automated." },
      { name: "Linear", reason: "Track your own work. Your best ideas need a place to live or they disappear into the speed blur." },
      { name: "Notion", reason: "Build a lightweight personal wiki of decisions. Future you will thank current you." },
    ],

    designersToFollow: [
      { name: "Jason Yuan", why: "His work on Mercury OS shows what happens when a Chaos Agent builds a complete vision with patience. Study the balance." },
      { name: "Mariana Castilho", why: "Fast, expressive, experimental design that still ships. Her process shows speed without sacrifice." },
      { name: "Andy Allen", why: "Not Another Film School creator. His approach to creative work at speed without losing substance is directly applicable." },
    ],

    wisdomCards: [
      "Speed is a competitive advantage only when it is paired with direction. Know where you are going before you run.",
      "Done is better than perfect. But done means working, not just shipped.",
      "The mess you create in a sprint needs to be cleaned up in a walk. Budget time for both.",
      "Your best ideas won't survive in your head. Write them down the moment they appear.",
      "Constraints are not the enemy of creativity. They are the engine of it.",
      "The fastest path between two points is a clear brief. Slow down at the start to move faster throughout.",
      "Prototyping is thinking made visible. Build to learn, not just to show.",
      "The designer who ships and learns beats the designer who plans and waits every time.",
      "Your instincts are data. Treat them as a starting point, not a conclusion.",
      "Move fast. But leave signposts so others can follow.",
    ],
  },

  // ─────────────────────────────────────────────
  SP: {

    masteryLevels: [
      { level: 1, title: "Brief Reader", description: "You read the product spec before opening Figma and you ask 'why are we building this?' before 'what should it look like?'", action: "Write a one-page design brief for your current project before doing any design work. Share it with your PM." },
      { level: 2, title: "Metrics-Connected Designer", description: "You know which KPI your design is meant to move and you check the data after shipping.", action: "Pull the usage data for something you shipped six months ago. Write one paragraph on what the data tells you about your original design decisions." },
      { level: 3, title: "Design Strategist", description: "You influence the product roadmap through design thinking. PMs bring you into discovery, not just delivery.", action: "Run a two-hour opportunity mapping session with your PM. Use design tools to map the problem space, not the solution." },
      { level: 4, title: "Design Executive", description: "You set design strategy at the company level — what to build, why, and for whom — not just how.", action: "Write a 12-month design vision for your product. What does excellent look like? Present it to a VP." },
    ],

    weeklyChallenge: {
      title: "The Craft Recovery",
      description: "Block two hours this week for design that has zero business justification — a passion project, a redesign of something you love, pure visual exploration. Share nothing. Measure nothing. Just make something beautiful.",
      why: "Strategic Partners often lose touch with the craft that made them effective in the first place. This challenge reconnects you with why you became a designer.",
    },

    antiPattern: {
      name: "The Metric Trap",
      description: "You start making design decisions that optimise the dashboard number but quietly degrade the experience. The conversion rate goes up. The product gets slightly worse. You told yourself you were being strategic, but you were rationalising compromises.",
      catchIt: "Ask after every business-driven design decision: 'Would I be proud to show this specific change to the user it affects?' If the answer is no, the business case is not strong enough.",
    },

    growthUnlock: "Right now you are the designer who gets invited into strategy conversations. When you reconnect with craft, you become the designer who makes strategy beautiful — and that is the profile that builds design-led companies.",

    books: [
      { title: "The Making of a Manager", author: "Julie Zhuo", reason: "Written by a designer who became VP of Design at Facebook. The most honest account of what design leadership actually requires." },
      { title: "Inspired", author: "Marty Cagan", reason: "The product management bible. Strategic Partners need to understand how PMs think at their best — and at their worst." },
      { title: "Good Strategy Bad Strategy", author: "Richard Rumelt", reason: "Most 'strategies' are just goals with a PowerPoint. This book teaches you what real strategic thinking looks like." },
    ],

    tools: [
      { name: "Amplitude", reason: "Product analytics. Know what users actually do in your product at a level that changes your design decisions." },
      { name: "Figjam", reason: "Strategy mapping, opportunity trees, and alignment sessions. Your best tool for bringing non-designers into the design process." },
      { name: "Pitch", reason: "Design your strategy presentations with the same care you give your product. How you communicate strategy is part of the strategy." },
      { name: "Productboard", reason: "Understand how product teams prioritise. Strategic Partners who speak prioritisation fluently have more influence." },
      { name: "Airtable", reason: "Build a design impact tracker — what shipped, what metric it affected, what you learned. Your personal performance record." },
    ],

    designersToFollow: [
      { name: "Julie Zhuo", why: "Her writing on design management, influence, and strategy is the most honest and practical in the field." },
      { name: "Khoi Vinh", why: "Former NYT design director. His thinking on design leadership, process, and the business of design is essential reading." },
      { name: "John Maeda", why: "His Design in Tech reports are the best annual snapshot of where design strategy and business intersect." },
    ],

    wisdomCards: [
      "Strategy is not a plan. Strategy is a diagnosis, a guiding policy, and a set of coherent actions. Most design strategies are just plans.",
      "If you cannot explain your design decision in business terms, you do not fully understand it yet.",
      "The most dangerous designer in any company is one who optimises metrics without caring about the user. Don't become that designer.",
      "Influence without craft is politics. Craft without influence is art. You need both.",
      "The best design metric is not a metric at all — it is a clear description of the user behaviour you are trying to change.",
      "PMs think in roadmaps. Engineers think in systems. Designers think in experiences. Learn all three languages.",
      "A seat at the table means nothing if you do not have a point of view when you sit down.",
      "Design leadership is not about having better taste than your team. It is about building a team with better taste than you.",
      "Ship imperfect and learn. The cost of perfect is rarely worth the delay.",
      "Every design decision is a business decision. Start treating it that way before someone else does it for you.",
    ],
  },

  // ─────────────────────────────────────────────
  BB: {

    masteryLevels: [
      { level: 1, title: "Clear Communicator", description: "Your design specs are readable by developers without a walkthrough. Your annotations are complete.", action: "Pick a design you handed off last month. Sit with the developer and ask them to narrate what they understood from the file alone. Note every gap." },
      { level: 2, title: "Process Designer", description: "You have improved at least one recurring workflow on your team — a better review process, a cleaner handoff format, a sharper design critique structure.", action: "Map the current design-to-development workflow at your company. Mark every step where information gets lost. Fix one of them this week." },
      { level: 3, title: "Culture Builder", description: "You create the conditions for better design to happen — through how you run crits, how you onboard new designers, how you frame design to non-designers.", action: "Write and share a 'How to work with me' document. Make it honest about your process and your needs." },
      { level: 4, title: "Design Ops Leader", description: "You build the infrastructure for design at scale — tools, rituals, documentation, and the standards that make every designer on the team better.", action: "Design the onboarding experience for a new designer joining your team. What do they need to know in week 1? Week 4? Week 12?" },
    ],

    weeklyChallenge: {
      title: "The Strong Opinion",
      description: "In your next design review or team meeting, state a clear design opinion you actually hold — one you would normally soften or phrase as a question. State it as a conviction. Watch what happens. Note whether the outcome was better or worse than your usual approach.",
      why: "Bridge Builders are so good at holding space for others' opinions that they forget to advocate for their own. This challenge builds that muscle.",
    },

    antiPattern: {
      name: "The Invisible Designer",
      description: "You run such smooth processes and facilitate so well that people forget you are also a designer with a point of view. In meetings, you ask great questions. In reviews, you synthesise everyone's feedback. But nobody knows what you actually think the design should be — including you.",
      catchIt: "Before every design review, write down your own honest assessment of the work in three sentences. Say it out loud at some point in the meeting, even briefly.",
    },

    growthUnlock: "Right now you are the designer every team wants because you make everything work better. When you add a clear creative voice to your facilitation skills, you become the design leader who sets both the process and the direction — that is a Head of Design profile.",

    books: [
      { title: "The Design of Everyday Things", author: "Don Norman", reason: "The foundational text for thinking about how design communicates intent. Your clarity instincts will sharpen after this." },
      { title: "Radical Candor", author: "Kim Scott", reason: "How to care deeply about people and still say the hard true thing. The Bridge Builder's essential operating manual." },
      { title: "Ruined by Design", author: "Mike Monteiro", reason: "A sharp argument for designers having and defending strong points of view. Uncomfortable and necessary reading for you." },
    ],

    tools: [
      { name: "Loom", reason: "Record async design walkthroughs. Bridges the gap between your Figma file and the developer's understanding without requiring a meeting." },
      { name: "Notion", reason: "Build the team knowledge base. Processes, decisions, onboarding, retros — you are the person who makes this actually useful." },
      { name: "Figjam", reason: "Your collaboration superpower. Run retrospectives, alignment sessions, and design kickoffs that actually produce decisions." },
      { name: "Linear", reason: "Understand how engineering tracks work. Bridge Builders who understand the dev workflow have significantly more influence on handoff quality." },
      { name: "Slite", reason: "Documentation platform for teams. Your handoff docs, design principles, and process guides should live somewhere permanent." },
    ],

    designersToFollow: [
      { name: "Mia Blume", why: "Design leadership thinker focused on culture, process, and how design teams actually function at a human level." },
      { name: "Pablo Stanley", why: "Watch how he communicates design to broad audiences — his clarity and warmth is the Bridge Builder archetype at its best." },
      { name: "Ximena Vengoechea", why: "Her work on listening and communication as professional skills is directly applicable to every Bridge Builder's practice." },
    ],

    wisdomCards: [
      "Clarity is kindness. A vague design spec is not a neutral act — it transfers your uncertainty to the developer.",
      "Facilitation is a design skill. The best meeting facilitators are also the best designers of interactions.",
      "You cannot bridge a gap you have not first mapped. Understand both sides before you try to connect them.",
      "The most important thing you can do in a design review is separate observation from interpretation from recommendation. Keep those three things distinct.",
      "Documentation is not bureaucracy. It is the memory of the team.",
      "Your ability to make people feel heard is a superpower. Do not let it become a shield for avoiding your own opinion.",
      "The smoothest handoff is one where the developer never has to ask a question. Build toward that standard.",
      "Good process is invisible. People only notice process when it breaks.",
      "Your influence is proportional to how well people understand what you actually stand for.",
      "Make the implicit explicit. The assumptions in your design file are the bugs in the product.",
    ],
  },
};
```

---

## 8. Team Chemistry Map

This section lives on the result page. For each archetype, it describes how they work with each of the other five.

```js
const TEAM_CHEMISTRY = {
  SA: {
    VP: { energy: "Creative tension", label: "Productive friction", description: "The Architect wants consistency. The Poet wants expression. When it works, you produce systems that are also beautiful. When it doesn't, you fight about whether the button should have a box-shadow." },
    UW: { energy: "Natural allies", label: "Strong collaboration", description: "You build it. They validate it. The Whisperer's research tells the Architect which patterns to standardise. Listen to them — their data is your prioritisation tool." },
    CA: { energy: "High friction", label: "Speed vs structure", description: "The Chaos Agent breaks your system repeatedly. You fix it repeatedly. Establish a 'new pattern protocol' together early — a lightweight way for them to propose new components without bypassing governance." },
    SP: { energy: "Strategic alignment", label: "Strong collaboration", description: "The Partner cares about outcomes. You care about the infrastructure that delivers them. Together you make a compelling case for design investment. Align on what the system enables for the business." },
    BB: { energy: "Operational harmony", label: "Natural allies", description: "The Builder makes sure your system actually reaches developers. They are your adoption strategy made human. Invest in this relationship — it determines whether your system lives or dies." },
  },
  VP: {
    SA: { energy: "Creative tension", label: "Productive friction", description: "They want tokens. You want texture. The best outcomes happen when you use the system as a foundation and push the expression within it, not against it." },
    UW: { energy: "Necessary check", label: "Healthy tension", description: "They will challenge every beautiful decision with 'but did users validate this?' Let them. Your best work survives usability testing. Work that doesn't survive wasn't finished." },
    CA: { energy: "High creative energy", label: "Explosive collaboration", description: "Two people who move fast and make bold decisions. Incredible for early-stage work, dangerous in a mature product. Agree on a review gate before anything gets in front of users." },
    SP: { energy: "Translation needed", label: "Strategic tension", description: "They speak in metrics. You speak in emotions. Neither is wrong. Build a shared vocabulary: 'emotional engagement drives retention' is a sentence both of you can work with." },
    BB: { energy: "Amplification", label: "Strong collaboration", description: "The Builder ensures your visual decisions are understood and implemented correctly. Brief them well — the quality of their communication determines whether your vision survives the handoff." },
  },
  UW: {
    SA: { energy: "Natural allies", label: "Strong collaboration", description: "Your research identifies which patterns confuse users. Their system is how those patterns get fixed permanently. Share findings generously — a good Architect will build your insights into the system." },
    VP: { energy: "Necessary check", label: "Healthy tension", description: "Push them. Your job is to make sure the beautiful thing also works. Frame usability findings as a gift: 'Here is what is stopping this from being as good as it looks.'" },
    CA: { energy: "Opposing forces", label: "High tension", description: "You validate. They skip validation. You slow down. They speed up. Find the minimum viable validation that satisfies you both: one five-person test before anything ships." },
    SP: { energy: "Strategic alliance", label: "Strong collaboration", description: "Your research gives the Partner ammunition for roadmap conversations. Make your findings business-legible. 'Users are confused by X and that is costing us Y' is a sentence they can take to leadership." },
    BB: { energy: "Operational harmony", label: "Natural allies", description: "The Builder makes sure your research reaches the whole team, not just the designer. Build a shared repository they can access. Your insights should outlast the project." },
  },
  CA: {
    SA: { energy: "High friction", label: "Speed vs structure", description: "You create. They govern. Agree on a 'minimum viable system compliance' standard so you are not blocked and they are not rebuilding after every sprint." },
    VP: { energy: "High creative energy", label: "Explosive collaboration", description: "Best creative partnership in design. Most likely to ship something visually extraordinary. Also most likely to ship something confusing. Assign someone to be the critical voice before launch." },
    UW: { energy: "Opposing forces", label: "High tension", description: "They want to test before you want to finish. Move fast AND run one quick test — even a five-question Maze study takes two hours and will save you from the most expensive mistakes." },
    SP: { energy: "Useful friction", label: "Productive tension", description: "They ask 'why are we building this?' You ask 'how quickly can we build it?' Both questions are necessary. Let them slow you down at the brief stage so you can run during execution." },
    BB: { energy: "Essential pairing", label: "Critical relationship", description: "The Builder translates your work to the rest of the team. Without them, your velocity creates confusion. Invest in this relationship — brief them before you finish, not after." },
  },
  SP: {
    SA: { energy: "Strategic alignment", label: "Strong collaboration", description: "You set the direction. They build the infrastructure for it. Bring the Architect into strategy conversations early — a design system built around your strategic direction is far more valuable than a generic one." },
    VP: { energy: "Translation needed", label: "Strategic tension", description: "Respect their craft. 'Make it more aesthetic' is not a brief. Give them emotional and experiential targets and let them find the expression. Your metrics are the destination; their craft is the vehicle." },
    UW: { energy: "Strategic alliance", label: "Strong collaboration", description: "Elevate their research. When a Whisperer brings you a finding, your job is to turn it into a strategic recommendation. You are the translator between user insight and business decision." },
    CA: { energy: "Useful friction", label: "Productive tension", description: "They execute. You direct. Give them a clear brief and then get out of their way. Micromanaging a Chaos Agent kills the thing you hired them for." },
    BB: { energy: "Operational partnership", label: "Strong collaboration", description: "The Builder makes your strategy legible to the entire organisation. Invest in how they communicate your decisions. The quality of internal design communication directly affects how much the company values design." },
  },
  BB: {
    SA: { energy: "Operational harmony", label: "Natural allies", description: "You make their system real for developers. Share what is and isn't getting implemented — this feedback is how they improve the system. You are their ground truth." },
    VP: { energy: "Amplification", label: "Strong collaboration", description: "Your clarity protects their vision in the handoff. Study their work deeply before briefing developers. The best thing you can do for a Visual Poet is ensure their intent survives implementation intact." },
    UW: { energy: "Operational harmony", label: "Natural allies", description: "You build the process. They fill it with insight. Create shared templates for how research findings get documented and shared. Make it easy for their work to reach everyone." },
    CA: { energy: "Essential pairing", label: "Critical relationship", description: "You are the person who makes their speed sustainable for the team. Your process is the container their chaos operates within. This relationship requires high trust — build it early." },
    SP: { energy: "Operational partnership", label: "Strong collaboration", description: "You execute their strategy at the team level. When you understand the strategic intent behind a decision, your facilitation becomes sharper. Ask them why, not just what." },
  },
};
```

---

## 9. Result Page — Visual Layout & Component Spec

The result page is a scrollable single column. Max-width 640px. Sections appear in this order:

### Section 1 — Archetype Identity Card (UNCHANGED from original spec)
The hero card as previously designed. First visible section. Screenshot-worthy.

### Section 2 — Design Fingerprint (Radar Chart)
- A hexagonal polygon radar chart showing scores across all 6 archetypes
- Six axes, one per archetype, labelled with archetype key (SA, VP, UW, CA, SP, BB)
- Filled polygon in archetype primary colour at 30% opacity, outlined in archetype primary at 80% opacity
- Animate: polygon scales from 0 → full size over 600ms ease-out when section enters viewport
- Below chart: label `YOUR DESIGN DNA` in 10px uppercase, secondary colour
- No external chart library — implement using SVG polygon with calculated points from score percentages

### Section 3 — 4 Levels of Mastery
- Section heading: `YOUR GROWTH PATH` — 10px uppercase, secondary colour
- Four rows, one per mastery level
- Each row: level number badge (circle, 24px, archetype primary bg) + level title (Fraunces 700, 15px) + description (Plus Jakarta Sans 400, 13px, secondary colour)
- The probable current level is highlighted: slightly brighter row, level badge is fully filled, border `1px solid archetype primary`
- To determine current level: map quiz answers to a heuristic (e.g. if scores are evenly distributed = level 1-2; if archetype dominates = level 2-3; show level 2 as default)
- The action for the current level renders in a separate styled block below: label `YOUR NEXT STEP`, action text in archetype primary colour

### Section 4 — This Week's Challenge
- Section heading: `THIS WEEK'S CHALLENGE`
- Card: background archetype dark bg, border archetype primary at 20% opacity, padding 20px, border-radius 14px
- Challenge title in Fraunces 700, 18px, archetype light text
- Challenge description in Plus Jakarta Sans 400, 14px, `#888580`
- `Why this challenge:` label + reason text in italic, archetype primary colour, 13px

### Section 5 — Anti-Pattern Warning
- Section heading: `WATCH OUT FOR THIS`
- Card: background `rgba(255,255,255,0.03)`, left border `3px solid #F59E0B` (amber warning colour for all archetypes), padding 18px, border-radius 0 14px 14px 0
- Anti-pattern name: Fraunces 700, 16px, `#FDE68A` (warm amber)
- Description: Plus Jakarta Sans 400, 13px, `#888580`
- `How to catch it:` label + text in 13px, `#F0EDE8`

### Section 6 — Team Chemistry
- Section heading: `HOW YOU WORK WITH OTHERS`
- 5 rows, one per other archetype
- Each row: archetype colour dot (10px) + archetype name (13px, 500) + chemistry label badge + description (13px, secondary)
- Chemistry label badge colours:
  - "Natural allies" / "Strong collaboration" → archetype primary bg at 15%, text archetype primary
  - "Productive friction" / "Healthy tension" → `rgba(245,158,11,0.15)`, text `#FDE68A`
  - "High tension" / "Opposing forces" → `rgba(239,68,68,0.15)`, text `#FCA5A5`
- Rows expand/collapse on click to show full description. Collapsed state shows only dot + name + badge.

### Section 7 — Reading List
- Section heading: `READ THESE NEXT`
- 3 book cards, stacked
- Each card: flex row — book icon placeholder (40×52px rectangle, archetype primary at 10% bg) on left, title (Fraunces 700, 14px) + author (12px secondary) + reason (13px, `#888580`) on right
- Cards animate in with staggered `fadeUp`, 80ms apart

### Section 8 — Tools
- Section heading: `TOOLS FOR YOUR ARCHETYPE`
- 5 tool rows: tool name (Plus Jakarta Sans 500, 14px, `#F0EDE8`) + reason (13px, `#888580`)
- Small coloured dot (6px, archetype primary) as bullet before each tool name
- Simple list, no expansion needed

### Section 9 — Designers to Follow
- Section heading: `DESIGNERS TO STUDY`
- 3 cards, similar layout to books but horizontal
- Name in Fraunces 700, 14px. Why in 13px secondary.

### Section 10 — Wisdom Card
- Section heading: `TODAY'S INSIGHT`
- Single card with a randomly selected wisdom quote from the pool of 10
- Large open-quote character `"` in archetype primary, 64px, Fraunces
- Quote text: Fraunces 400 italic, 16px, `#F0EDE8`, line-height 1.6
- Refresh icon button (↻) in bottom right: clicking randomises to a new quote with a fade transition
- Card background: archetype dark bg

### Section 11 — Growth Unlock
- Section heading: `YOUR NEXT LEVEL`
- Full-width card, archetype primary gradient background at 8% opacity
- Border: archetype primary at 20% opacity
- Body text: Plus Jakarta Sans 400, 14px, `#F0EDE8`, line-height 1.75

### Section 12 — Share + Retake
- Same as original spec: copy button + retake button
- Clipboard text uses the format from original spec

---

## 10. App State Structure

```js
const initialState = {
  screen: "intro",
  currentQuestion: 0,
  answers: [],
  selectedOption: null,
  result: null,
  scores: {},
  isAnimating: false,
  currentWisdomIndex: {},  // { archetypeKey: number } — tracks which wisdom card is showing
};
```

---

## 11. Screen Flow

```
intro → quiz (Q1–Q10) → calculating (1.8s) → result (scrollable)
                                                     ↓
                                              retake → intro
```

---

## 12. File Structure

```
/src
  App.jsx
  screens/
    IntroScreen.jsx
    QuizScreen.jsx
    CalculatingScreen.jsx
    ResultScreen.jsx
  components/
    ProgressBar.jsx
    OptionCard.jsx
    ArchetypeCard.jsx
    RadarChart.jsx              ← NEW: SVG polygon radar
    MasteryLevels.jsx           ← NEW
    WeeklyChallenge.jsx         ← NEW
    AntiPattern.jsx             ← NEW
    TeamChemistry.jsx           ← NEW
    ReadingList.jsx             ← NEW
    ToolsList.jsx               ← NEW
    DesignersToFollow.jsx       ← NEW
    WisdomCard.jsx              ← NEW
    GrowthUnlock.jsx            ← NEW
    ScoreBreakdown.jsx
    CustomCursor.jsx
    BackgroundOrbs.jsx
  data/
    archetypes.js
    questions.js
    resultData.js               ← NEW: all growth content
    teamChemistry.js            ← NEW
  hooks/
    useQuizState.js
    useCursorEffect.js
  styles/
    globals.css
    variables.css
```

---

## 13. CSS Keyframes (globals.css)

```css
@keyframes drift {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-20px) translateX(8px); }
  66% { transform: translateY(12px) translateX(-6px); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 60px var(--archetype-glow), 0 0 120px var(--archetype-glow-50); }
  50% { box-shadow: 0 0 90px var(--archetype-glow), 0 0 160px var(--archetype-glow-50); }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes scaleBounce {
  0% { opacity: 0; transform: scale(0.4); }
  70% { transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes dotPing {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}
@keyframes flipUp {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-14px); }
}
@keyframes flipIn {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes radarDraw {
  from { opacity: 0; transform: scale(0.3); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes wisdomFade {
  from { opacity: 0; } to { opacity: 1; }
}
```

---

## 14. Accessibility

- `prefers-reduced-motion`: all animations wrapped, instant transitions as fallback
- Keyboard: options selectable with `1–6` or arrow keys, Enter to confirm
- Focus rings: `2px solid archetype primary`, offset 2px
- WCAG AA contrast on all text
- Screen reader labels on all visual-only elements
- Collapsible team chemistry rows: `aria-expanded` on toggle buttons

---

## 15. Key Rules

1. Questions and scoring logic are UNCHANGED
2. The result page is additive — all new sections add value on top of the existing hero card
3. All growth content is entirely data-driven from `resultData.js` — no content hardcoded in components
4. Mobile first — test every result section at 375px
5. The result page must be fully usable without JavaScript animations (content comes first)
