import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ showBackButton = false, onBack }) => {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {showBackButton ? (
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back</span>
            </button>
          ) : (
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="font-bold text-xl hidden sm:inline">KY Inspector</span>
            </Link>
          )}

          <h1 className="text-lg sm:text-xl font-bold text-center flex-1">
            Kentucky Home Inspector
          </h1>

          <div className="w-20"></div>
        </div>
      </div>
    </header>
  );
};
