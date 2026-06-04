import { useState } from "react";
import { ARCHETYPES } from "../data/archetypes";
import ArchetypeCard from "../components/ArchetypeCard";
import ScoreBreakdown from "../components/ScoreBreakdown";
import RadarChart from "../components/RadarChart";
import MasteryLevels from "../components/MasteryLevels";
import WeeklyChallenge from "../components/WeeklyChallenge";
import AntiPattern from "../components/AntiPattern";
import TeamChemistry from "../components/TeamChemistry";
import ReadingList from "../components/ReadingList";
import ToolsList from "../components/ToolsList";
import DesignersToFollow from "../components/DesignersToFollow";
import WisdomCard from "../components/WisdomCard";
import GrowthUnlock from "../components/GrowthUnlock";
import BackgroundOrbs from "../components/BackgroundOrbs";

export default function ResultScreen({ result, scores, currentWisdomIndex, onRetake, onCycleWisdom }) {
  const [copied, setCopied] = useState(false);
  const archetype = ARCHETYPES[result];

  if (!archetype) return null;

  const wisdomIndex = currentWisdomIndex[result] ?? 0;

  const shareText = `I just discovered my designer archetype 🎨

I'm a ${archetype.name}.

"${archetype.tagline}"

My design superpowers: ${archetype.superpowers.join(" · ")}

What type of designer are you? Take the free quiz → https://designerarchetype.co

#ProductDesign #UXDesign #DesignerLife`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareText;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundOrbs />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 640,
          margin: "0 auto",
          padding: "60px 20px 80px",
          animation: "fadeUp 400ms ease both",
        }}
      >
        {/* Section 1 — Archetype Identity */}
        <p style={sectionLabel}>Your Archetype</p>
        <ArchetypeCard archetype={archetype} />

        <Divider />

        {/* Section 2 — Design Fingerprint */}
        <RadarChart scores={scores} archetypeKey={result} />

        <Divider />

        {/* Section 3 — Score Breakdown */}
        <ScoreBreakdown scores={scores} winnerKey={result} />

        <Divider />

        {/* Section 4 — Mastery Levels */}
        <MasteryLevels archetypeKey={result} scores={scores} />

        <Divider />

        {/* Section 5 — Weekly Challenge */}
        <WeeklyChallenge archetypeKey={result} scores={scores} />

        <Divider />

        {/* Section 6 — Anti-Pattern */}
        <AntiPattern archetypeKey={result} scores={scores} />

        <Divider />

        {/* Section 7 — Team Chemistry */}
        <TeamChemistry archetypeKey={result} />

        <Divider />

        {/* Section 8 — Reading List */}
        <ReadingList archetypeKey={result} scores={scores} />

        <Divider />

        {/* Section 9 — Tools */}
        <ToolsList archetypeKey={result} />

        <Divider />

        {/* Section 10 — Designers to Follow */}
        <DesignersToFollow archetypeKey={result} scores={scores} />

        <Divider />

        {/* Section 11 — Wisdom Card */}
        <WisdomCard
          archetypeKey={result}
          wisdomIndex={wisdomIndex}
          onCycle={() => onCycleWisdom(result)}
        />

        <Divider />

        {/* Section 12 — Growth Unlock */}
        <GrowthUnlock archetypeKey={result} scores={scores} />

        <Divider />

        {/* Section 13 — Share + Retake */}
        <button
          data-cursor-hover
          onClick={handleCopy}
          style={{
            display: "block", width: "100%", marginTop: 0,
            padding: 16,
            background: copied ? "#10B981" : archetype.primary,
            color: "#fff",
            fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15,
            borderRadius: 12, border: "none", cursor: "none",
            transition: "background 300ms ease, transform 150ms ease",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.01)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)"; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.01)"; }}
        >
          {copied ? "✓ Copied! Post it now." : "Copy Result to Share →"}
        </button>

        <button
          data-cursor-hover
          onClick={onRetake}
          style={{
            display: "block", width: "100%", marginTop: 12,
            padding: "14px 16px",
            background: "transparent",
            color: "#888580",
            fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 14,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "none",
            transition: "border-color 200ms ease, color 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            e.currentTarget.style.color = "#F0EDE8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#888580";
          }}
        >
          ← Retake Quiz
        </button>
      </div>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "32px 0" }} />;
}

const sectionLabel = {
  fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 10,
  textTransform: "uppercase", letterSpacing: "0.12em", color: "#888580",
  marginBottom: 16,
};
