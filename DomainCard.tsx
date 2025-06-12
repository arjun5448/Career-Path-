import React from 'react';
import { ChevronRight, TrendingUp, DollarSign } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Domain } from '../data/domains';

interface DomainCardProps {
  domain: Domain;
  darkMode: boolean;
  onClick: () => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({ domain, darkMode, onClick }) => {
  const IconComponent = Icons[domain.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
          : 'bg-white/70 border-gray-200 hover:border-gray-300'
      } backdrop-blur-sm`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${domain.color} text-white`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
        </div>

        {/* Title & Description */}
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {domain.title}
        </h3>
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {domain.description}
        </p>

        {/* Stats */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {domain.marketGrowth}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-blue-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {domain.avgSalaryRange}
            </span>
          </div>
        </div>

        {/* Roles Count */}
        <div className="mt-4 pt-4 border-t border-gray-700/20">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            darkMode
              ? 'bg-gray-700 text-gray-300'
              : 'bg-gray-100 text-gray-600'
          }`}>
            {domain.roles.length || 'Coming Soon'} {domain.roles.length === 1 ? 'Role' : 'Roles'}
          </span>
        </div>
      </div>
    </div>
  );
};