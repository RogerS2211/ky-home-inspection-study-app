import React from 'react';

interface HeroStatsProps {
  streak: number;
  masteredCount: number;
  totalCards: number;
  dueToday: number;
  cardsReviewedToday: number;
}

export const HeroStats: React.FC<HeroStatsProps> = ({
  streak,
  masteredCount,
  totalCards,
  dueToday,
  cardsReviewedToday
}) => {
  const masteryPercent = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  // Determine color based on mastery percentage
  const getProgressColor = (percent: number): string => {
    if (percent >= 71) return 'text-success';
    if (percent >= 31) return 'text-warning';
    return 'text-danger';
  };

  const getProgressBg = (percent: number): string => {
    if (percent >= 71) return 'from-success to-green-600';
    if (percent >= 31) return 'from-warning to-yellow-600';
    return 'from-danger to-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold mb-1">{streak}</div>
          <div className="text-sm opacity-90">Day Streak</div>
          <div className="text-2xl mt-1">🔥</div>
        </div>

        {/* Mastered */}
        <div className="bg-gradient-to-br from-success to-green-600 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold mb-1">{masteredCount}</div>
          <div className="text-sm opacity-90">Mastered</div>
          <div className="text-2xl mt-1">✅</div>
        </div>

        {/* Due Today */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold mb-1">{dueToday}</div>
          <div className="text-sm opacity-90">Due Today</div>
          <div className="text-2xl mt-1">📚</div>
        </div>

        {/* Reviewed Today */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold mb-1">{cardsReviewedToday}</div>
          <div className="text-sm opacity-90">Reviewed</div>
          <div className="text-2xl mt-1">⏰</div>
        </div>
      </div>

      {/* Overall Progress Ring */}
      <div className="text-center">
        <div className="relative inline-flex items-center justify-center mb-4">
          {/* Background Circle */}
          <svg className="transform -rotate-90" width="180" height="180">
            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 70}`}
              strokeDashoffset={`${2 * Math.PI * 70 * (1 - masteryPercent / 100)}`}
              className={`transition-all duration-1000 ${getProgressBg(masteryPercent)}`}
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div className={`text-5xl font-bold ${getProgressColor(masteryPercent)}`}>
                {masteryPercent}%
              </div>
              <div className="text-sm text-gray-500">Overall</div>
            </div>
          </div>
        </div>
        <div className="text-gray-600">
          <span className="font-semibold">{masteredCount}</span> of{' '}
          <span className="font-semibold">{totalCards}</span> cards mastered
        </div>
      </div>
    </div>
  );
};
