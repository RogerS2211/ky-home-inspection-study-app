import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { ConfidenceButtons } from '../components/ConfidenceButtons';
import { useStudy } from '../contexts/StudyContext';
import { useCardFlip } from '../hooks/useCardFlip';
import { decks } from '../data/decks';
import type { ConfidenceLevel } from '../types';

export const Study: React.FC = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();
  const { updateProgress, setCurrentCardIndex } = useStudy();
  const { isFlipped, flip, reset } = useCardFlip();

  const deck = decks.find((d) => d.id === deckId);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!deck) {
      navigate('/decks');
    }
  }, [deck, navigate]);

  if (!deck) {
    return null;
  }

  const currentCard = deck.cards[currentIndex];
  const totalCards = deck.cards.length;

  const handleRate = (confidence: ConfidenceLevel) => {
    updateProgress(deck.id, currentCard.id, confidence);

    // Move to next card after a short delay
    setTimeout(() => {
      if (currentIndex < totalCards - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentCardIndex(currentIndex + 1);
        reset();
      } else {
        // Completed the deck
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
                This is the last card! Rate it to complete the deck.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
