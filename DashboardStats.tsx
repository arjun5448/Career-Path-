import React, { useEffect, useState } from 'react';
import { Trophy, Target, Calendar, TrendingUp } from 'lucide-react';

interface DashboardStatsProps {
  darkMode: boolean;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ darkMode }) => {
  const [stats, setStats] = useState({
    studyStreak: 0,
    completedPlans: 0,
    totalHours: 0,
    achievements: 0
  });

  useEffect(() => {
    // Load user stats from localStorage
    const savedStats = localStorage.getItem('user-stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const statCards = [
    {
      title: 'Study Streak',
      value: `${stats.studyStreak} days`,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Completed Plans',
      value: stats.completedPlans,
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Study Hours',
      value: `${stats.totalHours}h`,
      icon: Calendar,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Achievements',
      value: stats.achievements,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg ${
            darkMode
              ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
              : 'bg-white/70 border-gray-200 hover:border-gray-300'
          } backdrop-blur-sm`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.title}
              </p>
              <p className={`text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${stat.bgColor} opacity-20`} />
        </div>
      ))}
    </div>
  );
};