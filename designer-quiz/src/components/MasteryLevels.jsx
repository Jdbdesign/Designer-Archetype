import { RESULT_DATA } from "../data/resultData";
import { ARCHETYPES } from "../data/archetypes";

function getCurrentLevel(scores, key) {
  const score = scores[key] || 0;
  if (score >= 6) return 3;
  if (score >= 4) return 2;
  return 1;
}

export default function MasteryLevels({ archetypeKey, scores }) {
  const data = RESULT_DATA[archetypeKey];
  const archetype = ARCHETYPES[archetypeKey];
  const currentLevel = getCurrentLevel(scores, archetypeKey);

  return (
    <div>
      <p style={sectionLabel}>Your Growth Path</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.masteryLevels.map((ml) => {
          const isCurrent = ml.level === currentLevel;
          return (
            <div key={ml.level}>
              <div
                style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "14px 16px",
                  borderRadius: 12,
                  background: isCurrent ? archetype.glow : "rgba(255,255,255,0.02)",
                  border: isCurrent ? `1px solid ${archetype.primary}4D` : "1px solid rgba(255,255,255,0.06)",
                  transition: "background 300ms",
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: 24, height: 24, borderRadius: "50%",
                  background: isCurrent ? archetype.primary : "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 11,
                  color: isCurrent ? "#fff" : "#888580",
                }}>
                  {ml.level}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                    color: isCurrent ? "#F0EDE8" : "#888580",
                    marginBottom: 4,
                  }}>
                    {ml.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
                    color: "#888580", lineHeight: 1.6,
                  }}>
                    {ml.description}
                  </p>
                </div>
              </div>
              {isCurrent && (
                <div style={{
                  margin: "6px 0 0 38px",
                  padding: "12px 14px",
                  borderRadius: "0 0 10px 10px",
                  background: "rgba(255,255,255,0.03)",
                  borderLeft: `2px solid ${archetype.primary}`,
                }}>
                  <p style={{
                    fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 9,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#888580", marginBottom: 6,
                  }}>
                    Your Next Step
                  </p>
                  <p style={{
                    fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
                    color: archetype.primary, lineHeight: 1.6,
                  }}>
                    {ml.action}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const sectionLabel = {
  fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 10,
  textTransform: "uppercase", letterSpacing: "0.12em", color: "#888580",
  marginBottom: 16,
};
