export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category?: string;
  imageUrl?: string;
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  category: string;
  icon?: string;
  cards: Flashcard[];
}

export type ConfidenceLevel = 'hard' | 'good' | 'easy';

export type StudyMode = 'all' | 'due' | 'hard';

export interface StudyProgress {
  deckId: string;
  cardId: string;
  lastStudied: string; // ISO date string
  confidence: ConfidenceLevel;
  reviewCount: number;
  mastered: boolean;
  // Spaced repetition (SM-2 algorithm)
  easinessFactor: number; // 1.3 to 2.5, default 2.5
  interval: number; // Days until next review
  nextReviewDate: string; // ISO date string
  repetitions: number; // Consecutive correct reviews
}

export interface StudyHistoryEntry {
  date: string; // YYYY-MM-DD format
  cardsReviewed: number;
  timeSpent?: number; // optional, in minutes
}

export interface StudySession {
  currentDeckId: string | null;
  currentCardIndex: number;
  cardsReviewedToday: number;
  streak: number;
  lastStudyDate: string; // ISO date string
  firstStudyDate: string | null; // ISO date string, set on first review
  studyHistory: StudyHistoryEntry[]; // Daily study log for trends
}

export interface StudyState {
  progress: Record<string, StudyProgress>; // key: `${deckId}-${cardId}`
  session: StudySession;
}
