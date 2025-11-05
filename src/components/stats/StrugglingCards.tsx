import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { StudyProgress } from '../../types';

interface StrugglingCardsProps {
  strugglingCards: StudyProgress[];
  getCardContent: (deckId: string, cardId: string) => { question: string; deckTitle: string } | null;
}

export const StrugglingCards: React.FC<StrugglingCardsProps> = ({
  strugglingCards,
  getCardContent
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  if (strugglingCards.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>⚠️</span>
          <span>Cards Needing Attention</span>
        </h2>
        <div className="text-center py-6">
          <div className="text-5xl mb-3">🌟</div>
          <p className="text-gray-600">
            Great job! No cards are currently marked as hard.
          </p>
        </div>
      </div>
    );
  }

  const displayCount = isExpanded ? strugglingCards.length : Math.min(3, strugglingCards.length);
  const displayCards = strugglingCards.slice(0, displayCount);

  const getSeverityColor = (easiness: number): string => {
    if (easiness < 1.7) return 'bg-danger';
    return 'bg-warning';
  };

  const getSeverityLabel = (easiness: number): string => {
    if (easiness < 1.7) return 'Very Hard';
    return 'Hard';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span>⚠️</span>
          <span>Cards Needing Attention</span>
          <span className="text-sm font-normal text-gray-500">
            ({strugglingCards.length})
          </span>
        </h2>
        <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>

      {isExpanded && (
        <div className="space-y-3">
          {displayCards.map((card) => {
            const content = getCardContent(card.deckId, card.cardId);
            if (!content) return null;

            return (
              <div
                key={`${card.deckId}-${card.cardId}`}
                className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-white text-xs font-bold px-2 py-0.5 rounded ${getSeverityColor(
                          card.easinessFactor
                        )}`}
                      >
                        {getSeverityLabel(card.easinessFactor)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {content.deckTitle}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 line-clamp-2">
                      {content.question}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Easiness: {card.easinessFactor.toFixed(1)}</span>
                  <span>Reviewed {card.reviewCount}x</span>
                  <span>Last: {card.confidence}</span>
                </div>

                <button
                  onClick={() => navigate(`/study/${card.deckId}`)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-all"
                >
                  Review This Card
                </button>
              </div>
            );
          })}

          {strugglingCards.length > 3 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="w-full text-primary hover:text-blue-700 text-sm font-medium py-2"
            >
              Show {strugglingCards.length - 3} more
            </button>
          )}
        </div>
      )}
    </div>
  );
};
