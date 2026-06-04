import { RESULT_DATA } from "./resultData";
import { ARCHETYPE_ORDER } from "./archetypes";

// Returns the archetype key with the second-highest score
export function getSecondaryArchetype(scores, primaryKey) {
  const others = ARCHETYPE_ORDER.filter((k) => k !== primaryKey);
  return others.sort((a, b) => (scores[b] || 0) - (scores[a] || 0))[0];
}

// Maps secondary archetype to a variant index (0, 1, or 2)
// Group 0 = creative/speed secondary (VP, CA)
// Group 1 = analytical/process secondary (UW, BB)
// Group 2 = strategic/systems secondary (SP, SA)
function getVariantIndex(scores, primaryKey) {
  const secondary = getSecondaryArchetype(scores, primaryKey);
  if (["VP", "CA"].includes(secondary)) return 0;
  if (["UW", "BB"].includes(secondary)) return 1;
  return 2;
}

// Returns the weekly challenge variant based on secondary archetype
// Uses a binary split: first half of non-primary order → variant 0, second half → variant 1
export function getPersonalizedChallenge(primaryKey, scores) {
  const data = RESULT_DATA[primaryKey];
  const secondary = getSecondaryArchetype(scores, primaryKey);
  const nonPrimary = ARCHETYPE_ORDER.filter((k) => k !== primaryKey);
  const idx = nonPrimary.indexOf(secondary) % 2;
  return data.weeklyChallengeVariants[idx];
}

// Returns the antiPattern variant based on secondary archetype group
export function getPersonalizedAntiPattern(primaryKey, scores) {
  const idx = getVariantIndex(scores, primaryKey);
  return RESULT_DATA[primaryKey].antiPatternVariants[idx];
}

// Returns the growthUnlock variant based on secondary archetype group
export function getPersonalizedGrowthUnlock(primaryKey, scores) {
  const idx = getVariantIndex(scores, primaryKey);
  return RESULT_DATA[primaryKey].growthUnlockVariants[idx];
}

// Returns 3 books: 2 from the primary archetype + 1 from the secondary archetype
// The secondary book is picked based on variant index to vary across users
export function getPersonalizedBooks(primaryKey, scores) {
  const primaryBooks = RESULT_DATA[primaryKey].books;
  const secondaryKey = getSecondaryArchetype(scores, primaryKey);
  const secondaryBooks = RESULT_DATA[secondaryKey].books;
  const variantIdx = getVariantIndex(scores, primaryKey);
  // Pick different secondary book based on secondary group so the result varies
  const secondaryBook = secondaryBooks[variantIdx % secondaryBooks.length];
  return [primaryBooks[0], primaryBooks[1], secondaryBook];
}

// Returns 3 designers: 2 from primary + 1 from secondary archetype
export function getPersonalizedDesigners(primaryKey, scores) {
  const primaryDesigners = RESULT_DATA[primaryKey].designersToFollow;
  const secondaryKey = getSecondaryArchetype(scores, primaryKey);
  const secondaryDesigners = RESULT_DATA[secondaryKey].designersToFollow;
  const variantIdx = getVariantIndex(scores, primaryKey);
  const secondaryDesigner = secondaryDesigners[variantIdx % secondaryDesigners.length];
  return [primaryDesigners[0], primaryDesigners[1], secondaryDesigner];
}
