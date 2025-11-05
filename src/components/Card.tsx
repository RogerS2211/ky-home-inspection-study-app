import React from 'react';
import type { Flashcard } from '../types';

interface CardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Card: React.FC<CardProps> = ({ card, isFlipped, onFlip }) => {
  return (
    <div className="flip-card w-full max-w-2xl mx-auto" onClick={onFlip}>
      <div className={`flip-card-inner relative w-full min-h-[400px] ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card - Question */}
        <div className="flip-card-front absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 cursor-pointer border-4 border-primary h-full">
          <div className="flex flex-col h-full justify-center items-center text-center">
            <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
              Question
            </div>

            {/* Show image if available, otherwise show text */}
            {card.imageUrl ? (
              <div className="flex-1 flex flex-col justify-center items-center w-full">
                <img
                  src={card.imageUrl}
                  alt={card.question}
                  className="max-w-full max-h-[300px] object-contain rounded-lg mb-4"
                />
                <div className="text-xl md:text-2xl font-medium text-gray-800">
                  {card.question}
                </div>
              </div>
            ) : (
              <div className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
                {card.question}
              </div>
            )}

            <div className="mt-8 text-gray-400 text-sm">
              Tap to reveal answer
            </div>
          </div>
        </div>

        {/* Back of card - Answer */}
        <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-primary to-blue-700 rounded-2xl shadow-2xl p-8 cursor-pointer h-full">
          <div className="flex flex-col h-full justify-center items-center text-center">
            <div className="text-sm font-semibold text-blue-200 mb-4 uppercase tracking-wide">
              Answer
            </div>
            <div className="text-xl md:text-2xl text-white leading-relaxed">
              {card.answer}
            </div>
            <div className="mt-8 text-blue-200 text-sm">
              Tap to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
