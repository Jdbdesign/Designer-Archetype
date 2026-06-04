import { useEffect, useRef, useState } from "react";
import { ARCHETYPES, ARCHETYPE_ORDER } from "../data/archetypes";

const SIZE = 240;
const CENTER = SIZE / 2;
const MAX_RADIUS = 90;
const LABEL_OFFSET = 18;

function polarToCartesian(angle, radius) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export default function RadarChart({ scores, archetypeKey }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeLabel, setActiveLabel] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Dismiss tooltip on outside click/touch
  useEffect(() => {
    if (!activeLabel) return;
    const dismiss = () => setActiveLabel(null);
    document.addEventListener("click", dismiss);
    return () => document.removeEventListener("click", dismiss);
  }, [activeLabel]);

  const archetype = ARCHETYPES[archetypeKey];
  const total = Object.values(scores).reduce((s, v) => s + v, 0) || 1;

  const points = ARCHETYPE_ORDER.map((key, i) => {
    const angle = i * 60;
    const ratio = scores[key] / total;
    const radius = Math.max(ratio * MAX_RADIUS * 2.5, 6);
    return { key, angle, radius, ...polarToCartesian(angle, radius) };
  });

  const guidePts = ARCHETYPE_ORDER.map((_, i) =>
    polarToCartesian(i * 60, MAX_RADIUS)
  );

  const polygonStr = points.map((p) => `${p.x},${p.y}`).join(" ");
  const guideStr = guidePts.map((p) => `${p.x},${p.y}`).join(" ");

  const labelPoints = ARCHETYPE_ORDER.map((key, i) => {
    const angle = i * 60;
    const lp = polarToCartesian(angle, MAX_RADIUS + LABEL_OFFSET);
    return { key, ...lp };
  });

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 10,
        textTransform: "uppercase", letterSpacing: "0.12em", color: "#888580",
        marginBottom: 16,
      }}>
        Your Design DNA
      </p>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{
          overflow: "visible",
          transformOrigin: "center",
          animation: visible ? "radarDraw 600ms ease-out both" : "none",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Guide lines */}
        {ARCHETYPE_ORDER.map((_, i) => {
          const end = polarToCartesian(i * 60, MAX_RADIUS);
          return (
            <line
              key={i}
              x1={CENTER} y1={CENTER}
              x2={end.x} y2={end.y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          );
        })}

        {/* Guide hexagon */}
        <polygon
          points={guideStr}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />

        {/* Score polygon fill */}
        <polygon
          points={polygonStr}
          fill={archetype.primary + "4D"}
          stroke={archetype.primary + "CC"}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Axis labels — interactive */}
        {labelPoints.map(({ key, x, y }) => {
          const isActive = activeLabel === key;
          const labelArch = ARCHETYPES[key];
          return (
            <text
              key={key}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isActive ? labelArch.primary : archetype.primary}
              fontSize={isActive ? "11" : "10"}
              fontFamily="var(--font-ui)"
              fontWeight="600"
              style={{ cursor: "pointer", transition: "font-size 150ms ease" }}
              onMouseEnter={() => setActiveLabel(key)}
              onMouseLeave={() => setActiveLabel(null)}
              onTouchStart={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setActiveLabel((prev) => (prev === key ? null : key));
              }}
            >
              {key}
            </text>
          );
        })}
      </svg>

      {/* Tooltip strip below chart */}
      <div style={{ minHeight: 28, marginTop: 14 }}>
        {activeLabel ? (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px",
            background: `${ARCHETYPES[activeLabel].primary}18`,
            border: `1px solid ${ARCHETYPES[activeLabel].primary}44`,
            borderRadius: 9999,
            animation: "fadeUp 150ms ease both",
          }}>
            <span style={{
              fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 11,
              color: ARCHETYPES[activeLabel].primary,
            }}>
              {activeLabel}
            </span>
            <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.15)" }} />
            <span style={{
              fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 11,
              color: "#F0EDE8",
            }}>
              {ARCHETYPES[activeLabel].name}
            </span>
          </div>
        ) : (
          <p style={{
            fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 10,
            color: "#555250", letterSpacing: "0.04em",
          }}>
            Tap a label to see its full name
          </p>
        )}
      </div>
    </div>
  );
}
