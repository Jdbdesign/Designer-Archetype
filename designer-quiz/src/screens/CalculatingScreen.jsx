import { useEffect } from "react";
import { ARCHETYPES, ARCHETYPE_ORDER } from "../data/archetypes";

export default function CalculatingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        animation: "fadeUp 300ms ease both",
      }}
    >
      {/* Dot ring loader */}
      <div
        style={{ position: "relative", width: 100, height: 100 }}
        role="status"
        aria-label="Calculating your result"
      >
        {ARCHETYPE_ORDER.map((key, i) => {
          const angle = (i / 6) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 40 * Math.cos(rad - Math.PI / 2);
          const y = 50 + 40 * Math.sin(rad - Math.PI / 2);
          return (
            <div
              key={key}
              aria-hidden="true"
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: ARCHETYPES[key].primary,
                transform: "translate(-50%, -50%)",
                animation: "dotPing 0.9s ease-in-out infinite",
                animationDelay: `${i * 150}ms`,
              }}
            />
          );
        })}
      </div>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 18,
          color: "#888580",
          animation: "textPulse 1.5s ease-in-out infinite",
        }}
      >
        Analysing your design personality…
      </p>
    </div>
  );
}
