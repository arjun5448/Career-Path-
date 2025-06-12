import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { DashboardStats } from './components/DashboardStats';
import { FilterBar } from './components/FilterBar';
import { DomainCard } from './components/DomainCard';
import { RoleCard } from './components/RoleCard';
import { StudyPlan } from './components/StudyPlan';
import { allDomains, Domain, Role } from './data/domains';

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  
  // Filter state
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('title');

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Filter and search logic
  const filteredDomains = useMemo(() => {
    return allDomains.filter(domain =>
      domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredRoles = useMemo(() => {
    if (!selectedDomain) return [];
    
    let roles = selectedDomain.roles.filter(role => {
      const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.subtype.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDifficulty = selectedDifficulty === 'All' || role.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesDifficulty;
    });

    // Sort roles
    roles.sort((a, b) => {
      switch (sortBy) {
        case 'salary':
          return parseInt(b.avgSalary.replace(/[^0-9]/g, '')) - parseInt(a.avgSalary.replace(/[^0-9]/g, ''));
        case 'difficulty':
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return roles;
  }, [selectedDomain, searchQuery, selectedDifficulty, sortBy]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Header */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Filter Bar */}
      {selectedDomain && (
        <FilterBar
          darkMode={darkMode}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedDomain ? (
          <>
            {/* Dashboard Stats */}
            <DashboardStats darkMode={darkMode} />

            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Your IT Career
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Roadmap Awaits
                </span>
              </h1>
              <p className={`text-xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Discover 12 major IT domains, 80+ specialized roles, and personalized study plans 
                to accelerate your career in technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  🚀 Personalized Learning Paths
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                }`}>
                  📊 Progress Tracking
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700'
                }`}>
                  🎯 Career Guidance
                </div>
              </div>
            </div>

            {/* Domains Grid */}
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Explore IT Domains
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDomains.map((domain) => (
                  <DomainCard
                    key={domain.id}
                    domain={domain}
                    darkMode={darkMode}
                    onClick={() => setSelectedDomain(domain)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Domain Header */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedDomain(null)}
                className={`mb-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                ← Back to Domains
              </button>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedDomain.color}`}>
                  <div className="w-8 h-8 text-white">
                    {/* Icon would go here */}
                  </div>
                </div>
                <div>
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedDomain.title}
                  </h1>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedDomain.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Growth:</span>
                  <span className="font-semibold text-green-500">{selectedDomain.marketGrowth}</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Salary Range:</span>
                  <span className="font-semibold text-blue-500">{selectedDomain.avgSalaryRange}</span>
                </div>
              </div>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  darkMode={darkMode}
                  onClick={() => setSelectedRole(role)}
                />
              ))}
            </div>

            {filteredRoles.length === 0 && (
              <div className="text-center py-12">
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  No roles found matching your criteria.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Study Plan Modal */}
      {selectedRole && (
        <StudyPlan
          role={selectedRole}
          darkMode={darkMode}
          onClose={() => setSelectedRole(null)}
        />
      )}
    </div>
  );
}

export default App;