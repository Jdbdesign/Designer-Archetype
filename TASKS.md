# Designer Archetype Quiz — Build Tasks
> Work through these tasks in order. Complete and verify each one before moving to the next.
> Always reference `design.md` for visual specs, color values, data, and interaction details.

---

## TASK 0 — Project Setup

- [ ] Scaffold a new React + Vite project: `npm create vite@latest designer-quiz -- --template react`
- [ ] Install dependencies:
  - `npm install` (base deps)
  - No external animation libraries needed — all motion is CSS + vanilla JS
- [ ] Create the folder structure exactly as specified in `design.md` Section 11:
  ```
  /src
    App.jsx
    screens/
    components/
    data/
    hooks/
    styles/
  ```
- [ ] Create `styles/globals.css` — add:
  - Google Fonts import for `Fraunces` and `Plus Jakarta Sans`
  - CSS reset (`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`)
  - Body: `background: #0D0D0D; color: #F0EDE8; font-family: 'Plus Jakarta Sans', sans-serif;`
  - `-webkit-tap-highlight-color: transparent` on interactive elements
  - All `@keyframes` from `design.md` Section 12 (`drift`, `fadeUp`, `glowPulse`, `shimmer`, `scaleBounce`, `dotPing`, `flipUp`, `flipIn`)
  - `@media (prefers-reduced-motion: reduce)` block that sets `animation-duration: 0.01ms` and `transition-duration: 0.01ms` on everything
- [ ] Create `styles/variables.css` — define CSS custom properties for all 6 archetype color sets from `design.md` Section 3
- [ ] Import both CSS files in `main.jsx`
- [ ] Verify app runs on `localhost:5173` with a black screen and no console errors

---

## TASK 1 — Data Layer

- [ ] Create `src/data/archetypes.js` — export the `ARCHETYPES` object exactly as written in `design.md` Section 4
- [ ] Create `src/data/questions.js` — export the `QUESTIONS` array exactly as written in `design.md` Section 5
- [ ] Create `src/hooks/useQuizState.js` with the following:
  - Initial state object from `design.md` Section 10
  - `startQuiz()` action — sets screen to `"quiz"`, resets all answers
  - `selectOption(letter, archetypeKey)` action — sets `selectedOption`, pushes to `answers`. After 500ms delay, either advances to next question or triggers `showCalculating()`
  - `showCalculating()` action — sets screen to `"calculating"`. After 1800ms, calls `showResult()`
  - `showResult()` action — runs scoring logic from `design.md` Section 6, sets `result` and `scores`, sets screen to `"result"`
  - `restartQuiz()` action — resets everything to `initialState`
  - Export hook as default
- [ ] Write a quick console test in `App.jsx` to verify scoring logic works correctly with a mock answers array before building any UI

---

## TASK 2 — App Shell & Routing

- [ ] In `App.jsx`:
  - Import `useQuizState`
  - Import all four screen components (they can be empty placeholders for now)
  - Render the correct screen based on `state.screen`
  - Pass all needed state and action handlers as props to each screen
- [ ] Confirm screen switching works by temporarily adding buttons to each placeholder screen that call the transition actions

---

## TASK 3 — Custom Cursor (Desktop)

- [ ] Create `src/hooks/useCursorEffect.js`:
  - Track `mouseX`, `mouseY` with `mousemove` event listener
  - Use `requestAnimationFrame` to lerp the cursor div position toward the mouse (lerp factor ~0.12 for ~80ms lag feel)
  - Expose `cursorX`, `cursorY`, `isHovering` state
  - Detect touch device: `'ontouchstart' in window` — if true, return early and disable cursor entirely
- [ ] Create `src/components/CustomCursor.jsx`:
  - A `position: fixed` div, `pointer-events: none`, `z-index: 9999`
  - Default state: 12px filled circle, `#F0EDE8`
  - Hover state (when `isHovering` is true): 32px ring (border only, no fill), archetype primary color or white
  - Add a `data-cursor-hover` attribute to every button and option card. The cursor hook listens for `mouseenter`/`mouseleave` on elements with this attribute to toggle `isHovering`
  - Transition: `width`, `height`, `border-radius`, `background`, `border` all at 200ms ease
- [ ] Render `<CustomCursor />` at the top level of `App.jsx` (outside screen components, so it persists across screens)

---

## TASK 4 — Intro Screen

Build `src/screens/IntroScreen.jsx`.

- [ ] **Background orbs:** 6 absolutely positioned `div`s (one per archetype color), each `blur(80px)`, ~300px diameter, `opacity: 0.12`, `border-radius: 50%`. Apply `animation: drift [12–18s] ease-in-out infinite` with different durations and delays per orb so they move independently. Position them scattered behind the content.

- [ ] **Layout:** Centered column, `max-width: 640px`, `margin: 0 auto`, `padding: 80px 24px`, `position: relative`, `z-index: 1` (above the orbs)

- [ ] **Dot row:** 6 `div`s, 12px diameter, each archetype primary color, flex row, gap 8px. Animate each in with `scaleBounce` keyframe, stagger delays: 0ms, 50ms, 100ms, 150ms, 200ms, 250ms.

- [ ] **Label:** `DESIGNER ARCHETYPE QUIZ` — uppercase, 11px, letter-spacing 0.12em, `#888580`, Plus Jakarta Sans 600. Fade up after dots.

- [ ] **Headline:** Three lines using Fraunces:
  - Line 1: `What Type of` — weight 900, 48px (32px mobile)
  - Line 2: `Designer` — weight 400, italic, 48px (32px mobile)
  - Line 3: `Are You?` — weight 900, 48px (32px mobile)
  - All white `#F0EDE8`. Animate each line with `fadeUp`, staggered 100ms apart.

- [ ] **Subtext:** description sentence. Plus Jakarta Sans 400, 16px, `#888580`, max-width 460px. Fade up after headline.

- [ ] **Archetype grid:** 2 rows × 3 cols (or use `grid-template-columns: repeat(3, 1fr)`), gap 10px, margin top 40px.
  - Each cell: see `design.md` Section 7, Screen 1 for exact card spec
  - Hover: `border-color` brightens, `transform: scale(1.02)`, 200ms ease
  - Cards fade up in sequence after subtext

- [ ] **CTA:** `Begin Quiz →` button per spec + muted copy below. Button has `data-cursor-hover`. On click: calls `startQuiz()`.

- [ ] **Overall entry:** Wrap entire content in a container that applies `animation: fadeUp 500ms ease-out` on mount.

- [ ] Verify on mobile (375px): grid is 3 columns (or adjust to 2 columns if 3 is cramped), headline wraps cleanly, no horizontal overflow.

---

## TASK 5 — Quiz Screen

Build `src/screens/QuizScreen.jsx`.

- [ ] **Top bar:** Flex row, space-between. Left: `Q{n}` counter. Right: `{n} / 10`. Both Plus Jakarta Sans 500, 13px, `#888580`. The Q-number uses the counter flip animation (`flipUp` exits, `flipIn` enters) when `currentQuestion` changes.

- [ ] **Progress bar:** Full-width, height 3px, track `rgba(255,255,255,0.08)`. Fill: `linear-gradient(90deg, #3B82F6, #8B5CF6)` with `background-size: 200%`. Width transitions with `cubic-bezier(0.4, 0, 0.2, 1)`. Add the shimmer animation on the fill element.

- [ ] **Question text:** Fraunces 700, 26px (20px mobile), `#F0EDE8`. Re-animate with `fadeUp` each time the question changes (use a `key={currentQuestion}` prop trick on the question container to force React to remount and replay the animation).

- [ ] **Option cards:** Build `src/components/OptionCard.jsx`:
  - Props: `option`, `isSelected`, `isDisabled`, `onSelect`
  - Implements all states from `design.md` Section 7, Screen 2 (default, hover, selected, disabled)
  - Has `data-cursor-hover` attribute
  - Click handler: calls `onSelect(option.l, option.a)` — but only if not `isDisabled`
  - Ripple effect: on click, create an absolutely positioned `div` at click coordinates within the card, animate `scale(0) → scale(3)` + `opacity(0.2 → 0)` over 400ms, then remove it from DOM
  - Stagger animate in with `fadeUp` + `translateX(-8px)`, 40ms delay per card
  - Exit animation: when `isAnimating` is true, all cards fade out + `translateX(8px)` over 200ms

- [ ] **Render 6 `<OptionCard>` components** from `QUESTIONS[currentQuestion].opts`, passing correct props from quiz state.

- [ ] **Bottom dot row:** 10 dots. Dots before `currentQuestion` index are filled (archetype primary or white). Current dot has a pulsing ring. Future dots are hollow `rgba(255,255,255,0.2)`. Use a CSS `@keyframes pulse` ring on the active dot.

- [ ] Verify: selecting an option correctly highlights it, disables others, then auto-advances after 500ms.

---

## TASK 6 — Calculating Screen

Build `src/screens/CalculatingScreen.jsx`.

- [ ] **Layout:** Full viewport, flex center both axes.
- [ ] **Dot ring loader:**
  - 6 dots arranged in a circle (use `transform: rotate(Ndeg) translateX(40px) rotate(-Ndeg)` on each to position them in a ring without SVG)
  - Each dot: 10px diameter, its archetype color
  - `animation: dotPing 0.9s ease-in-out infinite`
  - Stagger `animation-delay`: 0ms, 150ms, 300ms, 450ms, 600ms, 750ms
- [ ] **Text:** `Analysing your design personality…` — Fraunces 400 italic, 18px, `#888580`. Slow opacity pulse: 0.5 → 1 → 0.5, 2s loop.
- [ ] **Screen itself:** Fades in over 300ms on mount. After 1800ms, `showResult()` is called (this is handled by the state hook from Task 1, but confirm the timing looks right visually).

---

## TASK 7 — Result Screen

Build `src/screens/ResultScreen.jsx`. This is the most complex screen. Build it in sub-tasks.

### 7a — Archetype Hero Card
Build `src/components/ArchetypeCard.jsx`.

- [ ] Accept `archetype` and `scores` props
- [ ] Apply archetype CSS custom properties as inline style vars on the card root: `--archetype-primary`, `--archetype-glow`, `--archetype-light`, `--archetype-dark-bg`
- [ ] Full card spec from `design.md` Section 7, Screen 4, Section A
- [ ] Box-shadow uses `glowPulse` animation: `animation: glowPulse 3s ease-in-out infinite`
- [ ] Card entrance: `animation: scaleBounce 500ms ease-out 200ms both`
- [ ] Superpower pills: flex-wrap row, styled per spec
- [ ] Two info blocks (Famous Parallel + Blind Spot): CSS grid 2 columns

### 7b — Score Breakdown
Build `src/components/ScoreBreakdown.jsx`.

- [ ] Accept `scores` object and `winnerKey` prop
- [ ] Sort archetypes by score descending
- [ ] For each archetype, render name row + percentage + bar
- [ ] Winner row: name in archetype primary color, others in `#888580`
- [ ] Bars animate from 0% width → actual % on mount, staggered 100ms per bar
- [ ] Use `IntersectionObserver` on the section container to trigger the animation only when it enters the viewport

### 7c — Share Button

- [ ] Build the copy-to-clipboard button per spec
- [ ] Format the clipboard text from `design.md` Section 7, Screen 4, Section C — substitute actual archetype name, tagline, superpowers
- [ ] Toggle button text + background to confirm state for 2500ms

### 7d — Retake Button

- [ ] Ghost button, calls `restartQuiz()` on click
- [ ] Hover: border brightens, text lightens

### 7e — Assemble Result Screen

- [ ] Render `<ArchetypeCard>`, `<ScoreBreakdown>`, share button, retake button in a single scrollable column
- [ ] Max-width 640px, centered, padding bottom 80px
- [ ] Background orbs from the intro screen — reuse the same component or extract it into `components/BackgroundOrbs.jsx` so it appears on both intro and result screens

---

## TASK 8 — Polish Pass

Do this only after all screens are functionally complete.

- [ ] **Timing audit:** Play through the full quiz 3 times. Check: dot stagger feels snappy, question transitions are not too slow, calculating screen is exactly 1.8s, result card entrance is satisfying.
- [ ] **Mobile audit:** Test at 375px and 390px width. Check: no horizontal scroll, option text doesn't overflow cards, headline wraps correctly, result card doesn't clip, touch targets are min 48px.
- [ ] **Reduced motion:** Add `prefers-reduced-motion: reduce` test. All animations should be instant or removed. The app should still be fully usable.
- [ ] **Dark/light system preference:** App is dark only. Add `<meta name="color-scheme" content="dark">` to `index.html` so browsers don't flash white on load.
- [ ] **Font loading:** Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` to `index.html` before the font `<link>` tag to speed up font load.
- [ ] **Tab title + favicon:** Set `<title>What Type of Designer Are You?</title>` in `index.html`. Use a simple emoji favicon `🎨` via `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>">`.
- [ ] **Open Graph tags** in `index.html` for link previews when sharing:
  ```html
  <meta property="og:title" content="What Type of Designer Are You?" />
  <meta property="og:description" content="10 questions. 6 archetypes. Discover your design personality." />
  <meta name="twitter:card" content="summary_large_image" />
  ```

---

## TASK 9 — Build & Deploy

- [ ] Run `npm run build` — verify no errors and bundle builds cleanly
- [ ] Test the production build locally: `npm run preview`
- [ ] Play through the full quiz in the preview build — confirm all animations and state transitions work identically to dev
- [ ] Deploy to **Vercel**:
  ```bash
  npm install -g vercel
  vercel
  ```
  - Follow prompts. Framework: Vite. Build command: `npm run build`. Output directory: `dist`.
- [ ] Visit the live URL. Test on a real mobile device (not just browser DevTools).
- [ ] Update the clipboard share text in `ResultScreen.jsx` — replace the placeholder URL with the actual deployed Vercel URL.
- [ ] Re-deploy: `vercel --prod`

---

## TASK 10 — Social Content Prep

Once the live URL is confirmed working:

- [ ] Take the quiz yourself and screenshot the result card on mobile
- [ ] Screen-record taking the full quiz on your phone (use iPhone/Android screen record). This is the TikTok/Reels content.
- [ ] Write your LinkedIn post draft:
  - Hook: `"I built a quiz to understand how designers think."`
  - Drop the link in the first comment (LinkedIn best practice)
  - End with: `"What's your archetype? Drop it below 👇"`
- [ ] Write your Twitter post draft:
  - `"10 questions. 6 designer archetypes. Which one are you?`
  - `Took me [X] hours to build this with Claude. Thread on what I learned 🧵"`
- [ ] Schedule or post immediately. Engage with every comment in the first 2 hours — this matters for reach.

---

## Completion Checklist

Before calling this done, verify:

- [ ] All 4 screens render correctly
- [ ] All 10 questions are present and options advance correctly
- [ ] All 6 archetypes can be reached as a result (test by intentionally picking one archetype for all 10 questions)
- [ ] Score breakdown shows accurate percentages
- [ ] Copy button copies correctly formatted text to clipboard
- [ ] Retake resets all state cleanly
- [ ] Custom cursor works on desktop, is hidden on mobile
- [ ] Background orbs are visible but not distracting
- [ ] All animations play on first load
- [ ] App works on Safari iOS (test this — CSS `animation` and `transform` can behave differently)
- [ ] No console errors or warnings in production build
- [ ] Live URL is working and shareable
