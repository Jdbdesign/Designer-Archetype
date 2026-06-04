import { getPersonalizedAntiPattern } from "../data/personalization";

export default function AntiPattern({ archetypeKey, scores }) {
  const antiPattern = getPersonalizedAntiPattern(archetypeKey, scores);

  return (
    <div>
      <p style={sectionLabel}>Watch Out For This</p>
      <div style={{
        background: "rgba(255,255,255,0.03)",
        borderLeft: "3px solid #F59E0B",
        borderRadius: "0 14px 14px 0",
        padding: 18,
      }}>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
          color: "#FDE68A", marginBottom: 8,
        }}>
          {antiPattern.name}
        </p>
        <p style={{
          fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
          color: "#888580", lineHeight: 1.7, marginBottom: 14,
        }}>
          {antiPattern.description}
        </p>
        <p style={{
          fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
          color: "#F0EDE8", lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 600, color: "#888580", marginRight: 4 }}>
            How to catch it:
          </span>
          {antiPattern.catchIt}
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
