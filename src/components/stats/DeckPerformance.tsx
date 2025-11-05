import React, { useState } from 'react';
import type { Deck } from '../../types';

interface DeckStats {
  deck: Deck;
  masteredCount: number;
  totalCards: number;
  dueCount: number;
  hardCount: number;
  masteryPercent: number;
}

interface DeckPerformanceProps {
  deckStats: DeckStats[];
}

export const DeckPerformance: React.FC<DeckPerformanceProps> = ({ deckStats }) => {
  const [showAll, setShowAll] = useState(false);

  // Sort by priority: lowest mastery first, then by hard count
  const sortedDecks = [...deckStats].sort((a, b) => {
    if (a.masteryPercent !== b.masteryPercent) {
      return a.masteryPercent - b.masteryPercent;
    }
    return b.hardCount - a.hardCount;
  });

  const displayDecks = showAll ? sortedDecks : sortedDecks.slice(0, 5);

  const getStatusColor = (percent: number): string => {
    if (percent >= 70) return 'bg-success';
    if (percent >= 40) return 'bg-warning';
    return 'bg-danger';
  };

  const getStatusText = (percent: number): string => {
    if (percent === 100) return '🎉 Complete!';
    if (percent >= 70) return '💪 Strong';
    if (percent >= 40) return '⚡ Learning';
    if (percent > 0) return '⚠️ Needs attention';
    return '🆕 Not started';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>📚</span>
        <span>Deck Progress</span>
      </h2>

      <div className="space-y-4">
        {displayDecks.map(stats => (
          <div key={stats.deck.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3 flex-1">
                <div className="text-3xl">{stats.deck.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{stats.deck.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-600">
                    <span>{stats.masteredCount}/{stats.totalCards} mastered</span>
                    {stats.dueCount > 0 && (
                      <span className="text-warning font-medium">• {stats.dueCount} due</span>
                    )}
                    {stats.hardCount > 0 && (
                      <span className="text-danger font-medium">• {stats.hardCount} hard</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {stats.masteryPercent}%
                </div>
                <div className="text-xs text-gray-500">
                  {getStatusText(stats.masteryPercent)}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getStatusColor(stats.masteryPercent)}`}
                style={{ width: `${stats.masteryPercent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {deckStats.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full mt-4 text-primary hover:text-blue-700 font-medium text-sm py-2 transition-colors"
        >
          {showAll ? '↑ Show Less' : `↓ View All ${deckStats.length} Decks`}
        </button>
      )}
    </div>
  );
};
