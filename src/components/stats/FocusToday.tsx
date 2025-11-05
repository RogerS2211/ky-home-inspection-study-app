import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Deck } from '../../types';

interface DeckRecommendation {
  deck: Deck;
  dueCount: number;
  hardCount: number;
  priority: number;
}

interface FocusTodayProps {
  recommendations: DeckRecommendation[];
}

export const FocusToday: React.FC<FocusTodayProps> = ({ recommendations }) => {
  const navigate = useNavigate();

  if (recommendations.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Focus Today</span>
        </h2>
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-gray-600 text-lg">
            Great job! You're all caught up!
          </p>
          <p className="text-gray-500 text-sm mt-2">
            No cards are due for review right now.
          </p>
        </div>
      </div>
    );
  }

  const topRecommendation = recommendations[0];
  const otherRecommendations = recommendations.slice(1, 3);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>🎯</span>
        <span>Recommended Focus Today</span>
      </h2>

      {/* Primary Recommendation */}
      <div className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-lg p-5 mb-4 border-2 border-primary/20">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{topRecommendation.deck.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {topRecommendation.deck.title}
              </h3>
              <p className="text-sm text-gray-600">
                {topRecommendation.deck.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {topRecommendation.dueCount > 0 && (
            <div className="bg-warning text-white text-xs font-bold px-3 py-1 rounded-full">
              {topRecommendation.dueCount} due
            </div>
          )}
          {topRecommendation.hardCount > 0 && (
            <div className="bg-danger text-white text-xs font-bold px-3 py-1 rounded-full">
              {topRecommendation.hardCount} hard
            </div>
          )}
        </div>

        <button
          onClick={() => navigate(`/study/${topRecommendation.deck.id}`)}
          className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 active:scale-95"
        >
          Start Studying →
        </button>
      </div>

      {/* Other Recommendations */}
      {otherRecommendations.length > 0 && (
        <div>
          <p className="text-sm text-gray-600 mb-2">Also recommended:</p>
          <div className="flex flex-wrap gap-2">
            {otherRecommendations.map(rec => (
              <button
                key={rec.deck.id}
                onClick={() => navigate(`/study/${rec.deck.id}`)}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-all"
              >
                <span>{rec.deck.icon}</span>
                <span>{rec.deck.title}</span>
                {rec.dueCount > 0 && (
                  <span className="bg-warning text-white text-xs px-2 py-0.5 rounded-full">
                    {rec.dueCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
