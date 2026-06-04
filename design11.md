# Designer Archetype Quiz — Design Specification
> Read this entire file before writing any code. This is the single source of truth for the UI, interactions, animations, data, and logic.

---

## 1. Project Overview

A personality-style web quiz that identifies a designer's archetype from 6 possible results. Users answer 10 scenario-based questions and receive a beautifully designed result card they can screenshot and share on LinkedIn, Twitter, and Instagram.

**Stack:** React + Tailwind CSS (or plain CSS-in-JS). Single-page app. No backend needed. All state in memory.

**Goal of the UI:** Feel like a premium, opinionated design tool — not a Google Form. Every screen should feel share-worthy on its own.

---

## 2. Aesthetic Direction

**Theme:** Dark editorial with vivid archetype color accents.

- **Background:** Deep near-black `#0D0D0D` — not pure black, slightly warm
- **Surface cards:** `#161616` with subtle borders
- **Primary text:** `#F0EDE8` — warm off-white, never harsh white
- **Secondary text:** `#888580`
- **Border color:** `rgba(255,255,255,0.08)`

**Typography:**
- **Display / headings:** `Fraunces` (Google Font) — variable weight serif with optical sizing. Use weight 900 for big headings, weight 400 italic for elegant subheadings
- **Body / UI:** `Plus Jakarta Sans` (Google Font) — weight 400 for body, 500 for labels, 600 for buttons
- Import both from Google Fonts

**Visual personality:**
- Dark background with bright archetype color splashes
- Bold serif display type mixed with clean sans UI text
- Generous whitespace with intentional density in cards
- Animated — things move, breathe, and respond. Nothing is static.
- Not corporate. Think: design conference branding meets editorial magazine

---

## 3. Color System — The 6 Archetypes

Each archetype has a full color identity used throughout their result card.

| Key | Name | Primary | Glow | Light Text | Dark BG |
|-----|------|---------|------|-----------|---------|
| SA | Systems Architect | `#3B82F6` (blue) | `rgba(59,130,246,0.15)` | `#93C5FD` | `#0C1829` |
| VP | Visual Poet | `#F97316` (orange) | `rgba(249,115,22,0.15)` | `#FED7AA` | `#1C0F05` |
| UW | User Whisperer | `#10B981` (emerald) | `rgba(16,185,129,0.15)` | `#6EE7B7` | `#041C12` |
| CA | Chaos Agent | `#8B5CF6` (violet) | `rgba(139,92,246,0.15)` | `#C4B5FD` | `#100820` |
| SP | Strategic Partner | `#F59E0B` (amber) | `rgba(245,158,11,0.15)` | `#FDE68A` | `#1C1404` |
| BB | Bridge Builder | `#EC4899` (pink) | `rgba(236,72,153,0.15)` | `#FBCFE8` | `#1C0712` |

---

## 4. The 6 Archetypes — Full Data

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
    description: "You feel design before you think it. Typography, color, motion aren't just tools — they're your vocabulary. Your work makes people stop mid-scroll and stare. You believe that beautiful and functional are not opposites.",
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

## 5. Quiz Questions — Full Data

Each option has `l` (letter label), `t` (text), and `a` (archetype key it scores).

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
  // answers = array of archetype keys e.g. ["CA", "UW", "SP", ...]
  const scores = {};
  answers.forEach(a => { scores[a] = (scores[a] || 0) + 1; });
  // Winner = highest score. On tie, first in sorted order wins.
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
```

---

## 7. Screen-by-Screen Design Specification

### Screen 1 — INTRO

**Layout:** Full viewport. Dark background `#0D0D0D`. Centered column, max-width 640px.

**Background decoration:**
- Six faint glowing orbs (blurred circles), one per archetype color, scattered in the background at low opacity (0.12). Use `filter: blur(80px)`. Position them so they create a subtle aurora effect. They should drift very slowly using a CSS animation (`@keyframes drift`) — subtle float up/down on a 12s loop. Do NOT make them intrusive.

**Header section:**
- Top: a row of 6 small filled circles (12px diameter), each in its archetype color, with 8px gap. Fade in with stagger (50ms delay per dot).
- Below dots: small uppercase label: `DESIGNER ARCHETYPE QUIZ` in `#888580`, font-size 11px, letter-spacing 0.12em, Plus Jakarta Sans 600
- Main headline: `What Type of` (Fraunces 900, white, 48px on desktop / 32px mobile) + line break + `Designer` (Fraunces 400 italic, white, same size) + ` Are You?` (Fraunces 900, white)
- Subheadline: `10 questions. No right or wrong answers. Discover the archetype that shapes how you design.` — Plus Jakarta Sans 400, `#888580`, 16px, max-width 460px
- The headline should animate in: word by word or line by line fade-up with staggered delay

**Archetype preview grid:**
- 2 rows × 3 columns, gap 10px
- Each cell: rounded-xl card, background the archetype's dark bg color, border `1px solid` archetype primary at 20% opacity
- Inside each card: archetype emoji (20px) + archetype key label (9px uppercase, archetype primary color) on one line, then archetype name (13px, 600 weight, archetype light text color)
- On hover: border brightens to 40% opacity, slight scale(1.02) transform, transition 200ms ease

**CTA:**
- Primary button: `Begin Quiz →`
  - Background: white `#F0EDE8`
  - Text: black `#0D0D0D`
  - Font: Plus Jakarta Sans 600, 15px
  - Padding: 14px 32px
  - Border-radius: 12px
  - On hover: slight glow shadow, scale(1.02)
  - On click: ripple effect + route to quiz
- Below button: `10 questions · ~3 minutes · Free`in muted color

**Entry animation:** Entire intro fades in from translateY(16px) over 500ms ease-out. Stagger each element by 80ms.

---

### Screen 2 — QUIZ (Question View)

**Layout:** Full viewport. Same dark background. Centered column, max-width 600px.

**Top bar:**
- Left: `Q{n}` label in archetype-neutral accent (use a cycling subtle color or just `#888580`)
- Right: `{n} / 10` fraction
- Below: animated progress bar
  - Track: `rgba(255,255,255,0.08)`, height 3px, border-radius 99px
  - Fill: gradient from archetype blue to archetype violet (or a rotating gradient that shifts per question). Transition: `width 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
  - The fill width = `(questionIndex / 10) * 100%`

**Question text:**
- Fraunces 700, 26px desktop / 20px mobile, white `#F0EDE8`, line-height 1.3
- Animate in: translateY(8px) → 0 + fade, 300ms ease, triggered on question change

**Answer options (6 cards):**
- Stacked vertically, gap 10px
- Each card: background `#161616`, border `1px solid rgba(255,255,255,0.08)`, border-radius 12px, padding 14px 16px
- Inside: flex row — letter badge on left, option text on right
  - Letter badge: 26px × 26px square, border-radius 8px, background `rgba(255,255,255,0.06)`, text Fraunces 700 12px `#888580`
  - Option text: Plus Jakarta Sans 400, 14px, `#F0EDE8`, line-height 1.65
- **Hover state:** border color → `rgba(255,255,255,0.2)`, background → `#1E1E1E`, letter badge background lightens, `translateX(4px)` transform, 150ms ease
- **Selected state:**
  - The selected card: border becomes `2px solid` [archetype primary color of chosen answer], background gets a very subtle glow — `background: linear-gradient(135deg, #161616, [archetype glow color])`, letter badge fills with archetype primary color (text turns white)
  - All other cards: opacity drops to 0.3, scale(0.98), pointer-events none
  - Transition: 200ms ease for all these changes
  - After 500ms delay, auto-advance to next question
- **Enter animation:** Cards stagger in from translateX(-8px) + opacity 0, each delayed by 40ms. This means option A animates first, F last.
- **Exit animation:** When advancing, cards all fade out + translateX(8px) simultaneously over 200ms, then next question fades in

**Progress indicator at bottom:**
- Small row of 10 dots: filled dot = answered, hollow dot = future. Current dot pulses with a subtle ring animation. Dots use the primary accent color.

---

### Screen 3 — CALCULATING (Transition Screen)

Show this for exactly 1.8 seconds between answering Q10 and showing the result.

**Layout:** Full viewport, centered vertically and horizontally.

**Content:**
- A large circular loader — not a spinner. Instead: 6 dots arranged in a circle, each in one archetype color, that light up in sequence (like a loading sequence). Speed: 150ms per dot.
- Below: `Analysing your design personality…` in Fraunces 400 italic, 18px, `#888580`
- The text should pulse opacity slightly (0.6 → 1 → 0.6) on a 1.5s loop

**Transition in/out:** Fade in over 300ms. Fade out over 400ms into result screen.

---

### Screen 4 — RESULT

**Layout:** Full viewport scroll. Dark background. Max-width 640px, centered, padding bottom 80px.

#### Section A — Hero result card

This is the most important element. It should feel like a premium identity card — screenshot-worthy.

**Card container:**
- Border-radius 20px
- Border: `1px solid` [archetype primary at 30% opacity]
- Background: `linear-gradient(160deg, [archetype dark bg] 0%, #0D0D0D 60%)`
- Box-shadow: `0 0 60px [archetype glow], 0 0 120px [archetype glow at 50%]`
- Padding: 32px

**Inside the card (top half):**
- Top row: archetype emoji (large, 32px) + archetype key label (`THE SYSTEMS ARCHITECT` or similar — all caps, archetype primary color, 11px, letter-spacing 0.14em)
- Archetype name: Fraunces 900, 40px desktop / 28px mobile, archetype light text color, line-height 1.0
- Tagline: Fraunces 400 italic, 18px, archetype primary color, margin-top 10px
- A thin horizontal divider: `1px solid rgba(255,255,255,0.08)`, margin 20px 0

**Inside the card (bottom half):**
- Three superpower pills in a flex-wrap row:
  - Pill: background `rgba(archetype primary, 0.15)`, border `1px solid rgba(archetype primary, 0.3)`, text archetype light color, font Plus Jakarta Sans 500 12px, padding 6px 14px, border-radius 99px
- Description text: Plus Jakarta Sans 400, 14px, `#888580`, line-height 1.8, margin-top 16px

**Two info blocks (side by side):**
- Each: background `rgba(255,255,255,0.04)`, border `1px solid rgba(255,255,255,0.06)`, border-radius 10px, padding 14px
- Label (9px uppercase, `#888580`, letter-spacing 0.1em) above value (13px, 500, `#F0EDE8`)
- Left block: `FAMOUS PARALLEL` + value
- Right block: `BLIND SPOT` + value

**Bottom of card:**
- Small brand line: `designerquiz.co` (or your domain) — Plus Jakarta Sans 400, 11px, `#888580`

**Card entrance animation:** Scale from 0.94 + opacity 0 → scale 1 + opacity 1, 500ms ease-out. Delay 200ms after calculating screen exits.

#### Section B — Score Breakdown

Title: `HOW YOU SCORED` — 10px uppercase, `#888580`, letter-spacing 0.12em

For each of the 6 archetypes (sorted highest to lowest):
- Row: archetype name (12px, `#888580`) on left, percentage (12px, 500, `#F0EDE8`) on right
- Progress bar below: track `rgba(255,255,255,0.06)`, height 5px, border-radius 99px
- Fill: archetype primary color, animated from 0% → actual % over 800ms with staggered delay (100ms per row)
- The winning archetype row has its name in the archetype primary color instead of muted gray

#### Section C — Share + Actions

**Share copy button:**
- Width: 100%
- Background: archetype primary color
- Text: `Copy Result to Share →`
- Font: Plus Jakarta Sans 600, 15px
- Padding: 16px
- Border-radius: 12px
- On click: copies this text to clipboard and button flips to `✓ Copied! Post it now.` with a green background for 2.5 seconds

**Copied clipboard text (auto-formatted for LinkedIn/Twitter):**
```
I just discovered my designer archetype 🎨

I'm a [ARCHETYPE NAME].

"[TAGLINE]"

My design superpowers: [SUPERPOWER 1] · [SUPERPOWER 2] · [SUPERPOWER 3]

What type of designer are you? Take the free quiz → [URL]

#ProductDesign #UXDesign #DesignerLife
```

**Retake button:**
- Ghost button: border `1px solid rgba(255,255,255,0.15)`, background transparent, text `#888580`
- Text: `← Retake Quiz`
- On hover: border brightens, text → `#F0EDE8`

---

## 8. Micro-interactions & Motion Design

These make the experience feel alive. All are essential, not optional.

### 8.1 Cursor — Desktop only
- Custom cursor: 12px filled circle in `#F0EDE8` that follows mouse with ~80ms lag (lerp effect using JS)
- On hover over clickable elements: cursor expands to 32px, changes to a ring (border only), and the color shifts to the archetype primary (or white if no archetype context)
- Implement using a `<div>` positioned fixed, updated via `mousemove` with `requestAnimationFrame`

### 8.2 Answer selection ripple
- When an option is clicked: a radial ripple expands from the click point within the card (archetype primary color, 20% opacity, scale from 0 to 3, fade out in 400ms)

### 8.3 Progress bar shimmer
- The progress bar fill has a moving shimmer: a `linear-gradient` highlight that slides across every 2 seconds

### 8.4 Intro dot animation
- The 6 archetype color dots in the intro stagger in from opacity 0 + scale(0.4) → opacity 1 + scale(1), spring-like (use a CSS cubic-bezier that bounces slightly)

### 8.5 Result card glow pulse
- The box-shadow on the result card slowly pulses: glow fades from 60px to 90px and back on a 3s loop using CSS `@keyframes`

### 8.6 Score bars
- Each score bar animates in with a staggered delay when the result section enters the viewport (use IntersectionObserver)

### 8.7 Question number counter
- When advancing between questions, the `Q{n}` number does a brief flip animation (number slides up out and new number slides up in, like a mechanical counter)

---

## 9. Layout & Responsive Breakpoints

| Breakpoint | Behavior |
|-----------|---------|
| Mobile (< 640px) | Single column. Headline font-size scales down to 28px. Option cards stack full width. Intro grid becomes 2×3. |
| Tablet (640–1024px) | Max-width 640px centered, padding 24px horizontal |
| Desktop (> 1024px) | Max-width 640px centered, with slightly more generous vertical spacing |

**Mobile-specific notes:**
- Custom cursor disabled on mobile (touch device check)
- Tap highlight color: none (`-webkit-tap-highlight-color: transparent`)
- Ensure options are min 48px tall for touch targets

---

## 10. App State Structure

```js
const initialState = {
  screen: "intro",         // "intro" | "quiz" | "calculating" | "result"
  currentQuestion: 0,      // 0–9 index
  answers: [],             // array of archetype keys ["CA", "UW", ...]
  selectedOption: null,    // letter of currently selected option ("A"–"F") or null
  result: null,            // archetype key of winner e.g. "SA"
  scores: {},              // { SA: 2, VP: 1, ... }
  isAnimating: false,      // true while transitioning between questions
};
```

---

## 11. File Structure (suggested)

```
/src
  App.jsx                  — root, state, routing between screens
  screens/
    IntroScreen.jsx
    QuizScreen.jsx
    CalculatingScreen.jsx
    ResultScreen.jsx
  components/
    ProgressBar.jsx
    OptionCard.jsx
    ArchetypeCard.jsx
    ScoreBreakdown.jsx
    CustomCursor.jsx
  data/
    archetypes.js          — ARCHETYPES object
    questions.js           — QUESTIONS array
  hooks/
    useQuizState.js        — state management
    useCursorEffect.js     — custom cursor logic
  styles/
    globals.css            — CSS resets, font imports, keyframe animations
    variables.css          — CSS custom properties for colors
```

---

## 12. CSS Animations to Define

Define these `@keyframes` in `globals.css`:

```css
/* Floating background orbs */
@keyframes drift {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-20px) translateX(8px); }
  66% { transform: translateY(12px) translateX(-6px); }
}

/* Fade up entry */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Glow pulse for result card */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 60px var(--archetype-glow), 0 0 120px var(--archetype-glow-50); }
  50% { box-shadow: 0 0 90px var(--archetype-glow), 0 0 160px var(--archetype-glow-50); }
}

/* Shimmer for progress bar */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Scale bounce entry */
@keyframes scaleBounce {
  0% { opacity: 0; transform: scale(0.4); }
  70% { transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}

/* Loading dots */
@keyframes dotPing {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Counter flip */
@keyframes flipUp {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-14px); }
}
@keyframes flipIn {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 13. Accessibility

- All interactive elements have `role`, `aria-label`, or `aria-describedby` as appropriate
- `prefers-reduced-motion`: wrap all animations in `@media (prefers-reduced-motion: no-preference)` — if motion is reduced, show instant transitions only
- Color contrast: all text meets WCAG AA (the dark background with light text palette is designed to pass)
- Keyboard navigation: options can be selected with number keys `1–6` or arrow keys. Enter to confirm.
- Focus rings: visible on all interactive elements, use `outline: 2px solid archetype primary` offset 2px
- Screen reader: add `<span class="sr-only">` labels where visual-only info is used

---

## 14. Key UX Rules

1. **Never show a loading spinner for the quiz** — questions appear instantly. Only the 1.8s calculating screen adds intentional pause.
2. **Auto-advance after selection** — do not require a "Next" button. The 500ms delay after selection is enough feedback before advancing.
3. **No back navigation** — intentional. Personality quizzes work better without second-guessing. There's a "Retake" at the end.
4. **The result is positive** — all 6 archetypes are presented as strengths. Never frame any type as lesser. Blind spots are mentioned but framed gently.
5. **Mobile first** — test on 375px width. The quiz will be shared to Instagram/TikTok where people tap through on phones.

---

## 15. Social Sharing Context

This app will be shared on:
- **LinkedIn** — post a screenshot of the result card + "I built this quiz. What type of designer are you?"
- **Twitter/X** — share link + "10 questions. 6 archetypes. Find yours 🧵"
- **Instagram & TikTok** — screen record of taking the quiz and reacting to result

The result card (Screen 4, Section A) should be designed so that a **screenshot of just that card** is a beautiful, self-contained shareable image. Ensure no clipping on mobile viewports.
