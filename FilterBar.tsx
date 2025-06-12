import React from 'react';
import { Filter, SortAsc, BarChart3 } from 'lucide-react';

interface FilterBarProps {
  darkMode: boolean;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  darkMode,
  selectedDifficulty,
  setSelectedDifficulty,
  sortBy,
  setSortBy
}) => {
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const sortOptions = [
    { value: 'title', label: 'Name' },
    { value: 'salary', label: 'Salary' },
    { value: 'difficulty', label: 'Difficulty' }
  ];

  return (
    <div className={`sticky top-16 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900/80 border-gray-800' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Difficulty Filter */}
          <div className="flex items-center space-x-2">
            <Filter className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Difficulty:
            </span>
            <div className="flex space-x-1">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedDifficulty === difficulty
                      ? 'bg-blue-500 text-white'
                      : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <SortAsc className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-3 py-1 rounded-lg text-sm border transition-colors duration-200 ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-2 ml-auto">
            <BarChart3 className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              12 Domains • 80+ Roles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};