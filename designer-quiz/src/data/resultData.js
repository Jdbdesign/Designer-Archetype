export const RESULT_DATA = {

  SA: {
    masteryLevels: [
      { level: 1, title: "Component Collector", description: "You organise Figma files well and reuse components consistently.", action: "Build your first auto-layout component with documented variants." },
      { level: 2, title: "System Builder", description: "You've built or contributed to a live design system used by others.", action: "Write the governance doc — who can change the system, how, and why." },
      { level: 3, title: "System Strategist", description: "You govern the system, influence adoption across teams, and train others.", action: "Measure your system's adoption rate and present the data to leadership." },
      { level: 4, title: "Platform Thinker", description: "You design the system that designs the product — multi-brand, multi-platform, future-proof.", action: "Study how Salesforce Lightning or IBM Carbon handle cross-product token architecture." },
    ],
    weeklyChallengeVariants: [
      {
        title: "The Token Audit",
        description: "Open a live product you didn't build. Spend 90 minutes reverse-engineering its spacing, colour, and typography into a token structure. What's consistent? What's broken? Document both. Share the audit with one developer and get their reaction.",
        why: "Systems Architects often build systems for ideal conditions. This forces you to think about systems under real-world entropy.",
      },
      {
        title: "The Component Fast",
        description: "Pick your most complex, most-loved component and replace it with the simplest version that still works. Run it live for one week. Watch what breaks, what teams actually complain about, and what nobody notices was gone. Document what the gap reveals about real usage.",
        why: "Systems Architects build for completeness. This challenge builds instinct for minimum viable systems — learning to distinguish what the system actually needs from what you think it should have.",
      },
    ],
    antiPatternVariants: [
      {
        name: "The Aesthetic System",
        description: "You've started importing visual preferences into your token structure. The system now has 14 border-radius options 'for design expressiveness' and a bespoke motion library before any team member asked for one. The foundation has become a canvas for your taste rather than infrastructure for the team.",
        catchIt: "Add a 'Requested By' field to every new token or component. If you can't name a specific designer or developer who hit a real problem this solves, archive it. Build in response to demand, not in anticipation of preference.",
      },
      {
        name: "The Governance Trap",
        description: "You have a 40-page contribution model, a deprecation policy, a naming convention committee, and a token taxonomy document — but only 12 components in the system. You've built the government before the country exists. Meanwhile, product teams are building their own components because the process to add to yours takes three weeks.",
        catchIt: "Governance should emerge from real conflicts, not anticipated ones. Every policy you write must solve a problem that has already happened at least twice. Delete any governance rule you can't trace to a specific past incident.",
      },
      {
        name: "The Infinite Refactor",
        description: "You rebuild the button component for the fourth time because you found a marginally better way to structure variants — while the product team is waiting on three screens. Your system becomes a perfectionism trap that blocks shipping.",
        catchIt: "Ask yourself: 'Is this change solving a real problem a designer or developer has hit today, or am I optimising for an imaginary future?' If no one has complained about it, leave it.",
      },
    ],
    growthUnlockVariants: [
      "Right now you combine system thinking with creative range — you can see how visual ideas scale into token structures in a way most systems designers can't. When you add the discipline of building only what's been requested, you become the designer who creates beautiful AND adopted systems. That combination is what drives staff design and principal designer roles.",
      "Right now you combine system thinking with deep process instincts — you understand how design systems fail from a governance and adoption standpoint. When you ship more and govern less, you'll prove the system's value incrementally rather than all at once, which is how systems actually get funded and maintained. That's the difference between a design systems IC and a design systems leader.",
      "Right now you are the designer teams call when everything is a mess. When you fix the over-engineering habit, you become the one who builds systems that scale to 10x the team — and that's a VP of Design career path.",
    ],
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

  VP: {
    masteryLevels: [
      { level: 1, title: "Aesthetic Chaser", description: "Your work looks great but you struggle to explain why you made each visual decision.", action: "For your next design, write one sentence justifying every type, colour, and spacing choice before sharing." },
      { level: 2, title: "Visual Storyteller", description: "Your designs have a clear point of view and you can articulate the emotional intent behind them.", action: "Create a mood board before every project — not for inspiration, but to define the emotional target." },
      { level: 3, title: "Brand Architect", description: "You design cohesive visual identities that work across touchpoints and communicate without words.", action: "Take one product you've designed and rebuild it in two completely different visual languages. Compare what gets lost." },
      { level: 4, title: "Creative Director", description: "You set the visual direction for entire products and teams. Your taste becomes the team's taste.", action: "Write a visual brand manifesto for a product you believe in. 500 words. No mockups. Just words." },
    ],
    weeklyChallengeVariants: [
      {
        title: "The Usability Audit",
        description: "Pick your most visually impressive design. Run a 30-minute unmoderated usability test on Maze or Lyssna with 5 strangers. Watch what confuses them. Fix the top two problems without changing the visual language.",
        why: "Your instincts for beauty are strong. This challenge builds the instinct for beauty that also works — which is the rarer skill.",
      },
      {
        title: "The One-Colour Design",
        description: "Design a complete screen using only one colour plus black and white. No gradients, no accent colours. Use only type hierarchy, spacing, and structure to communicate intent. Share it with your team and explain the constraints you worked within.",
        why: "Visual Poets reach for colour when the design isn't communicating yet. This challenge reveals whether your layouts actually work before the paint goes on — and builds layout instincts you'll carry into every future project.",
      },
    ],
    antiPatternVariants: [
      {
        name: "The Beautiful First Draft",
        description: "Your speed and taste combine dangerously: the first wireframe is also pixel-perfect, because it costs you nothing to make it look good while moving fast. The problem is that polished early work gets treated as decided work. The team stops questioning layout and flow because the visual fidelity signals 'this is done' — before anyone has validated whether it's right.",
        catchIt: "Deliberately make your early-stage work look unfinished. Use grayscale and placeholder text in wireframes even when it costs you effort. The signal that a design is rough keeps the conversation open and protects you from building beautiful solutions to wrong problems.",
      },
      {
        name: "The Unreadable Spec",
        description: "Your Figma files are stunning objects but your annotations read like art direction briefs. 'Make this feel alive.' 'The spacing should breathe.' Your handoff is a creative manifesto that developers can't translate into code. Beautiful intention, unusable documentation.",
        catchIt: "Before sharing any design, ask one developer to read your annotations and describe — in plain language — what they would build. If their description doesn't match your vision, your annotations failed. Rewrite them in functional terms: what the component does and when.",
      },
      {
        name: "The Ego Pixel",
        description: "You spend three hours perfecting a micro-animation that 97% of users will never consciously notice, while the empty state, the error screen, and the onboarding flow are still undesigned. You are designing for your portfolio, not your user.",
        catchIt: "Before any visual refinement, ask: 'What is the least beautiful screen in this product right now?' Design that first.",
      },
    ],
    growthUnlockVariants: [
      "Right now you combine visual excellence with a bias for action — you ship polished work quickly, which is genuinely rare. When you add stronger validation habits before the polish phase, your work stops creating false certainty and starts generating real creative exploration. That unlocks the most valuable combination in product design: speed, beauty, AND proof.",
      "Right now you combine visual excellence with clear communication instincts — your designs look right AND your team can build from them. When you develop deeper user research skills to match your aesthetic instincts, you'll stop relying purely on taste to make usability calls. That combination earns you credibility beyond 'they make things look good.'",
      "Right now you are the designer who makes products beautiful. When you fix the usability gap, you become the designer who makes products beautiful and successful — and that person gets to set creative direction for entire companies.",
    ],
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

  UW: {
    masteryLevels: [
      { level: 1, title: "Assumption Mapper", description: "You identify what you don't know before designing, and you write down your assumptions.", action: "Before your next project, list every assumption you are making about the user. Prioritise which three you most need to validate." },
      { level: 2, title: "Insight Hunter", description: "You run regular user interviews and usability tests, and you know how to synthesise findings into actionable insights.", action: "Build a personal research repository. Every insight you find should live somewhere you can retrieve it in 60 seconds." },
      { level: 3, title: "Research Strategist", description: "You decide what research method fits which question, and you influence the product roadmap through research findings.", action: "Present a research finding to your leadership team using only business language — no UX jargon, just outcomes and risks." },
      { level: 4, title: "Experience Architect", description: "You design the entire research practice for your organisation, not just individual studies.", action: "Write a research operations handbook: how your team recruits participants, stores insights, and measures research impact." },
    ],
    weeklyChallengeVariants: [
      {
        title: "The Intuition Sprint",
        description: "Design one small feature this week using only your intuition — no research, no interviews, no validation. Ship it. Then watch what actually happens. Document the difference between what you predicted and what occurred.",
        why: "User Whisperers often mistrust their own judgment. This challenge builds calibration — learning when your instincts are right and when they need data.",
      },
      {
        title: "The Bias Audit",
        description: "Pick three design decisions you made with confidence this quarter. For each one, find one piece of contradicting evidence — from your own past research, public studies, or competitor patterns. Write one paragraph per decision on what you'd change if you'd found that evidence first.",
        why: "User Whisperers trust their research deeply — which is a strength that becomes a blind spot when it prevents questioning past conclusions. This challenge builds the habit of actively seeking disconfirmation.",
      },
    ],
    antiPatternVariants: [
      {
        name: "The Fidelity Trap",
        description: "Your prototypes are works of art. You spent three days building a Figma prototype with real data, micro-animations, and branching logic — to answer a question you could have tested with cardboard rectangles in an afternoon. The prototype became the deliverable, but the insight was supposed to be the point.",
        catchIt: "Before building any prototype for testing, write the test question at the top of the file: 'This prototype answers: ___.' Then ask: what is the lowest-fidelity version that still answers that question? Build that. Nothing more.",
      },
      {
        name: "The Insight Archive",
        description: "Your Dovetail repository has 300 tagged observations and your Miro boards have 50 user needs mapped. But in your last four sprint planning sessions, no product decision changed because of a research finding. You're producing world-class documentation that nobody uses to make decisions.",
        catchIt: "Every research project ends with one specific product decision that changed as a result. Name that decision before you start the research. If you can't name it, the research isn't tied to a real question — and real questions are the only reason to do research.",
      },
      {
        name: "The Research Rabbit Hole",
        description: "You schedule a second round of interviews before acting on the first. You want three more data points before recommending a direction. You are using research as a shield against the discomfort of making a call. Meanwhile, the team ships without you.",
        catchIt: "Set a research budget before every project: 'I will spend X hours on research and then I will make a recommendation regardless of what I still don't know.' Hold the line.",
      },
    ],
    growthUnlockVariants: [
      "Right now you combine deep user empathy with craft precision — your research insights translate into well-executed designs directly. When you build the habit of shipping faster and learning from production rather than purely from tests, you'll develop the velocity that makes research genuinely compound. Faster shipping cycles mean more real-world data, which sharpens your research instincts over time.",
      "Right now you combine deep user empathy with collaborative process skills — you bring your team along in research and your insights land because you communicate them clearly. When you develop the courage to make strong recommendations even with incomplete information, you'll stop being the person who identifies problems and start being the person who solves them. That's where design leadership starts.",
      "Right now you are the designer who catches mistakes before they ship. When you fix the decisiveness gap, you become the designer who shapes roadmaps — and that is where product design leadership starts.",
    ],
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

  CA: {
    masteryLevels: [
      { level: 1, title: "Fast Sketcher", description: "You generate ideas quickly and prototype before others have finished their brief.", action: "Run a personal 20-minute design sprint: one problem, six rough solutions, one direction chosen. Time it." },
      { level: 2, title: "Validated Shipper", description: "You move fast AND you check whether what you shipped actually worked before moving to the next thing.", action: "For your last three shipped features, find the usage data. What worked? What didn't? Write it down." },
      { level: 3, title: "Creative Catalyst", description: "You unblock entire teams. Your speed and energy sets the pace and possibility space for everyone around you.", action: "Run a design sprint for your team. Facilitate, not just participate. Watch how others ideate differently from you." },
      { level: 4, title: "Chaos Architect", description: "You channel your bias for action into a system — you move fast within a framework you designed to handle your speed.", action: "Build your own personal design process document: how you start, how you validate, how you hand off. Make it repeatable." },
    ],
    weeklyChallengeVariants: [
      {
        title: "The Documentation Sprint",
        description: "Pick one feature you shipped in the last 30 days. Spend two hours documenting it: the decision rationale, component notes, and edge cases. Show it to a developer who didn't work on it and ask what questions they still have. Fix those gaps.",
        why: "Your superpower is speed. Documentation is the habit that makes your speed compound instead of creating debt.",
      },
      {
        title: "The Slow Design",
        description: "Pick one interaction in your current product — something small. Spend an entire week on it and nothing else. Sketch it 20 ways. Prototype at three fidelities. Test it with two users. Revise twice. Don't ship until you've done all of that.",
        why: "Chaos Agents' best work happens in sprints. This challenge builds the patience and depth that make fast work more durable when you return to your natural speed.",
      },
    ],
    antiPatternVariants: [
      {
        name: "The Beautiful First Draft",
        description: "Your natural speed combines dangerously with your taste: the first wireframe is also pixel-perfect. The problem is that polished early work gets treated as decided work. The team stops questioning layout and flow because the visual fidelity signals 'this is done' — before anyone has confirmed whether it solves the actual problem.",
        catchIt: "Deliberately make your early-stage work look rough. Grayscale, placeholder text, imprecise spacing — even when it costs you effort to fight your instincts. The signal that a design is unfinished keeps the conversation open and protects you from building beautiful solutions to wrong problems.",
      },
      {
        name: "The Premature Pivot",
        description: "You ship v1, watch the metrics, and see something you don't like — so you propose a complete rethink before anyone has had time to actually use what you built. You're reading noise as signal. The product doesn't need a redesign; it needs time, and you need to sit with the discomfort of waiting.",
        catchIt: "After every ship, set a mandatory observation window: at least two weeks before any major design response. During that time, only collect data — no proposals. When the window closes, let what you observed (not your impatience) drive the next direction.",
      },
      {
        name: "The Perpetual Pivot",
        description: "You get bored three weeks into a project and start proposing a complete redesign. Or you ship v1, declare success, and move on before checking if it actually solved the problem. Your graveyard of half-finished ideas is growing.",
        catchIt: "Commit to a 'completion tax': for every new idea you propose, you must first document one thing you already shipped. No new work until the last thing is properly closed.",
      },
    ],
    growthUnlockVariants: [
      "Right now you move fast AND produce work with real visual quality — that's an extremely rare combination. When you add a discipline of rough-first thinking before the polish layer, your speed stops creating false certainty in the room and starts generating genuine creative exploration. That unlocks the most powerful version of you: fast, honest, and beautiful.",
      "Right now you move fast AND you care whether what you built actually works — that's the combination that avoids the classic Chaos Agent failure mode. When you develop patience for the observation window (letting shipped work breathe before you react), your bias for action becomes strategic rather than reactive. That's the profile that leads creative teams.",
      "Right now you are the designer everyone wants for the hard first problem. When you fix the follow-through gap, you become the designer who builds things that last and scale — and that is creative director territory.",
    ],
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

  SP: {
    masteryLevels: [
      { level: 1, title: "Brief Reader", description: "You read the product spec before opening Figma and you ask 'why are we building this?' before 'what should it look like?'", action: "Write a one-page design brief for your current project before doing any design work. Share it with your PM." },
      { level: 2, title: "Metrics-Connected Designer", description: "You know which KPI your design is meant to move and you check the data after shipping.", action: "Pull the usage data for something you shipped six months ago. Write one paragraph on what the data tells you about your original design decisions." },
      { level: 3, title: "Design Strategist", description: "You influence the product roadmap through design thinking. PMs bring you into discovery, not just delivery.", action: "Run a two-hour opportunity mapping session with your PM. Use design tools to map the problem space, not the solution." },
      { level: 4, title: "Design Executive", description: "You set design strategy at the company level — what to build, why, and for whom — not just how.", action: "Write a 12-month design vision for your product. What does excellent look like? Present it to a VP." },
    ],
    weeklyChallengeVariants: [
      {
        title: "The Craft Recovery",
        description: "Block two hours this week for design that has zero business justification — a passion project, a redesign of something you love, pure visual exploration. Share nothing. Measure nothing. Just make something beautiful.",
        why: "Strategic Partners often lose touch with the craft that made them effective in the first place. This challenge reconnects you with why you became a designer.",
      },
      {
        title: "The No-Deck Decision",
        description: "Identify one strategic design decision you need to make this week. Make it and express it in Figma only — no slides, no doc, no framework. Just design the solution and write one paragraph explaining the thinking when you share it. Then watch whether the design is more persuasive than a deck usually is.",
        why: "Strategic Partners often build confidence through presentation before designing. This challenge builds direct decision-making — the habit of trusting design itself as the argument.",
      },
    ],
    antiPatternVariants: [
      {
        name: "The Beautiful Strategy",
        description: "Your decks are polished, your narratives compelling, your frameworks beautifully visualised. Leadership praises the presentation. Then nothing changes. Your strategy is a masterpiece of communication that produced zero product decisions. You optimised for the meeting, not the outcome.",
        catchIt: "Before any strategy presentation, write a 'What Changes' document in plain text: list the specific product decisions that will be different because of this strategy. If you can't name five concrete changes before you open your slide tool, you don't have a strategy — you have a narrative.",
      },
      {
        name: "The Infinite Framework",
        description: "You've built a comprehensive opportunity matrix, a user segmentation model, a prioritisation framework, and a strategic narrative. It took four weeks and involved twelve stakeholders. The product team made six decisions without you during that time because the framework wasn't ready. You confused thoroughness with leverage.",
        catchIt: "Give yourself a 48-hour cap on any strategic analysis. After 48 hours, make a provisional recommendation — even if you're not fully confident. State your assumptions explicitly, ship the recommendation, and commit to updating it when you learn more. Imperfect strategy that moves creates more value than perfect strategy that arrives late.",
      },
      {
        name: "The Metric Trap",
        description: "You start making design decisions that optimise the dashboard number but quietly degrade the experience. The conversion rate goes up. The product gets slightly worse. You told yourself you were being strategic, but you were rationalising compromises.",
        catchIt: "Ask after every business-driven design decision: 'Would I be proud to show this specific change to the user it affects?' If the answer is no, the business case is not strong enough.",
      },
    ],
    growthUnlockVariants: [
      "Right now you combine strategic clarity with real craft ability — you don't just argue for design's value, you can demonstrate it with work that looks and feels right. When you develop the habit of protecting dedicated craft time in your schedule, you'll reconnect with the instincts that make your strategy credible. Executives who can both think strategically and design with conviction are extraordinarily rare.",
      "Right now you combine strategic thinking with deep process integrity — you understand how decisions get made and how to make design part of that process. When you develop comfort making directional calls before you have perfect information, you'll move faster through the strategy cycle without losing rigour. That velocity is what gives design real leverage over product roadmaps.",
      "Right now you are the designer who gets invited into strategy conversations. When you reconnect with craft, you become the designer who makes strategy beautiful — and that is the profile that builds design-led companies.",
    ],
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

  BB: {
    masteryLevels: [
      { level: 1, title: "Clear Communicator", description: "Your design specs are readable by developers without a walkthrough. Your annotations are complete.", action: "Pick a design you handed off last month. Sit with the developer and ask them to narrate what they understood from the file alone. Note every gap." },
      { level: 2, title: "Process Designer", description: "You have improved at least one recurring workflow on your team — a better review process, a cleaner handoff format, a sharper design critique structure.", action: "Map the current design-to-development workflow at your company. Mark every step where information gets lost. Fix one of them this week." },
      { level: 3, title: "Culture Builder", description: "You create the conditions for better design to happen — through how you run crits, how you onboard new designers, how you frame design to non-designers.", action: "Write and share a 'How to work with me' document. Make it honest about your process and your needs." },
      { level: 4, title: "Design Ops Leader", description: "You build the infrastructure for design at scale — tools, rituals, documentation, and the standards that make every designer on the team better.", action: "Design the onboarding experience for a new designer joining your team. What do they need to know in week 1? Week 4? Week 12?" },
    ],
    weeklyChallengeVariants: [
      {
        title: "The Strong Opinion",
        description: "In your next design review or team meeting, state a clear design opinion you actually hold — one you would normally soften or phrase as a question. State it as a conviction. Watch what happens. Note whether the outcome was better or worse than your usual approach.",
        why: "Bridge Builders are so good at holding space for others' opinions that they forget to advocate for their own. This challenge builds that muscle.",
      },
      {
        title: "The Unfiltered Critique",
        description: "Ask a colleague to show you a design they're working on. Give them your honest critique — not a facilitated discussion, not a synthesis, just your actual unfiltered design opinion for 10 minutes. Then ask them: 'Was that useful?' Use their answer to calibrate how your design judgment lands when you let it out.",
        why: "Bridge Builders develop excellent instincts from watching so many designs — but rarely exercise those instincts directly. This challenge builds the habit of trusting and expressing your own design judgment.",
      },
    ],
    antiPatternVariants: [
      {
        name: "The Friction Machine",
        description: "Your process is thorough but it's slowing down the creative energy on your team. The review checklist has 18 items. The handoff template requires six sections before a developer can see the design. The rituals you built to create clarity have become bureaucracy that fast-moving designers route around — and now you're maintaining a process nobody follows.",
        catchIt: "Ask one designer and one developer to rate your process on one dimension: 'Does this help you do better work, or does it slow you down?' Anything below 7 from either means the process creates more friction than value. Simplify immediately — the best process is the one people actually use.",
      },
      {
        name: "The Evidence Facilitator",
        description: "You run excellent research-informed design critiques. Everyone's opinion gets heard, the data gets presented, and the synthesis is thorough. But nobody knows what you actually think the design should do. You've become so skilled at moderating evidence that your own design judgment has gone quiet. The team is waiting for your recommendation, not another synthesis.",
        catchIt: "Before every design critique you facilitate, write your own design recommendation in three sentences. At the end of the session, state it clearly: 'Based on everything we've discussed, here's what I think we should do.' The room needs your judgment, not just your facilitation.",
      },
      {
        name: "The Invisible Designer",
        description: "You run such smooth processes and facilitate so well that people forget you are also a designer with a point of view. In meetings, you ask great questions. In reviews, you synthesise everyone's feedback. But nobody knows what you actually think the design should be — including you.",
        catchIt: "Before every design review, write down your own honest assessment of the work in three sentences. Say it out loud at some point in the meeting, even briefly.",
      },
    ],
    growthUnlockVariants: [
      "Right now you combine collaborative skill with visual range — you can bring creative teams together AND contribute real craft to the work. When you develop a clearer creative voice that you're willing to advocate for, you'll stop being the person who makes everyone else's vision possible and start being the person whose vision others are excited to build. That's the Head of Design profile.",
      "Right now you combine process excellence with research instincts — your team builds better things because you create the conditions for evidence-based decisions. When you develop the habit of translating your synthesis into strong personal recommendations, you'll shift from the person who surfaces the answer to the person who gives it. That's where design leadership begins.",
      "Right now you are the designer every team wants because you make everything work better. When you add a clear creative voice to your facilitation skills, you become the design leader who sets both the process and the direction — that is a Head of Design profile.",
    ],
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
