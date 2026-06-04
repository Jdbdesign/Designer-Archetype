import { useState, useRef } from "react";
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
import ShareCard from "../components/ShareCard";

export default function ResultScreen({ result, scores, currentWisdomIndex, onRetake, onCycleWisdom }) {
  const [isPrinting, setIsPrinting] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);
  const [savingCard, setSavingCard] = useState(false);
  const [sharingCard, setSharingCard] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const contentRef = useRef(null);
  const hiddenCardRef = useRef(null);
  const archetype = ARCHETYPES[result];

  if (!archetype) return null;

  const wisdomIndex = currentWisdomIndex[result] ?? 0;

  const shareText = `I just discovered my designer archetype 🎨

I'm a ${archetype.name}.

"${archetype.tagline}"

My design superpowers: ${archetype.superpowers.join(" · ")}

What type of designer are you? Take the free quiz → https://designer-archetype.vercel.app/

#ProductDesign #UXDesign #DesignerLife`;

  const twitterText = `I'm a ${archetype.name} designer! 🎨

"${archetype.tagline}"

What's your designer archetype? → https://designer-archetype.vercel.app/

#ProductDesign #UXDesign`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://designer-archetype.vercel.app/")}`;

  const handleDownloadHtml = async () => {
    if (isPrinting) return;
    setIsPrinting(true);

    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    try {
      const el = contentRef.current;
      const htmlContent = el.outerHTML;

      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${archetype.name} — Designer Archetype</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,400;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --font-display: 'Fraunces', serif;
      --font-ui: 'Plus Jakarta Sans', sans-serif;
      --archetype-glow: ${archetype.glow};
      --archetype-glow-50: ${archetype.glow.replace("0.15", "0.08")};
    }
    html { color-scheme: dark; scroll-behavior: smooth; }
    body { background: #0D0D0D; color: #F0EDE8; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; margin: 0; }
    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 0 60px var(--archetype-glow), 0 0 120px var(--archetype-glow-50); }
      50% { box-shadow: 0 0 90px var(--archetype-glow), 0 0 160px var(--archetype-glow-50); }
    }
    @keyframes scaleBounce {
      0% { opacity: 0; transform: scale(0.4); }
      70% { transform: scale(1.08); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes progressShimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes dotPing {
      0%, 100% { opacity: 0.2; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    @keyframes textPulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    @keyframes wisdomFade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes radarDraw {
      from { opacity: 0; transform: scale(0.3); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes pulseRing {
      0% { box-shadow: 0 0 0 0 currentColor; opacity: 0.8; }
      70% { box-shadow: 0 0 0 5px transparent; opacity: 0; }
      100% { box-shadow: 0 0 0 0 transparent; opacity: 0; }
    }
  </style>
</head>
<body>
<div style="background:#0D0D0D;min-height:100vh;">
${htmlContent}
</div>
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${archetype.name.toLowerCase().replace(/\s+/g, "-")}-archetype.html`;
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsPrinting(false);
    }
  };

  const handleSaveCardImage = async () => {
    if (savingCard) return;
    setSavingCard(true);
    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(hiddenCardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `${archetype.name.toLowerCase().replace(/\s+/g, "-")}-archetype-card.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setSavingCard(false);
    }
  };

  const handleNativeShareImage = async () => {
    if (sharingCard) return;
    setSharingCard(true);
    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(hiddenCardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      const file = new File(
        [blob],
        `${archetype.name.toLowerCase().replace(/\s+/g, "-")}-archetype.png`,
        { type: "image/png" }
      );

      if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `I'm a ${archetype.name} designer`,
          text: shareText,
          files: [file],
        });
      } else if (navigator.share) {
        await navigator.share({
          title: `I'm a ${archetype.name} designer`,
          text: shareText,
          url: "https://designer-archetype.vercel.app/",
        });
      }
    } catch (err) {
      if (err.name !== "AbortError") console.error("Share failed:", err);
    } finally {
      setSharingCard(false);
    }
  };

  const handleShareClick = async () => {
    if (sharingCard) return;
    setSharingCard(true);
    let openModal = false;
    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(hiddenCardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      const file = new File(
        [blob],
        `${archetype.name.toLowerCase().replace(/\s+/g, "-")}-archetype.png`,
        { type: "image/png" }
      );

      if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `I'm a ${archetype.name} designer`,
          text: shareText,
          files: [file],
        });
      } else if (navigator.share) {
        await navigator.share({
          title: `I'm a ${archetype.name} designer`,
          text: shareText,
          url: "https://designer-archetype.vercel.app/",
        });
      } else {
        openModal = true;
      }
    } catch (err) {
      if (err.name === "AbortError") {
        // User cancelled native share — do nothing
      } else {
        openModal = true;
      }
    } finally {
      setSharingCard(false);
    }

    if (openModal) {
      setShowShareCard(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseShareCard = () => {
    setShowShareCard(false);
    document.body.style.overflow = "";
  };

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = shareText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  return (
    <>
      {/* Hidden card — always rendered off-screen so we can capture it anytime */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: -10000,
          top: 0,
          width: 480,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <ShareCard archetype={archetype} cardRef={hiddenCardRef} />
      </div>

      <div style={{ position: "relative", minHeight: "100vh" }}>
        <BackgroundOrbs />
        <div
          ref={contentRef}
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

          {/* Section 13 — Share + Download + Retake */}
          {!isPrinting && (
            <>
              <button
                data-cursor-hover
                onClick={handleShareClick}
                style={{
                  display: "block", width: "100%", marginTop: 0,
                  padding: 16,
                  background: archetype.primary,
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
                {sharingCard ? "Preparing…" : "Share Your Result →"}
              </button>

              <button
                data-cursor-hover
                onClick={handleDownloadHtml}
                style={{
                  display: "block", width: "100%", marginTop: 12,
                  padding: "14px 16px",
                  background: "transparent",
                  color: archetype.primary,
                  fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 14,
                  borderRadius: 12,
                  border: `1px solid ${archetype.primary}55`,
                  cursor: "none",
                  transition: "border-color 200ms ease, background 200ms ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = archetype.primary;
                  e.currentTarget.style.background = `${archetype.primary}14`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${archetype.primary}55`;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                ↓ Download as HTML
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
            </>
          )}
        </div>
      </div>

      {/* Share Card Modal */}
      {showShareCard && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) handleCloseShareCard(); }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 20px",
            overflowY: "auto",
            animation: "fadeUp 220ms ease both",
          }}
        >
          <div style={{ maxWidth: 480, width: "100%" }}>
            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#888580",
                }}
              >
                Your Share Card
              </p>
              <button
                data-cursor-hover
                onClick={handleCloseShareCard}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontWeight: 500,
                  fontSize: 12,
                  color: "#555250",
                  background: "transparent",
                  border: "none",
                  cursor: "none",
                  padding: "4px 8px",
                  borderRadius: 6,
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#F0EDE8"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#555250"; }}
              >
                ✕ Close
              </button>
            </div>

            {/* Card preview — display only, no ref */}
            <div style={{ overflowX: "auto" }}>
              <ShareCard archetype={archetype} cardRef={null} />
            </div>

            {/* Caption / body text */}
            <div
              style={{
                marginTop: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontWeight: 600,
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#888580",
                  }}
                >
                  Caption to attach
                </p>
                <button
                  data-cursor-hover
                  onClick={handleCopyCaption}
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontWeight: 600,
                    fontSize: 11,
                    color: copiedCaption ? "#4ade80" : archetype.primary,
                    background: "transparent",
                    border: `1px solid ${copiedCaption ? "#4ade8044" : archetype.primary + "44"}`,
                    borderRadius: 8,
                    cursor: "none",
                    padding: "4px 10px",
                    transition: "color 150ms ease, border-color 150ms ease",
                    letterSpacing: "0.02em",
                  }}
                >
                  {copiedCaption ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <pre
                style={{
                  fontFamily: "var(--font-ui)",
                  fontWeight: 400,
                  fontSize: 12,
                  color: "#C8C4BE",
                  lineHeight: 1.65,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  margin: 0,
                }}
              >
                {shareText}
              </pre>
            </div>

            {/* Primary actions */}
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <button
                data-cursor-hover
                onClick={handleSaveCardImage}
                style={{
                  flex: 1,
                  padding: "13px 16px",
                  background: archetype.primary,
                  color: "#fff",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 12,
                  border: "none",
                  cursor: "none",
                  transition: "opacity 150ms ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                {savingCard ? "Saving…" : "↓ Save as Image"}
              </button>

              {canNativeShare && (
                <button
                  data-cursor-hover
                  onClick={handleNativeShareImage}
                  style={{
                    flex: 1,
                    padding: "13px 16px",
                    background: "transparent",
                    color: archetype.primary,
                    fontFamily: "var(--font-ui)",
                    fontWeight: 600,
                    fontSize: 13,
                    borderRadius: 12,
                    border: `1px solid ${archetype.primary}55`,
                    cursor: "none",
                    transition: "opacity 150ms ease, background 150ms ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${archetype.primary}18`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  {sharingCard ? "Sharing…" : "Share to Apps →"}
                </button>
              )}
            </div>

            {/* Platform share links */}
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              {[
                { label: "𝕏 Twitter", href: twitterUrl },
                { label: "WhatsApp", href: whatsappUrl },
                { label: "LinkedIn", href: linkedinUrl },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 6px",
                    background: "transparent",
                    color: "#888580",
                    fontFamily: "var(--font-ui)",
                    fontWeight: 500,
                    fontSize: 11,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none",
                    transition: "border-color 150ms ease, color 150ms ease",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.color = "#F0EDE8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#888580";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Done button */}
            <button
              data-cursor-hover
              onClick={handleCloseShareCard}
              style={{
                display: "block",
                width: "100%",
                padding: "13px 16px",
                marginTop: 10,
                background: "transparent",
                color: "#888580",
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                fontSize: 13,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                cursor: "none",
                transition: "border-color 150ms ease, color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = "#F0EDE8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#888580";
              }}
            >
              Done
            </button>

            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 400,
                fontSize: 11,
                color: "#3D3A37",
                textAlign: "center",
                marginTop: 12,
                letterSpacing: "0.03em",
              }}
            >
              Save the image · Copy caption · Share via your preferred app
            </p>
          </div>
        </div>
      )}
    </>
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
