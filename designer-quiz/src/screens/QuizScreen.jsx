import { useEffect, useRef, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { ARCHETYPES } from "../data/archetypes";
import OptionCard from "../components/OptionCard";

function QuestionCounter({ current }) {
  const [display, setDisplay] = useState(current);
  const [anim, setAnim] = useState(null);

  useEffect(() => {
    setAnim("out");
    const t1 = setTimeout(() => {
      setDisplay(current);
      setAnim("in");
    }, 160);
    const t2 = setTimeout(() => setAnim(null), 320);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [current]);

  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-ui)",
        fontWeight: 500,
        fontSize: 13,
        color: "#888580",
        animation: anim === "out"
          ? "flipUp 150ms ease forwards"
          : anim === "in"
          ? "flipIn 150ms ease forwards"
          : "none",
      }}
    >
      Q{display + 1}
    </span>
  );
}

export default function QuizScreen({ state, onSelectOption }) {
  const { currentQuestion, selectedOption, isAnimating, answers } = state;
  const q = QUESTIONS[currentQuestion];
  const pct = ((currentQuestion) / 10) * 100;

  // Color for answered dots
  const answeredColors = answers.map((key) => ARCHETYPES[key]?.primary || "#fff");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px 40px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 600 }}>

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <QuestionCounter current={currentQuestion} />
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontWeight: 500,
              fontSize: 13,
              color: "#888580",
            }}
          >
            {currentQuestion + 1} / 10
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: 3,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 9999,
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              borderRadius: 9999,
              background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
              backgroundSize: "200% 100%",
              animation: "progressShimmer 2s linear infinite",
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>

        {/* Question text — key forces re-mount & animation replay */}
        <h2
          key={currentQuestion}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(20px, 3.5vw, 26px)",
            color: "#F0EDE8",
            lineHeight: 1.3,
            marginBottom: 24,
            animation: "fadeUp 300ms ease both",
          }}
        >
          {q.q}
        </h2>

        {/* Options */}
        <div
          key={`opts-${currentQuestion}`}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateX(8px)" : "translateX(0)",
            transition: "opacity 200ms ease, transform 200ms ease",
          }}
        >
          {q.opts.map((opt, i) => (
            <OptionCard
              key={opt.l}
              option={opt}
              index={i}
              isSelected={selectedOption === opt.l}
              isDisabled={!!selectedOption}
              onSelect={onSelectOption}
            />
          ))}
        </div>

        {/* Bottom dot row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 36,
          }}
          aria-label={`Question ${currentQuestion + 1} of 10`}
          role="progressbar"
          aria-valuenow={currentQuestion + 1}
          aria-valuemin={1}
          aria-valuemax={10}
        >
          {Array.from({ length: 10 }, (_, i) => {
            const isAnswered = i < currentQuestion;
            const isCurrent = i === currentQuestion;
            const dotColor = isAnswered ? (answeredColors[i] || "#fff") : "rgba(255,255,255,0.2)";

            return (
              <div
                key={i}
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: isAnswered || isCurrent ? dotColor : "rgba(255,255,255,0.2)",
                  opacity: isAnswered ? 1 : isCurrent ? 1 : 0.4,
                  boxShadow: isCurrent ? `0 0 0 0 ${dotColor}` : "none",
                  animation: isCurrent ? "pulseRing 1.5s ease-in-out infinite" : "none",
                  transition: "background 200ms ease",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
