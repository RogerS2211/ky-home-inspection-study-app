import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { ConfidenceButtons } from '../components/ConfidenceButtons';
import { useStudy } from '../contexts/StudyContext';
import { useCardFlip } from '../hooks/useCardFlip';
import { decks } from '../data/decks';
import type { ConfidenceLevel, StudyMode } from '../types';
import { isCardDue, isCardHard } from '../utils/spacedRepetition';

// Shuffle array utility
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const Study: React.FC = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();
  const { updateProgress, setCurrentCardIndex, state } = useStudy();
  const { isFlipped, flip, reset } = useCardFlip();

  const deck = decks.find((d) => d.id === deckId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studyMode, setStudyMode] = useState<StudyMode>('all');
  const [shuffleEnabled, setShuffleEnabled] = useState(false);

  useEffect(() => {
    if (!deck) {
      navigate('/decks');
    }
  }, [deck, navigate]);

  // Filter and shuffle cards based on study mode and shuffle setting
  const filteredCards = useMemo(() => {
    if (!deck) return [];

    let cards = deck.cards;

    // Apply filter based on study mode
    if (studyMode === 'due') {
      cards = cards.filter((card) => {
        const progress = state.progress[`${deck.id}-${card.id}`];
        return !progress || isCardDue(progress);
      });
    } else if (studyMode === 'hard') {
      cards = cards.filter((card) => {
        const progress = state.progress[`${deck.id}-${card.id}`];
        return progress && isCardHard(progress);
      });
    }

    // Apply shuffle if enabled
    if (shuffleEnabled) {
      cards = shuffleArray(cards);
    }

    return cards;
  }, [deck, studyMode, shuffleEnabled, state.progress]);

  // Reset current index when filters change
  useEffect(() => {
    setCurrentIndex(0);
    reset();
  }, [studyMode, shuffleEnabled, reset]);

  if (!deck) {
    return null;
  }

  // Handle case when no cards match the filter
  if (filteredCards.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header showBackButton onBack={() => navigate('/decks')} />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No Cards to Review!
            </h2>
            <p className="text-gray-600 mb-6">
              {studyMode === 'due' && 'Great job! No cards are due for review right now.'}
              {studyMode === 'hard' && 'Excellent! You don\'t have any cards marked as hard.'}
            </p>
            <button
              onClick={() => setStudyMode('all')}
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Study All Cards
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentCard = filteredCards[currentIndex];
  const totalCards = filteredCards.length;

  const handleRate = (confidence: ConfidenceLevel) => {
    updateProgress(deck.id, currentCard.id, confidence);

    // Move to next card after a short delay
    setTimeout(() => {
      if (currentIndex < totalCards - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentCardIndex(currentIndex + 1);
        reset();
      } else {
        // Completed the filtered set
        navigate('/decks');
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentCardIndex(currentIndex - 1);
      reset();
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentCardIndex(currentIndex + 1);
      reset();
    }
  };

  const handleExit = () => {
    navigate('/decks');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header showBackButton onBack={handleExit} />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Deck Title */}
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">{deck.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900">{deck.title}</h2>
          </div>

          {/* Mode Controls */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Study Mode Filter */}
            <div className="flex gap-2 bg-white rounded-lg p-1 shadow">
              <button
                onClick={() => setStudyMode('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  studyMode === 'all'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Cards
              </button>
              <button
                onClick={() => setStudyMode('due')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  studyMode === 'due'
                    ? 'bg-warning text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Due Today
              </button>
              <button
                onClick={() => setStudyMode('hard')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  studyMode === 'hard'
                    ? 'bg-danger text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Hard Cards
              </button>
            </div>

            {/* Shuffle Toggle */}
            <button
              onClick={() => setShuffleEnabled(!shuffleEnabled)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all shadow ${
                shuffleEnabled
                  ? 'bg-success text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {shuffleEnabled ? '🔀 Shuffled' : '📋 Ordered'}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <ProgressBar current={currentIndex + 1} total={totalCards} />
          </div>

          {/* Card Container */}
          <div className="mb-8 min-h-[400px] flex items-center justify-center">
            <Card card={currentCard} isFlipped={isFlipped} onFlip={flip} />
          </div>

          {/* Confidence Rating Buttons - Only show when card is flipped */}
          {isFlipped && (
            <div className="mb-8 animate-fade-in">
              <p className="text-center text-gray-600 mb-4 font-medium">
                How well did you know this?
              </p>
              <ConfidenceButtons onRate={handleRate} />
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <button
              onClick={handleExit}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 active:scale-95"
            >
              Exit
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalCards - 1}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
            >
              Next
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Completion Message */}
          {currentIndex === totalCards - 1 && isFlipped && (
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                This is the last card! Rate it to complete the session.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
