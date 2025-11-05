import React from 'react';
import type { ConfidenceLevel } from '../types';

interface ConfidenceButtonsProps {
  onRate: (confidence: ConfidenceLevel) => void;
  disabled?: boolean;
}

export const ConfidenceButtons: React.FC<ConfidenceButtonsProps> = ({ onRate, disabled = false }) => {
  return (
    <div className="flex gap-4 justify-center items-center w-full max-w-2xl mx-auto">
      <button
        onClick={() => onRate('hard')}
        disabled={disabled}
        className="flex-1 bg-danger hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
      >
        <div className="text-2xl mb-1">🔴</div>
        <div className="text-sm">Hard</div>
      </button>

      <button
        onClick={() => onRate('good')}
        disabled={disabled}
        className="flex-1 bg-warning hover:bg-yellow-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
      >
        <div className="text-2xl mb-1">🟡</div>
        <div className="text-sm">Good</div>
      </button>

      <button
        onClick={() => onRate('easy')}
        disabled={disabled}
        className="flex-1 bg-success hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
      >
        <div className="text-2xl mb-1">🟢</div>
        <div className="text-sm">Easy</div>
      </button>
    </div>
  );
};
