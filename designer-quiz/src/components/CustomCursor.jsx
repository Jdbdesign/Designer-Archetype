import useCursorEffect from "../hooks/useCursorEffect";

export default function CustomCursor({ archetypePrimary }) {
  const { pos, isHovering, isTouch } = useCursorEffect();
  if (isTouch) return null;

  const color = archetypePrimary || "#F0EDE8";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: isHovering ? 32 : 12,
        height: isHovering ? 32 : 12,
        borderRadius: "50%",
        background: isHovering ? "transparent" : "#F0EDE8",
        border: isHovering ? `2px solid ${color}` : "none",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 200ms ease, height 200ms ease, background 200ms ease, border 200ms ease",
        mixBlendMode: "difference",
      }}
    />
  );
}
