import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { StudyProgress, StudyState, ConfidenceLevel } from '../types';
import { calculateNextReview, isCardDue, isCardHard } from '../utils/spacedRepetition';

interface StudyContextType {
  state: StudyState;
  updateProgress: (deckId: string, cardId: string, confidence: ConfidenceLevel) => void;
  setCurrentDeck: (deckId: string) => void;
  setCurrentCardIndex: (index: number) => void;
  getMasteredCount: (deckId: string) => number;
  getTotalProgress: (deckId: string) => number;
  getDueCount: (deckId: string) => number;
  getHardCount: (deckId: string) => number;
  resetProgress: (deckId: string) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

const STORAGE_KEY = 'study-progress-v2';

const getInitialState = (): StudyState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading study progress:', error);
  }

  return {
    progress: {},
    session: {
      currentDeckId: null,
      currentCardIndex: 0,
      cardsReviewedToday: 0,
      streak: 0,
      lastStudyDate: new Date().toISOString()
    }
  };
};

export const StudyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StudyState>(getInitialState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving study progress:', error);
    }
  }, [state]);

  // Update streak based on study activity
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastStudyDay = state.session.lastStudyDate.split('T')[0];

    if (lastStudyDay !== today && state.session.cardsReviewedToday > 0) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      setState(prev => ({
        ...prev,
        session: {
          ...prev.session,
          cardsReviewedToday: 0,
          streak: lastStudyDay === yesterdayStr ? prev.session.streak : 0,
          lastStudyDate: new Date().toISOString()
        }
      }));
    }
  }, [state.session.lastStudyDate, state.session.cardsReviewedToday]);

  const updateProgress = (deckId: string, cardId: string, confidence: ConfidenceLevel) => {
    const key = `${deckId}-${cardId}`;
    const existing = state.progress[key];
    const now = new Date().toISOString();
    const today = now.split('T')[0];
    const lastStudyDay = state.session.lastStudyDate.split('T')[0];

    // Calculate spaced repetition values
    const srData = calculateNextReview(confidence, existing);

    const newProgress: StudyProgress = {
      deckId,
      cardId,
      lastStudied: now,
      confidence,
      reviewCount: (existing?.reviewCount || 0) + 1,
      mastered: confidence === 'easy' && (existing?.reviewCount || 0) >= 1,
      // Spaced repetition fields
      easinessFactor: srData.easinessFactor,
      interval: srData.interval,
      nextReviewDate: srData.nextReviewDate,
      repetitions: srData.repetitions
    };

    setState(prev => ({
      progress: {
        ...prev.progress,
        [key]: newProgress
      },
      session: {
        ...prev.session,
        cardsReviewedToday: prev.session.cardsReviewedToday + 1,
        streak: lastStudyDay !== today && prev.session.cardsReviewedToday === 0
          ? prev.session.streak + 1
          : prev.session.streak,
        lastStudyDate: now
      }
    }));
  };

  const setCurrentDeck = (deckId: string) => {
    setState(prev => ({
      ...prev,
      session: {
        ...prev.session,
        currentDeckId: deckId,
        currentCardIndex: 0
      }
    }));
  };

  const setCurrentCardIndex = (index: number) => {
    setState(prev => ({
      ...prev,
      session: {
        ...prev.session,
        currentCardIndex: index
      }
    }));
  };

  const getMasteredCount = (deckId: string): number => {
    return Object.values(state.progress).filter(
      p => p.deckId === deckId && p.mastered
    ).length;
  };

  const getTotalProgress = (deckId: string): number => {
    return Object.values(state.progress).filter(
      p => p.deckId === deckId
    ).length;
  };

  const getDueCount = (deckId: string): number => {
    return Object.values(state.progress).filter(
      p => p.deckId === deckId && isCardDue(p)
    ).length;
  };

  const getHardCount = (deckId: string): number => {
    return Object.values(state.progress).filter(
      p => p.deckId === deckId && isCardHard(p)
    ).length;
  };

  const resetProgress = (deckId: string) => {
    setState(prev => ({
      ...prev,
      progress: Object.fromEntries(
        Object.entries(prev.progress).filter(([_, p]) => p.deckId !== deckId)
      )
    }));
  };

  return (
    <StudyContext.Provider
      value={{
        state,
        updateProgress,
        setCurrentDeck,
        setCurrentCardIndex,
        getMasteredCount,
        getTotalProgress,
        getDueCount,
        getHardCount,
        resetProgress
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = (): StudyContextType => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
};
