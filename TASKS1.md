# Designer Archetype Quiz — Build Tasks
> Work through these tasks in order. Complete and verify each task before moving to the next.
> Always reference `design.md` for visual specs, colour values, data, interactions, and content.
> The quiz questions and scoring logic are UNCHANGED. All new work lives in the result output.

---

## TASK 0 — Project Setup

- [ ] Scaffold: `npm create vite@latest designer-quiz -- --template react`
- [ ] Create the full folder structure from `design.md` Section 12 (including all new component files as empty placeholders)
- [ ] Create `styles/globals.css`:
  - Google Fonts import for `Fraunces` and `Plus Jakarta Sans`
  - CSS reset
  - Body: `background: #0D0D0D; color: #F0EDE8; font-family: 'Plus Jakarta Sans', sans-serif;`
  - All `@keyframes` from `design.md` Section 13
  - `prefers-reduced-motion` block
- [ ] Create `styles/variables.css` — CSS custom properties for all 6 archetype colour sets from `design.md` Section 3
- [ ] Import both CSS files in `main.jsx`
- [ ] Add to `index.html`:
  - `<meta name="color-scheme" content="dark">`
  - Preconnect tags for Google Fonts
  - `<title>What Type of Designer Are You?</title>`
  - Emoji favicon
  - Open Graph meta tags
- [ ] Verify app runs clean on `localhost:5173`

---

## TASK 1 — Data Layer

- [ ] Create `src/data/archetypes.js` — export the `ARCHETYPES` object from `design.md` Section 4
- [ ] Create `src/data/questions.js` — export the `QUESTIONS` array from `design.md` Section 5
- [ ] Create `src/data/resultData.js` — export the `RESULT_DATA` object from `design.md` Section 7. This includes for every archetype:
  - `masteryLevels` (array of 4)
  - `weeklyChallenge` (object)
  - `antiPattern` (object)
  - `growthUnlock` (string)
  - `books` (array of 3)
  - `tools` (array of 5)
  - `designersToFollow` (array of 3)
  - `wisdomCards` (array of 10)
- [ ] Create `src/data/teamChemistry.js` — export the `TEAM_CHEMISTRY` object from `design.md` Section 8
- [ ] Create `src/hooks/useQuizState.js`:
  - State shape from `design.md` Section 10 (includes `currentWisdomIndex`)
  - Actions: `startQuiz`, `selectOption`, `showCalculating`, `showResult`, `restartQuiz`, `cycleWisdom(archetypeKey)`
  - `selectOption` pushes answer, waits 500ms, advances question or triggers `showCalculating`
  - `showCalculating` waits 1800ms then calls `showResult`
  - `showResult` runs scoring logic from `design.md` Section 6, sets `result`, `scores`
  - `cycleWisdom` increments the wisdom card index for the given archetype, wrapping at array length
- [ ] Verify scoring logic with a console test using mock answers before building any UI

---

## TASK 2 — App Shell & Routing

- [ ] In `App.jsx`:
  - Import `useQuizState`
  - Render correct screen based on `state.screen`
  - Pass state + actions as props to each screen
- [ ] Confirm all four screen transitions work using temporary placeholder buttons

---

## TASK 3 — Custom Cursor

- [ ] Create `src/hooks/useCursorEffect.js` — lerp cursor tracking, touch detection, hover state
- [ ] Create `src/components/CustomCursor.jsx` — fixed div, 12px → 32px ring on hover, archetype primary colour on hover
- [ ] Render in `App.jsx` outside all screens
- [ ] Add `data-cursor-hover` attribute to every interactive element as they are built

---

## TASK 4 — Intro Screen

Build `src/screens/IntroScreen.jsx` per `design.md` Section 7, Screen 1.

- [ ] Background orbs component (`BackgroundOrbs.jsx`) — 6 blurred divs, drift animation, one per archetype colour
- [ ] 6 colour dots row with stagger `scaleBounce` animation
- [ ] Headline with mixed Fraunces weights — `What Type of` (900) + `Designer` (400 italic) + `Are You?` (900)
- [ ] Archetype preview 3×2 grid — each cell uses archetype dark bg and archetype primary border at 20% opacity
- [ ] `Begin Quiz →` button — white bg, black text, hover glow
- [ ] Full entry `fadeUp` animation on mount with element stagger
- [ ] Mobile: test at 375px, no overflow

---

## TASK 5 — Quiz Screen

Build `src/screens/QuizScreen.jsx` per `design.md` Section 7, Screen 2.

- [ ] `ProgressBar.jsx` — 3px track, gradient fill `#3B82F6 → #8B5CF6`, shimmer animation, smooth width transition
- [ ] Q-number with flip animation on change (`flipUp` exit, `flipIn` enter)
- [ ] Question text with `fadeUp` re-animation on question change (use `key={currentQuestion}`)
- [ ] `OptionCard.jsx` — all states: default, hover, selected, disabled; ripple on click; `translateX(4px)` hover; stagger entry
- [ ] Bottom dot progress row — 10 dots, filled/hollow/pulsing states
- [ ] Stagger card entry (40ms delay per card) and exit (all fade + `translateX(8px)`) on advance
- [ ] Keyboard: `1–6` to select option, arrow keys to navigate

---

## TASK 6 — Calculating Screen

Build `src/screens/CalculatingScreen.jsx` per `design.md` Section 7, Screen 3.

- [ ] 6 dots in a circle, each archetype colour, staggered `dotPing` animation
- [ ] Pulsing text below
- [ ] Fades in over 300ms, transitions out after 1800ms

---

## TASK 7 — Result Screen: Hero + Score

Build the first two visible sections of `src/screens/ResultScreen.jsx`.

### 7a — Archetype Identity Card
- [ ] `ArchetypeCard.jsx` — full spec from `design.md` Section 9, Section 1
- [ ] CSS custom properties injected as inline vars for archetype colours
- [ ] `glowPulse` animation on box-shadow
- [ ] `scaleBounce` entrance at 200ms delay
- [ ] All content from `ARCHETYPES[resultKey]`

### 7b — Score Breakdown
- [ ] `ScoreBreakdown.jsx` — 6 bars, sorted by score, winner name in archetype primary
- [ ] Bars animate in via `IntersectionObserver` with 100ms stagger
- [ ] Section label `HOW YOU SCORED`

---

## TASK 8 — Result Screen: Design Fingerprint

- [ ] Build `src/components/RadarChart.jsx`
- [ ] Pure SVG — no external chart library
- [ ] Calculate hexagonal axis points for 6 archetypes evenly spaced (60° apart)
- [ ] For each archetype, the axis length = `(score / 10) * maxRadius`
- [ ] Render: outer guide hexagon (faint), axis lines (faint), filled polygon (archetype primary at 30% opacity), polygon outline (archetype primary at 80%)
- [ ] Axis labels: archetype key abbreviation (SA, VP, etc.) in archetype primary colour, positioned at axis tips
- [ ] Animate: `transform-origin: center; animation: radarDraw 600ms ease-out` when IntersectionObserver fires
- [ ] Section label `YOUR DESIGN DNA`
- [ ] Test: single archetype dominant produces a clear spike. Equal spread produces near-hexagon.

---

## TASK 9 — Result Screen: Growth Path

- [ ] Build `src/components/MasteryLevels.jsx`
- [ ] Four level rows per spec in `design.md` Section 9, Section 3
- [ ] Level badge: 24px circle, archetype primary bg
- [ ] Current level determination logic: if dominant archetype score ≥ 6 → level 3; if ≥ 4 → level 2; else → level 1 (level 4 never auto-assigned — it is aspirational)
- [ ] Highlighted current level row with brighter styling
- [ ] "YOUR NEXT STEP" block below current level with action text in archetype primary colour
- [ ] All content sourced from `RESULT_DATA[key].masteryLevels`

---

## TASK 10 — Result Screen: Challenge + Anti-Pattern

### 10a — Weekly Challenge
- [ ] Build `src/components/WeeklyChallenge.jsx`
- [ ] Card: archetype dark bg, archetype primary border at 20% opacity, border-radius 14px
- [ ] Title in Fraunces 700, 18px, archetype light text
- [ ] Description in Plus Jakarta Sans, 14px, secondary colour
- [ ] "Why this challenge:" label + italic reason text in archetype primary
- [ ] Content from `RESULT_DATA[key].weeklyChallenge`

### 10b — Anti-Pattern Warning
- [ ] Build `src/components/AntiPattern.jsx`
- [ ] Left border `3px solid #F59E0B` (amber) for all archetypes — this is a universal warning signal
- [ ] Anti-pattern name in Fraunces 700, warm amber `#FDE68A`
- [ ] Description in secondary colour, 13px
- [ ] "How to catch it:" label + advice text
- [ ] Content from `RESULT_DATA[key].antiPattern`

---

## TASK 11 — Result Screen: Team Chemistry

- [ ] Build `src/components/TeamChemistry.jsx`
- [ ] 5 rows, one for each other archetype
- [ ] Each row: archetype colour dot + archetype name + chemistry label badge
- [ ] Badge colour rules from `design.md` Section 9, Section 6
- [ ] Rows are collapsed by default — click expands to show description
- [ ] `aria-expanded` on toggle. Expand/collapse with CSS max-height transition (not JS height toggle)
- [ ] Content from `TEAM_CHEMISTRY[resultKey][otherKey]`
- [ ] Section heading `HOW YOU WORK WITH OTHERS`

---

## TASK 12 — Result Screen: Reading List + Tools + Designers

### 12a — Reading List
- [ ] Build `src/components/ReadingList.jsx`
- [ ] 3 book cards per spec in `design.md` Section 9, Section 7
- [ ] Staggered `fadeUp` entry via IntersectionObserver
- [ ] Content from `RESULT_DATA[key].books`

### 12b — Tools List
- [ ] Build `src/components/ToolsList.jsx`
- [ ] 5 tool rows: coloured dot bullet + tool name + reason
- [ ] Clean list layout, no expansion
- [ ] Content from `RESULT_DATA[key].tools`

### 12c — Designers to Follow
- [ ] Build `src/components/DesignersToFollow.jsx`
- [ ] 3 cards matching books layout but with designer name + why
- [ ] Content from `RESULT_DATA[key].designersToFollow`

---

## TASK 13 — Result Screen: Wisdom Card + Growth Unlock + Share

### 13a — Wisdom Card
- [ ] Build `src/components/WisdomCard.jsx`
- [ ] Large open-quote `"` character, Fraunces, 64px, archetype primary
- [ ] Quote text: Fraunces 400 italic, 16px, line-height 1.6
- [ ] Refresh button `↻` bottom right — calls `cycleWisdom(key)` on click
- [ ] Fade transition on quote change: fade out old → fade in new via `wisdomFade` keyframe
- [ ] Starting index from `state.currentWisdomIndex[key]` (initialised to a random int)
- [ ] Content from `RESULT_DATA[key].wisdomCards`

### 13b — Growth Unlock
- [ ] Build `src/components/GrowthUnlock.jsx`
- [ ] Archetype primary gradient bg at 8% opacity, matching border
- [ ] Body text Plus Jakarta Sans 400, 14px, line-height 1.75
- [ ] Content from `RESULT_DATA[key].growthUnlock`
- [ ] Section heading `YOUR NEXT LEVEL`

### 13c — Share + Retake
- [ ] Copy button + retake button per original spec
- [ ] Clipboard text from `design.md` Section 9, Section 12
- [ ] Green confirmation state for 2500ms

---

## TASK 14 — Assemble Full Result Screen

- [ ] Import and render all result components in `ResultScreen.jsx` in the correct order:
  1. `ArchetypeCard`
  2. `RadarChart` (Design Fingerprint)
  3. `ScoreBreakdown`
  4. `MasteryLevels`
  5. `WeeklyChallenge`
  6. `AntiPattern`
  7. `TeamChemistry`
  8. `ReadingList`
  9. `ToolsList`
  10. `DesignersToFollow`
  11. `WisdomCard`
  12. `GrowthUnlock`
  13. Share + Retake buttons
- [ ] `BackgroundOrbs` rendered behind content (same component reused from IntroScreen)
- [ ] Sections separated by consistent 32px vertical spacing
- [ ] Section headings all use the same style: 10px uppercase, `#888580`, letter-spacing 0.12em, margin-bottom 16px
- [ ] Max-width 640px, padding bottom 80px, centered

---

## TASK 15 — Polish Pass

Do this after all screens are functionally complete.

- [ ] **Full playthrough audit:** Go through the complete quiz 3 times picking different archetypes each time. Verify all 6 result screens render correctly with correct data.
- [ ] **Timing audit:** Dot stagger, question transition, calculating screen, hero card entrance — all should feel deliberate and satisfying, not slow.
- [ ] **Mobile audit at 375px:** No horizontal scroll. All sections readable. Team chemistry rows expand correctly. Radar chart is legible at small size. Touch targets ≥ 48px.
- [ ] **Radar chart accuracy:** Test with 10/10 answers for a single archetype → full spike. Test with 2 answers per archetype → near-hexagon. Verify maths.
- [ ] **IntersectionObserver:** Confirm score bars, radar chart, reading list, and all animated sections only animate when scrolled into view — not all at page load.
- [ ] **Wisdom card randomisation:** On first result render, `currentWisdomIndex` should be randomised so different users see different quotes. On refresh click, it cycles through without repeating until all 10 are seen.
- [ ] **Reduced motion:** Test with `prefers-reduced-motion: reduce` in OS settings. All content accessible, no animation.
- [ ] **Safari iOS:** Test on real device or BrowserStack. Pay attention to CSS `transform-origin`, SVG animations, and sticky positioning.
- [ ] **`-webkit-tap-highlight-color: transparent`** on all interactive elements.

---

## TASK 16 — Build & Deploy

- [ ] `npm run build` — no errors
- [ ] `npm run preview` — test production build locally
- [ ] Full quiz playthrough in preview build
- [ ] Deploy to Vercel: `npx vercel` then `npx vercel --prod`
- [ ] Test live URL on real mobile device
- [ ] Update clipboard share text in `ResultScreen.jsx` with the actual deployed URL
- [ ] Redeploy: `npx vercel --prod`

---

## TASK 17 — Social Content Prep

- [ ] Take quiz on mobile → screenshot the Archetype Identity Card → this is your first post
- [ ] Take quiz again → screenshot the Radar Chart (Design Fingerprint) → this is your second post
- [ ] Screen-record the full quiz on your phone → TikTok/Reels content
- [ ] Screenshot the Anti-Pattern section for your archetype → LinkedIn thread starter
- [ ] Write LinkedIn post 1: `"I built a quiz for designers. Not just a personality test — a growth system. Here's what I learned building it 🧵"`
- [ ] Write LinkedIn post 2 (3 days later): `"[N] designers took the quiz in 3 days. Here's which archetype dominated — and what that tells us about how we hire 👇"`
- [ ] Write Twitter post: `"10 questions. 6 designer archetypes. But the result also tells you: your blind spot, the books to read, the tools that fit how you think, and how to work with people who think differently. Free → [URL]"`
- [ ] Engage every comment in the first 2 hours. This is non-negotiable for reach.

---

## Completion Checklist

- [ ] All 4 screens render correctly
- [ ] All 10 questions present, options advance, auto-advance works
- [ ] All 6 archetypes reachable as a result
- [ ] Radar chart accurate for all 6 archetype profiles
- [ ] All 12 result sections render with correct data per archetype
- [ ] Team chemistry shows correct 5 relationships per archetype
- [ ] Wisdom card randomises and cycles correctly
- [ ] Copy button copies correct formatted text
- [ ] Retake resets all state including wisdom index
- [ ] Custom cursor on desktop, hidden on mobile
- [ ] All IntersectionObserver animations trigger correctly
- [ ] No console errors in production build
- [ ] Live URL working and shareable
- [ ] Tested on Safari iOS
