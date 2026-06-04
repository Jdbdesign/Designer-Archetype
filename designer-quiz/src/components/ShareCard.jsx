export default function ShareCard({ archetype, cardRef }) {
  const glowStrong = archetype.glow.replace("0.15", "0.35");
  const glowSoft = archetype.glow.replace("0.15", "0.18");

  return (
    <div
      ref={cardRef}
      style={{
        width: 480,
        background: `linear-gradient(150deg, ${archetype.darkBg} 0%, #080808 65%)`,
        borderRadius: 24,
        padding: "48px 44px 40px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        border: `1px solid ${archetype.primary}2A`,
      }}
    >
      {/* Ambient glow — top right */}
      <div
        style={{
          position: "absolute",
          top: -80, right: -80,
          width: 380, height: 380,
          background: `radial-gradient(circle at center, ${glowStrong} 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />
      {/* Ambient glow — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: -60, left: -60,
          width: 280, height: 280,
          background: `radial-gradient(circle at center, ${glowSoft} 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative" }}>
        {/* Emoji */}
        <div style={{ fontSize: 56, lineHeight: 1, marginBottom: 22 }}>
          {archetype.emoji}
        </div>

        {/* Key badge */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontWeight: 700,
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: archetype.primary,
            marginBottom: 10,
          }}
        >
          THE {archetype.key} · DESIGNER ARCHETYPE
        </p>

        {/* Archetype name */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 44,
            color: archetype.light,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 14,
          }}
        >
          {archetype.name}
        </h2>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: 16,
            color: archetype.primary,
            lineHeight: 1.55,
            marginBottom: 28,
          }}
        >
          &ldquo;{archetype.tagline}&rdquo;
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: `${archetype.primary}30`,
            marginBottom: 24,
          }}
        />

        {/* Superpowers */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {archetype.superpowers.map((sp) => (
            <span
              key={sp}
              style={{
                background: archetype.glow,
                border: `1px solid ${archetype.primary}44`,
                color: archetype.light,
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

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontWeight: 400,
              fontSize: 11,
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            What&apos;s your designer archetype?
          </p>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontWeight: 600,
              fontSize: 11,
              color: archetype.primary,
              letterSpacing: "0.03em",
            }}
          >
            designer-archetype.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
}
