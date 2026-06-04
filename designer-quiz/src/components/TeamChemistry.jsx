import { useState } from "react";
import { TEAM_CHEMISTRY } from "../data/teamChemistry";
import { ARCHETYPES } from "../data/archetypes";

function badgeStyle(label) {
  const positive = ["Natural allies", "Strong collaboration", "Amplification", "Operational harmony", "Operational partnership", "Strategic alignment", "Strategic alliance", "Essential pairing"];
  const warning = ["Productive friction", "Healthy tension", "Productive tension", "Explosive collaboration", "Useful friction"];
  const danger = ["High tension", "Opposing forces", "High friction", "Speed vs structure", "Strategic tension", "Translation needed", "Critical relationship"];

  if (positive.some((l) => label.includes(l.split(" ")[0]))) {
    return { bg: "rgba(16,185,129,0.12)", color: "#6EE7B7" };
  }
  if (warning.some((l) => label.includes(l.split(" ")[0]))) {
    return { bg: "rgba(245,158,11,0.12)", color: "#FDE68A" };
  }
  if (danger.some((l) => label.includes(l.split(" ")[0]))) {
    return { bg: "rgba(239,68,68,0.12)", color: "#FCA5A5" };
  }
  return { bg: "rgba(255,255,255,0.08)", color: "#888580" };
}

function getBadgeStyle(label, archetypePrimary) {
  const isPositive = ["Natural", "Strong", "Amplification", "Operational", "Strategic alliance"].some((w) => label.includes(w));
  const isDanger = ["High tension", "Opposing", "High friction", "Speed vs"].some((w) => label.includes(w));

  if (isPositive) return { background: `${archetypePrimary}22`, color: archetypePrimary };
  if (isDanger) return { background: "rgba(239,68,68,0.15)", color: "#FCA5A5" };
  return { background: "rgba(245,158,11,0.15)", color: "#FDE68A" };
}

export default function TeamChemistry({ archetypeKey }) {
  const [expanded, setExpanded] = useState({});
  const chemistry = TEAM_CHEMISTRY[archetypeKey];
  const selfArchetype = ARCHETYPES[archetypeKey];

  const others = Object.keys(chemistry);

  return (
    <div>
      <p style={sectionLabel}>How You Work With Others</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {others.map((key) => {
          const rel = chemistry[key];
          const other = ARCHETYPES[key];
          const isOpen = !!expanded[key];
          const badge = getBadgeStyle(rel.label, selfArchetype.primary);

          return (
            <div key={key} style={{ borderRadius: 10, overflow: "hidden" }}>
              <button
                aria-expanded={isOpen}
                data-cursor-hover
                onClick={() => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))}
                style={{
                  display: "flex", alignItems: "center", gap: 12, width: "100%",
                  padding: "12px 14px", textAlign: "left",
                  background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: isOpen ? "10px 10px 0 0" : 10,
                  cursor: "none", transition: "background 200ms",
                }}
              >
                <span style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: other.primary, flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13,
                  color: "#F0EDE8", flex: 1,
                }}>
                  {other.name}
                </span>
                <span style={{
                  fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 11,
                  padding: "3px 9px", borderRadius: 999,
                  background: badge.background, color: badge.color,
                }}>
                  {rel.label}
                </span>
                <span style={{ color: "#888580", fontSize: 12, flexShrink: 0 }}>
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              <div style={{
                maxHeight: isOpen ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 350ms ease",
              }}>
                <p style={{
                  fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
                  color: "#888580", lineHeight: 1.7,
                  padding: "12px 14px 14px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                }}>
                  {rel.description}
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
