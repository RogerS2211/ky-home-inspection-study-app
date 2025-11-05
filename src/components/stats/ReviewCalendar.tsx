import React, { useState } from 'react';

interface ReviewCalendarProps {
  upcomingReviews: Array<{ date: string; count: number }>;
}

export const ReviewCalendar: React.FC<ReviewCalendarProps> = ({ upcomingReviews }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxCount = Math.max(...upcomingReviews.map(r => r.count));
  const totalDue = upcomingReviews.reduce((sum, r) => sum + r.count, 0);

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateOnly = (d: Date) => d.toISOString().split('T')[0];

    if (dateOnly(date) === dateOnly(today)) return 'Today';
    if (dateOnly(date) === dateOnly(tomorrow)) return 'Tomorrow';

    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getBarColor = (count: number): string => {
    if (count === 0) return 'bg-gray-100';
    if (count >= 15) return 'bg-danger';
    if (count >= 10) return 'bg-warning';
    return 'bg-primary';
  };

  const heavyDays = upcomingReviews.filter(r => r.count >= 10);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span>📅</span>
          <span>Review Schedule</span>
          <span className="text-sm font-normal text-gray-500">
            ({totalDue} due this week)
          </span>
        </h2>
        <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>

      {isExpanded && (
        <>
          <div className="space-y-2 mb-4">
            {upcomingReviews.map((review) => (
              <div key={review.date} className="flex items-center gap-3">
                <div className="w-28 text-sm text-gray-600 font-medium">
                  {formatDate(review.date)}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${getBarColor(
                        review.count
                      )}`}
                      style={{
                        width: maxCount > 0 ? `${(review.count / maxCount) * 100}%` : '0%'
                      }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm font-semibold text-gray-700">
                    {review.count}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {heavyDays.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">💡 Heads up!</span> You have{' '}
                {heavyDays.length === 1 ? 'a heavy review day' : `${heavyDays.length} heavy review days`}{' '}
                coming up. Consider studying ahead to spread out the workload.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
