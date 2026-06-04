import { ARCHETYPES, ARCHETYPE_ORDER } from "../data/archetypes";

const orbConfigs = [
  { top: "5%",  left: "10%",  size: 320, duration: 14, delay: 0 },
  { top: "60%", left: "5%",   size: 280, duration: 18, delay: -4 },
  { top: "20%", left: "75%",  size: 350, duration: 16, delay: -2 },
  { top: "70%", left: "65%",  size: 300, duration: 12, delay: -6 },
  { top: "40%", left: "40%",  size: 260, duration: 20, delay: -8 },
  { top: "85%", left: "30%",  size: 290, duration: 15, delay: -3 },
];

export default function BackgroundOrbs() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {ARCHETYPE_ORDER.map((key, i) => {
        const arch = ARCHETYPES[key];
        const cfg = orbConfigs[i];
        return (
          <div
            key={key}
            style={{
              position: "absolute",
              top: cfg.top,
              left: cfg.left,
              width: cfg.size,
              height: cfg.size,
              borderRadius: "50%",
              background: arch.primary,
              opacity: 0.12,
              filter: "blur(80px)",
              animation: `drift ${cfg.duration}s ease-in-out infinite`,
              animationDelay: `${cfg.delay}s`,
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}
