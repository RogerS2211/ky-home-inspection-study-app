import type { ConfidenceLevel, StudyProgress } from '../types';

/**
 * SM-2 Spaced Repetition Algorithm
 *
 * This algorithm optimizes review intervals based on how well you know each card.
 * - Cards you find "hard" come back sooner
 * - Cards you find "easy" come back much later
 * - The system adapts to your learning pace
 */

/**
 * Calculate the next review interval using SM-2 algorithm
 *
 * @param confidence - How well the user knew the card (hard/good/easy)
 * @param currentProgress - Current progress data for the card (or undefined for new cards)
 * @returns Updated progress with new interval, easiness factor, and next review date
 */
export function calculateNextReview(
  confidence: ConfidenceLevel,
  currentProgress?: StudyProgress
): Pick<StudyProgress, 'easinessFactor' | 'interval' | 'nextReviewDate' | 'repetitions'> {

  // Default values for new cards
  let easinessFactor = currentProgress?.easinessFactor ?? 2.5;
  let repetitions = currentProgress?.repetitions ?? 0;
  let interval = currentProgress?.interval ?? 0;

  // Convert confidence to SM-2 quality (0-5 scale)
  // hard = 1, good = 3, easy = 5
  const quality = confidence === 'hard' ? 1 : confidence === 'good' ? 3 : 5;

  // Update easiness factor
  // Formula: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easinessFactor = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Easiness factor should be at least 1.3
  if (easinessFactor < 1.3) {
    easinessFactor = 1.3;
  }

  // Calculate new interval based on quality
  if (quality < 3) {
    // Failed recall (hard) - reset to beginning
    repetitions = 0;
    interval = 1; // Review tomorrow
  } else {
    // Successful recall (good or easy)
    if (repetitions === 0) {
      interval = 1; // First success: review in 1 day
    } else if (repetitions === 1) {
      interval = 6; // Second success: review in 6 days
    } else {
      // Third+ success: multiply by easiness factor
      interval = Math.round(interval * easinessFactor);
    }
    repetitions += 1;
  }

  // Calculate next review date
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    easinessFactor,
    interval,
    nextReviewDate: nextReviewDate.toISOString(),
    repetitions
  };
}

/**
 * Check if a card is due for review
 */
export function isCardDue(progress: StudyProgress): boolean {
  const now = new Date();
  const nextReview = new Date(progress.nextReviewDate);
  return now >= nextReview;
}

/**
 * Get the number of days until the next review
 */
export function getDaysUntilReview(progress: StudyProgress): number {
  const now = new Date();
  const nextReview = new Date(progress.nextReviewDate);
  const diffMs = nextReview.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Check if a card is considered "hard" (needs review)
 * Only shows cards you've explicitly rated as "hard" or are genuinely struggling with
 */
export function isCardHard(progress: StudyProgress): boolean {
  return (
    progress.confidence === 'hard' ||
    progress.easinessFactor < 1.8
  );
}
