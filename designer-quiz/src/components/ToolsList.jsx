import { RESULT_DATA } from "../data/resultData";
import { ARCHETYPES } from "../data/archetypes";

export default function ToolsList({ archetypeKey }) {
  const { tools } = RESULT_DATA[archetypeKey];
  const archetype = ARCHETYPES[archetypeKey];

  return (
    <div>
      <p style={sectionLabel}>Tools For Your Archetype</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {tools.map((tool) => (
          <div key={tool.name} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{
              flexShrink: 0, width: 6, height: 6, borderRadius: "50%",
              background: archetype.primary, marginTop: 6,
            }} />
            <div>
              <span style={{
                fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 14,
                color: "#F0EDE8",
              }}>
                {tool.name}
              </span>
              <p style={{
                fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
                color: "#888580", lineHeight: 1.6, marginTop: 2,
              }}>
                {tool.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sectionLabel = {
  fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 10,
  textTransform: "uppercase", letterSpacing: "0.12em", color: "#888580",
  marginBottom: 16,
};
