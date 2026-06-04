import { useState, useEffect } from "react";
import { RESULT_DATA } from "../data/resultData";
import { ARCHETYPES } from "../data/archetypes";

export default function WisdomCard({ archetypeKey, wisdomIndex, onCycle }) {
  const { wisdomCards } = RESULT_DATA[archetypeKey];
  const archetype = ARCHETYPES[archetypeKey];
  const [fading, setFading] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(wisdomIndex);

  useEffect(() => {
    if (wisdomIndex === displayIndex) return;
    setFading(true);
    const t = setTimeout(() => {
      setDisplayIndex(wisdomIndex);
      setFading(false);
    }, 250);
    return () => clearTimeout(t);
  }, [wisdomIndex]);

  return (
    <div>
      <p style={sectionLabel}>Today's Insight</p>
      <div style={{
        background: archetype.darkBg,
        border: `1px solid ${archetype.primary}22`,
        borderRadius: 16,
        padding: 24,
        position: "relative",
      }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic",
          fontSize: 64, lineHeight: 0.7, color: archetype.primary,
          display: "block", marginBottom: 8,
          userSelect: "none",
        }}>
          &ldquo;
        </span>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic",
          fontSize: 16, color: "#F0EDE8", lineHeight: 1.6,
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(-6px)" : "translateY(0)",
          transition: "opacity 250ms ease, transform 250ms ease",
        }}>
          {wisdomCards[displayIndex]}
        </p>
        <button
          data-cursor-hover
          onClick={onCycle}
          aria-label="Next wisdom quote"
          style={{
            position: "absolute", bottom: 16, right: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, color: "#888580",
            cursor: "none", transition: "background 200ms, color 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = archetype.glow;
            e.currentTarget.style.color = archetype.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.color = "#888580";
          }}
        >
          ↻
        </button>
      </div>
    </div>
  );
}

const sectionLabel = {
  fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 10,
  textTransform: "uppercase", letterSpacing: "0.12em", color: "#888580",
  marginBottom: 16,
};
