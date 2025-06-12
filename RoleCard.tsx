import React from 'react';
import { Star, Clock, DollarSign, BookOpen, PenTool as Tool } from 'lucide-react';
import { Role } from '../data/domains';

interface RoleCardProps {
  role: Role;
  darkMode: boolean;
  onClick: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, darkMode, onClick }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-500 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'Advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
          : 'bg-white/70 border-gray-200 hover:border-gray-300'
      } backdrop-blur-sm`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {role.title}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {role.subtype}
            </p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(role.difficulty)}`}>
            {role.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {role.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {role.avgSalary}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-purple-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {role.studyPlan90.length} weeks
            </span>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mb-4">
          <h4 className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
            Key Skills
          </h4>
          <div className="flex flex-wrap gap-1">
            {role.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-md ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {skill}
              </span>
            ))}
            {role.skills.length > 3 && (
              <span className={`px-2 py-1 text-xs rounded-md ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                +{role.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action */}
        <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
          darkMode
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}>
          View Study Plan
        </button>
      </div>
    </div>
  );
};