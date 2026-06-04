import { useEffect, useRef, useState } from "react";
import { ARCHETYPES } from "../data/archetypes";
import { getPersonalizedBooks, getSecondaryArchetype } from "../data/personalization";

export default function ReadingList({ archetypeKey, scores }) {
  const books = getPersonalizedBooks(archetypeKey, scores);
  const archetype = ARCHETYPES[archetypeKey];
  const secondaryKey = getSecondaryArchetype(scores, archetypeKey);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // The 3rd book is always from the secondary archetype
  const primaryBooksCount = 2;

  return (
    <div ref={ref}>
      <p style={sectionLabel}>Read These Next</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {books.map((book, i) => {
          const isSecondary = i >= primaryBooksCount;
          const bookColor = isSecondary ? ARCHETYPES[secondaryKey].primary : archetype.primary;
          return (
            <div
              key={book.title}
              style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${isSecondary ? ARCHETYPES[secondaryKey].primary + "22" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 12,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 400ms ease ${i * 80}ms, transform 400ms ease ${i * 80}ms`,
              }}
            >
              <div style={{
                flexShrink: 0, width: 40, height: 52, borderRadius: 6,
                background: `${bookColor}1A`,
                border: `1px solid ${bookColor}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>
                📖
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                  color: "#F0EDE8", marginBottom: 2, lineHeight: 1.3,
                }}>
                  {book.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 12,
                  color: "#888580", marginBottom: 6,
                }}>
                  {book.author}
                </p>
                <p style={{
                  fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 13,
                  color: "#888580", lineHeight: 1.6,
                }}>
                  {book.reason}
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
