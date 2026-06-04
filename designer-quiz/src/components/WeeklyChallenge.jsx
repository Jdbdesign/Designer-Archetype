import { ARCHETYPES } from "../data/archetypes";
import { getPersonalizedChallenge } from "../data/personalization";

export default function WeeklyChallenge({ archetypeKey, scores }) {
  const weeklyChallenge = getPersonalizedChallenge(archetypeKey, scores);
  const archetype = ARCHETYPES[archetypeKey];

  return (
    <div>
      <p style={sectionLabel}>This Week's Challenge</p>
      <div style={{
        background: archetype.darkBg,
        border: `1px solid ${archetype.primary}33`,
        borderRadius: 14,
        padding: 20,
      }}>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
          color: archetype.light, marginBottom: 10, lineHeight: 1.2,
        }}>
          {weeklyChallenge.title}
        </p>
        <p style={{
          fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 14,
          color: "#888580", lineHeight: 1.7, marginBottom: 14,
        }}>
          {weeklyChallenge.description}
        </p>
        <p style={{
          fontFamily: "var(--font-ui)", fontWeight: 400, fontStyle: "italic",
          fontSize: 13, color: archetype.primary, lineHeight: 1.6,
        }}>
          <span style={{ fontStyle: "normal", fontWeight: 600, color: "#888580", marginRight: 4 }}>
            Why this challenge:
          </span>
          {weeklyChallenge.why}
        </p>
      </div>
    </div>
  );
}

const sectionLabel = {
  fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 10,
  textTransform: "uppercase", letterSpacing: "0.12em", color: "#888580",
  marginBottom: 16,
};
