import { ARCHETYPES, ARCHETYPE_ORDER } from "../data/archetypes";
import BackgroundOrbs from "../components/BackgroundOrbs";

export default function IntroScreen({ onStart }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundOrbs />

      <a href="#main-content" className="skip-link" style={{
        position: "absolute",
        top: -100,
        left: "1rem",
        background: "#3B82F6",
        color: "#fff",
        padding: "0.5rem 1rem",
        borderRadius: 8,
        zIndex: 9998,
        fontFamily: "var(--font-ui)",
        transition: "top 150ms ease",
      }}>
        Skip to main content
      </a>

      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 640,
          margin: "0 auto",
          padding: "80px 24px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          animation: "fadeUp 500ms ease-out both",
        }}
      >
        {/* Color dots */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            alignItems: "center",
          }}
          aria-hidden="true"
        >
          {ARCHETYPE_ORDER.map((key, i) => (
            <div
              key={key}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: ARCHETYPES[key].primary,
                animation: "scaleBounce 600ms cubic-bezier(0.34,1.56,0.64,1) both",
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888580",
            marginBottom: 28,
            animation: "fadeUp 500ms ease-out 200ms both",
          }}
        >
          Designer Archetype Quiz
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#F0EDE8",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 900,
              animation: "fadeUp 500ms ease-out 280ms both",
            }}
          >
            What Type of
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 400,
              fontStyle: "italic",
              animation: "fadeUp 500ms ease-out 360ms both",
            }}
          >
            Designer
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 900,
              animation: "fadeUp 500ms ease-out 440ms both",
            }}
          >
            Are You?
          </span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontWeight: 400,
            fontSize: 16,
            color: "#888580",
            maxWidth: 460,
            lineHeight: 1.7,
            marginBottom: 40,
            animation: "fadeUp 500ms ease-out 520ms both",
          }}
        >
          10 questions. No right or wrong answers. Discover the archetype that shapes how you design.
        </p>

        {/* Archetype grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            width: "100%",
            marginBottom: 40,
            animation: "fadeUp 500ms ease-out 580ms both",
          }}
          role="list"
          aria-label="Designer archetypes"
        >
          {ARCHETYPE_ORDER.map((key) => {
            const a = ARCHETYPES[key];
            return (
              <div
                key={key}
                role="listitem"
                style={{
                  background: a.darkBg,
                  border: `1px solid ${a.primary}33`,
                  borderRadius: 14,
                  padding: "12px 10px",
                  cursor: "default",
                  transition: "transform 200ms ease, border-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.borderColor = `${a.primary}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = `${a.primary}33`;
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 16 }}>{a.emoji}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontWeight: 600,
                      fontSize: 9,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: a.primary,
                    }}
                  >
                    {key}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontWeight: 600,
                    fontSize: 12,
                    color: a.light,
                    lineHeight: 1.3,
                    textAlign: "left",
                  }}
                >
                  {a.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            animation: "fadeUp 500ms ease-out 660ms both",
          }}
        >
          <button
            data-cursor-hover
            onClick={onStart}
            style={{
              background: "#F0EDE8",
              color: "#0D0D0D",
              fontFamily: "var(--font-ui)",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 36px",
              borderRadius: 12,
              border: "none",
              cursor: "none",
              transition: "transform 150ms ease, box-shadow 150ms ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(240,237,232,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
          >
            Begin Quiz →
          </button>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              color: "#888580",
              letterSpacing: "0.02em",
            }}
          >
            10 questions · ~3 minutes · Free
          </p>
        </div>
      </main>
    </div>
  );
}
