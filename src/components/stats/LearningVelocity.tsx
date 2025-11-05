import React from 'react';

interface LearningVelocityProps {
  cardsReviewedToday: number;
  weeklyAverage: number;
  recentHistory: number[]; // Last 7 days
}

export const LearningVelocity: React.FC<LearningVelocityProps> = ({
  cardsReviewedToday,
  weeklyAverage,
  recentHistory
}) => {
  const getVelocityStatus = (count: number): {
    label: string;
    color: string;
    emoji: string;
    message: string;
  } => {
    if (count === 0) {
      return {
        label: 'Hibernating',
        color: 'text-gray-500',
        emoji: '😴',
        message: 'Start your study session to keep your streak alive!'
      };
    }
    if (count <= 5) {
      return {
        label: 'Warming Up',
        color: 'text-blue-500',
        emoji: '🌱',
        message: 'Good start! A few more cards will make a big difference.'
      };
    }
    if (count <= 20) {
      return {
        label: 'Steady Pace',
        color: 'text-success',
        emoji: '🎯',
        message: 'Perfect! Consistency beats intensity.'
      };
    }
    return {
      label: 'On Fire',
      color: 'text-orange-500',
      emoji: '🔥',
      message: 'Amazing effort! Don\'t forget to take breaks.'
    };
  };

  const status = getVelocityStatus(cardsReviewedToday);
  const diff = cardsReviewedToday - weeklyAverage;
  const maxInWeek = Math.max(...recentHistory, cardsReviewedToday);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>📈</span>
        <span>Your Learning Velocity</span>
      </h2>

      {/* Velocity Gauge */}
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">{status.emoji}</div>
        <div className={`text-2xl font-bold ${status.color} mb-1`}>
          {status.label}
        </div>
        <div className="text-gray-600 text-sm max-w-md mx-auto">
          {status.message}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-primary">{cardsReviewedToday}</div>
          <div className="text-sm text-gray-600 mt-1">Cards Today</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-gray-700">{Math.round(weeklyAverage)}</div>
          <div className="text-sm text-gray-600 mt-1">Weekly Average</div>
        </div>
      </div>

      {/* Comparison */}
      {weeklyAverage > 0 && (
        <div className="text-center">
          {diff > 0 ? (
            <p className="text-success font-medium">
              ⬆️ You're {Math.abs(diff)} cards ahead of your average!
            </p>
          ) : diff < 0 ? (
            <p className="text-gray-600">
              You're {Math.abs(diff)} cards behind your average today
            </p>
          ) : (
            <p className="text-gray-600">
              Right on track with your average!
            </p>
          )}
        </div>
      )}

      {/* Mini Chart */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-600 mb-3">Last 7 days</div>
        <div className="flex items-end justify-between gap-2 h-24">
          {recentHistory.map((count, idx) => {
            const heightPercent = maxInWeek > 0 ? (count / maxInWeek) * 100 : 0;
            const isToday = idx === recentHistory.length - 1;

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t transition-all ${
                    isToday
                      ? 'bg-primary'
                      : count > 0
                      ? 'bg-gray-300'
                      : 'bg-gray-100'
                  }`}
                  style={{ height: `${Math.max(heightPercent, 4)}%` }}
                  title={`${count} cards`}
                />
                <div className="text-xs text-gray-500">
                  {isToday ? 'Today' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        💡 Tip: Aim for 10-15 cards daily for optimal retention
      </div>
    </div>
  );
};
