import { ARCHETYPES } from "../data/archetypes";
import { getPersonalizedGrowthUnlock } from "../data/personalization";

export default function GrowthUnlock({ archetypeKey, scores }) {
  const growthUnlock = getPersonalizedGrowthUnlock(archetypeKey, scores);
  const archetype = ARCHETYPES[archetypeKey];

  return (
    <div>
      <p style={sectionLabel}>Your Next Level</p>
      <div style={{
        background: `linear-gradient(135deg, ${archetype.primary}14 0%, transparent 70%)`,
        border: `1px solid ${archetype.primary}33`,
        borderRadius: 16,
        padding: "22px 24px",
      }}>
        <p style={{
          fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 14,
          color: "#F0EDE8", lineHeight: 1.75,
        }}>
          {growthUnlock}
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
