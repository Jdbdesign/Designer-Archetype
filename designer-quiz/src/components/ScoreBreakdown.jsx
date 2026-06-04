import { useEffect, useRef, useState } from "react";
import { ARCHETYPES, ARCHETYPE_ORDER } from "../data/archetypes";

export default function ScoreBreakdown({ scores, winnerKey }) {
  const containerRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const total = Object.values(scores).reduce((s, v) => s + v, 0) || 1;
  const sorted = [...ARCHETYPE_ORDER].sort((a, b) => (scores[b] || 0) - (scores[a] || 0));

  return (
    <div ref={containerRef} style={{ marginTop: 40 }}>
      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontWeight: 600,
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#888580",
          marginBottom: 20,
        }}
      >
        How You Scored
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {sorted.map((key, i) => {
          const arch = ARCHETYPES[key];
          const pct = Math.round(((scores[key] || 0) / total) * 100);
          const isWinner = key === winnerKey;

          return (
            <div key={key}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontWeight: 500,
                    fontSize: 12,
                    color: isWinner ? arch.primary : "#888580",
                  }}
                >
                  {arch.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#F0EDE8",
                  }}
                >
                  {pct}%
                </span>
              </div>
              <div
                style={{
                  height: 5,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 9999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: arch.primary,
                    borderRadius: 9999,
                    width: animated ? `${pct}%` : "0%",
                    transition: `width 800ms cubic-bezier(0.4,0,0.2,1) ${i * 100}ms`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
