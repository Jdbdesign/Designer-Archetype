import { useRef } from "react";
import { ARCHETYPES } from "../data/archetypes";

export default function OptionCard({ option, index, isSelected, isDisabled, onSelect }) {
  const cardRef = useRef(null);

  const handleClick = (e) => {
    if (isDisabled) return;

    // Ripple
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement("div");
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${ARCHETYPES[option.a]?.primary || "#fff"};
      opacity: 0.2;
      transform: translate(-50%, -50%) scale(0);
      animation: rippleExpand 400ms ease-out forwards;
      pointer-events: none;
      z-index: 10;
    `;
    cardRef.current.appendChild(ripple);
    setTimeout(() => ripple.remove(), 420);

    onSelect(option.l, option.a);
  };

  const archColor = ARCHETYPES[option.a]?.primary || "#fff";
  const archGlow = ARCHETYPES[option.a]?.glow || "rgba(255,255,255,0.1)";

  return (
    <button
      ref={cardRef}
      data-cursor-hover
      onClick={handleClick}
      disabled={isDisabled && !isSelected}
      aria-pressed={isSelected}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: isSelected
          ? `linear-gradient(135deg, #161616, ${archGlow})`
          : "#161616",
        border: isSelected
          ? `2px solid ${archColor}`
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "14px 16px",
        cursor: isDisabled && !isSelected ? "not-allowed" : "none",
        textAlign: "left",
        opacity: isDisabled && !isSelected ? 0.3 : 1,
        transform: isDisabled && !isSelected ? "scale(0.98)" : "scale(1)",
        transition:
          "border 200ms ease, background 200ms ease, opacity 200ms ease, transform 200ms ease",
        animation: `fadeUp 300ms ease both`,
        animationDelay: `${index * 40}ms`,
        minHeight: 48,
        pointerEvents: isDisabled && !isSelected ? "none" : "auto",
      }}
      className="option-card"
    >
      {/* Letter badge */}
      <div
        style={{
          flexShrink: 0,
          width: 26,
          height: 26,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isSelected ? archColor : "rgba(255,255,255,0.06)",
          color: isSelected ? "#fff" : "#888580",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 12,
          transition: "background 200ms ease, color 200ms ease",
        }}
      >
        {option.l}
      </div>

      {/* Text */}
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontWeight: 400,
          fontSize: 14,
          color: "#F0EDE8",
          lineHeight: 1.65,
        }}
      >
        {option.t}
      </span>
    </button>
  );
}
