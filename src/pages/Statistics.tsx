import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { HeroStats } from '../components/stats/HeroStats';
import { FocusToday } from '../components/stats/FocusToday';
import { DeckPerformance } from '../components/stats/DeckPerformance';
import { LearningVelocity } from '../components/stats/LearningVelocity';
import { StrugglingCards } from '../components/stats/StrugglingCards';
import { ReviewCalendar } from '../components/stats/ReviewCalendar';
import { useStudy } from '../contexts/StudyContext';
import { decks } from '../data/decks';

export const Statistics: React.FC = () => {
  const navigate = useNavigate();
  const {
    state,
    getMasteredCount,
    getDueCount,
    getHardCount,
    getTotalMasteredCount,
    getStrugglingCards,
    getDueCardsInNextDays,
    getRecentStudyHistory
  } = useStudy();

  // Calculate hero stats
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const totalMastered = getTotalMasteredCount();
  const totalDueToday = decks.reduce((sum, deck) => sum + getDueCount(deck.id), 0);

  // Calculate deck recommendations
  const recommendations = useMemo(() => {
    return decks
      .map(deck => {
        const dueCount = getDueCount(deck.id);
        const hardCount = getHardCount(deck.id);
        // Priority: due cards are most important, then hard cards
        const priority = dueCount * 2 + hardCount;

        return {
          deck,
          dueCount,
          hardCount,
          priority
        };
      })
      .filter(rec => rec.priority > 0)
      .sort((a, b) => b.priority - a.priority);
  }, [decks, getDueCount, getHardCount]);

  // Calculate deck stats for performance grid
  const deckStats = useMemo(() => {
    return decks.map(deck => {
      const masteredCount = getMasteredCount(deck.id);
      const totalCards = deck.cards.length;
      const dueCount = getDueCount(deck.id);
      const hardCount = getHardCount(deck.id);
      const masteryPercent = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

      return {
        deck,
        masteredCount,
        totalCards,
        dueCount,
        hardCount,
        masteryPercent
      };
    });
  }, [decks, getMasteredCount, getDueCount, getHardCount]);

  // Get struggling cards
  const strugglingCards = getStrugglingCards(10);

  // Get card content for struggling cards
  const getCardContent = (deckId: string, cardId: string) => {
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return null;

    const card = deck.cards.find(c => c.id === cardId);
    if (!card) return null;

    return {
      question: card.question,
      deckTitle: deck.title
    };
  };

  // Get upcoming reviews (next 7 days)
  const upcomingReviews = getDueCardsInNextDays(7);

  // Get recent study history (last 7 days)
  const recentHistory = getRecentStudyHistory(7);
  const weeklyAverage = recentHistory.reduce((sum, count) => sum + count, 0) / 7;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackButton onBack={() => navigate('/decks')} />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Statistics</h1>
          <p className="text-gray-600">Track your progress and identify areas for improvement</p>
        </div>

        {/* Hero Stats */}
        <HeroStats
          streak={state.session.streak}
          masteredCount={totalMastered}
          totalCards={totalCards}
          dueToday={totalDueToday}
          cardsReviewedToday={state.session.cardsReviewedToday}
        />

        {/* Focus Today Recommendations */}
        <FocusToday recommendations={recommendations} />

        {/* Learning Velocity */}
        <LearningVelocity
          cardsReviewedToday={state.session.cardsReviewedToday}
          weeklyAverage={weeklyAverage}
          recentHistory={recentHistory}
        />

        {/* Deck Performance Grid */}
        <DeckPerformance deckStats={deckStats} />

        {/* Struggling Cards (Expandable) */}
        <StrugglingCards strugglingCards={strugglingCards} getCardContent={getCardContent} />

        {/* Review Calendar (Expandable) */}
        <ReviewCalendar upcomingReviews={upcomingReviews} />

        {/* Back to Decks Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/decks')}
            className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 active:scale-95"
          >
            Back to Decks
          </button>
        </div>
      </div>
    </div>
  );
};
