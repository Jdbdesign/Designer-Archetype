export default function ArchetypeCard({ archetype }) {
  const {
    name, key, emoji, tagline, description,
    superpowers, blindspot, parallel,
    primary, glow, light, darkBg,
  } = archetype;

  const glowHalf = glow.replace("0.15", "0.08");

  return (
    <div
      style={{
        "--archetype-glow": glow,
        "--archetype-glow-50": glowHalf,
        borderRadius: 20,
        border: `1px solid ${primary}4D`,
        background: `linear-gradient(160deg, ${darkBg} 0%, #0D0D0D 60%)`,
        padding: 32,
        animation: "scaleBounce 500ms ease-out 200ms both, glowPulse 3s ease-in-out 700ms infinite",
        position: "relative",
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 28 }}>{emoji}</span>
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: primary,
          }}
        >
          THE {key} — {name.toUpperCase()}
        </span>
      </div>

      {/* Archetype name */}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(28px, 5vw, 40px)",
          color: light,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}
      >
        {name}
      </h2>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 18,
          color: primary,
          marginTop: 10,
        }}
      >
        &ldquo;{tagline}&rdquo;
      </p>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.08)",
          margin: "20px 0",
        }}
      />

      {/* Superpowers */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {superpowers.map((sp) => (
          <span
            key={sp}
            style={{
              background: glow,
              border: `1px solid ${primary}4D`,
              color: light,
              fontFamily: "var(--font-ui)",
              fontWeight: 500,
              fontSize: 12,
              padding: "6px 14px",
              borderRadius: 9999,
            }}
          >
            {sp}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontWeight: 400,
          fontSize: 14,
          color: "#888580",
          lineHeight: 1.8,
        }}
      >
        {description}
      </p>

      {/* Info blocks */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
        {[
          { label: "Famous Parallel", value: parallel },
          { label: "Blind Spot", value: blindspot },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#888580",
                marginBottom: 6,
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                fontSize: 13,
                color: "#F0EDE8",
                lineHeight: 1.4,
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Brand line */}
      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontWeight: 400,
          fontSize: 11,
          color: "#888580",
          marginTop: 20,
          textAlign: "center",
          letterSpacing: "0.05em",
        }}
      >
        designerarchetype.co
      </p>
    </div>
  );
}
