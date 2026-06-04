import { ARCHETYPES } from "../data/archetypes";
import { getPersonalizedDesigners, getSecondaryArchetype } from "../data/personalization";

export default function DesignersToFollow({ archetypeKey, scores }) {
  const designers = getPersonalizedDesigners(archetypeKey, scores);
  const archetype = ARCHETYPES[archetypeKey];
  const secondaryKey = getSecondaryArchetype(scores, archetypeKey);

  // First 2 are from primary, 3rd is from secondary
  const primaryCount = 2;

  return (
    <div>
      <p style={sectionLabel}>Designers to Study</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {designers.map((d, i) => {
          const isSecondary = i >= primaryCount;
          const color = isSecondary ? ARCHETYPES[secondaryKey].primary : archetype.primary;
          return (
            <div
              key={d.name}
              style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${isSecondary ? ARCHETYPES[secondaryKey].primary + "22" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 12,
              }}
            >
              <div style={{
                flexShrink: 0, width: 40, height: 40, borderRadius: "50%",
                background: `${color}1A`,
                border: `1px solid ${color}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>
                👤
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                  color: "#F0EDE8", marginBottom: 4, lineHeight: 1.3,
                }}>
                  {d.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
                  color: "#888580", lineHeight: 1.6,
                }}>
                  {d.why}
                </p>
              </div>
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
