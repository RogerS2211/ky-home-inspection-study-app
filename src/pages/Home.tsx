import React from 'react';
import { Link } from 'react-router-dom';
import { useStudy } from '../contexts/StudyContext';
import { decks } from '../data/decks';

export const Home: React.FC = () => {
  const { state } = useStudy();

  const totalDecks = decks.length;
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const totalMastered = Object.values(state.progress).filter(p => p.mastered).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🏠</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kentucky Home Inspector
              <br />
              <span className="text-primary">Study Guide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master your certification exam with interactive flashcards
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary">{totalDecks}</div>
              <div className="text-sm text-gray-600 mt-1">Decks</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary">{totalCards}</div>
              <div className="text-sm text-gray-600 mt-1">Total Cards</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-success">{totalMastered}</div>
              <div className="text-sm text-gray-600 mt-1">Mastered</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-warning">{state.session.streak}</div>
              <div className="text-sm text-gray-600 mt-1">Day Streak</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-12">
            <Link
              to="/decks"
              className="inline-block bg-primary hover:bg-blue-700 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Start Studying
            </Link>
            <div className="mt-4">
              <Link
                to="/stats"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
              >
                <span>📊</span>
                <span>View Your Statistics</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold text-lg mb-2">Comprehensive Content</h3>
              <p className="text-gray-600 text-sm">
                Study building codes, electrical systems, and plumbing basics
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Works Offline</h3>
              <p className="text-gray-600 text-sm">
                Study anywhere, anytime - even without internet connection
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">
                Monitor your learning with confidence ratings and mastery tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
