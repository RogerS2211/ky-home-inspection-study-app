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

export interface StudyProgress {
  deckId: string;
  cardId: string;
  lastStudied: string; // ISO date string
  confidence: ConfidenceLevel;
  reviewCount: number;
  mastered: boolean;
}

export interface StudySession {
  currentDeckId: string | null;
  currentCardIndex: number;
  cardsReviewedToday: number;
  streak: number;
  lastStudyDate: string; // ISO date string
}

export interface StudyState {
  progress: Record<string, StudyProgress>; // key: `${deckId}-${cardId}`
  session: StudySession;
}
