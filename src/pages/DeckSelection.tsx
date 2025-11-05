import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { useStudy } from '../contexts/StudyContext';
import { decks } from '../data/decks';

export const DeckSelection: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentDeck, getTotalProgress, getMasteredCount } = useStudy();

  const handleDeckSelect = (deckId: string) => {
    setCurrentDeck(deckId);
    navigate(`/study/${deckId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackButton onBack={() => navigate('/')} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose a Deck</h2>
          <p className="text-gray-600 mb-8">Select a topic to begin studying</p>

          <div className="grid md:grid-cols-2 gap-6">
            {decks.map((deck) => {
              const totalCards = deck.cards.length;
              const studiedCards = getTotalProgress(deck.id);
              const masteredCards = getMasteredCount(deck.id);
              const progressPercent = totalCards > 0 ? (studiedCards / totalCards) * 100 : 0;
              const masteredPercent = totalCards > 0 ? (masteredCards / totalCards) * 100 : 0;

              return (
                <div
                  key={deck.id}
                  onClick={() => handleDeckSelect(deck.id)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{deck.icon}</div>
                      <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {deck.category}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {deck.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {deck.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Cards</span>
                        <span className="font-semibold text-gray-900">{totalCards}</span>
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-primary">
                            {Math.round(progressPercent)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Mastered */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Mastered</span>
                          <span className="font-semibold text-success">
                            {masteredCards} / {totalCards}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-success h-full rounded-full transition-all duration-300"
                            style={{ width: `${masteredPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary text-white text-center py-3 font-semibold">
                    Start Studying →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
