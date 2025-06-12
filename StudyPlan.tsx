import React, { useState } from 'react';
import { Calendar, CheckCircle, Circle, Book, Github, Video, Award } from 'lucide-react';
import { Role } from '../data/domains';

interface StudyPlanProps {
  role: Role;
  darkMode: boolean;
  onClose: () => void;
}

export const StudyPlan: React.FC<StudyPlanProps> = ({ role, darkMode, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'90' | '120'>('90');
  const [completedWeeks, setCompletedWeeks] = useState<Set<number>>(new Set());

  const toggleWeekCompletion = (week: number) => {
    const newCompleted = new Set(completedWeeks);
    if (newCompleted.has(week)) {
      newCompleted.delete(week);
    } else {
      newCompleted.add(week);
    }
    setCompletedWeeks(newCompleted);
    
    // Save to localStorage
    localStorage.setItem(`study-progress-${role.id}`, JSON.stringify(Array.from(newCompleted)));
  };

  const studyPlan = selectedPlan === '90' ? role.studyPlan90 : role.studyPlan120;
  const completionRate = (completedWeeks.size / studyPlan.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border ${
        darkMode
          ? 'bg-gray-900 border-gray-700'
          : 'bg-white border-gray-200'
      }`}>
        {/* Header */}
        <div className={`px-6 py-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {role.title} - Study Plan
              </h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {role.subtype}
              </p>
            </div>
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Close
            </button>
          </div>

          {/* Plan Toggle */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setSelectedPlan('90')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPlan === '90'
                    ? 'bg-blue-500 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                90-Day Plan
              </button>
              <button
                onClick={() => setSelectedPlan('120')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPlan === '120'
                    ? 'bg-blue-500 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                120-Day Plan
              </button>
            </div>

            {/* Progress */}
            <div className="flex items-center space-x-2">
              <div className={`w-24 h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {Math.round(completionRate)}%
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {/* Study Plan Timeline */}
            <div className="space-y-6">
              {studyPlan.map((week, index) => (
                <div
                  key={week.week}
                  className={`relative pl-8 pb-6 ${
                    index !== studyPlan.length - 1 ? 'border-l-2' : ''
                  } ${
                    completedWeeks.has(week.week)
                      ? 'border-green-500'
                      : darkMode
                      ? 'border-gray-700'
                      : 'border-gray-300'
                  }`}
                >
                  {/* Week Marker */}
                  <div
                    className={`absolute -left-3 w-6 h-6 rounded-full border-2 cursor-pointer transition-all ${
                      completedWeeks.has(week.week)
                        ? 'bg-green-500 border-green-500 text-white'
                        : darkMode
                        ? 'bg-gray-900 border-gray-600 text-gray-400 hover:border-gray-500'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}
                    onClick={() => toggleWeekCompletion(week.week)}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      {completedWeeks.has(week.week) ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-bold">{week.week}</span>
                      )}
                    </div>
                  </div>

                  {/* Week Content */}
                  <div className={`${completedWeeks.has(week.week) ? 'opacity-75' : ''}`}>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Week {week.week}: {week.title}
                    </h3>

                    {/* Topics */}
                    <div className="mb-4">
                      <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Topics to Cover:
                      </h4>
                      <ul className="space-y-1">
                        {week.topics.map((topic, idx) => (
                          <li
                            key={idx}
                            className={`text-sm flex items-center space-x-2 ${
                              darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            <Book className="w-3 h-3 text-blue-500" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    {week.projects.length > 0 && (
                      <div className="mb-4">
                        <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Projects:
                        </h4>
                        <ul className="space-y-1">
                          {week.projects.map((project, idx) => (
                            <li
                              key={idx}
                              className={`text-sm flex items-center space-x-2 ${
                                darkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}
                            >
                              <Github className="w-3 h-3 text-green-500" />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Resources */}
                    {week.resources.length > 0 && (
                      <div>
                        <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Resources:
                        </h4>
                        <ul className="space-y-1">
                          {week.resources.map((resource, idx) => (
                            <li
                              key={idx}
                              className={`text-sm flex items-center space-x-2 ${
                                darkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}
                            >
                              <Video className="w-3 h-3 text-purple-500" />
                              <span>{resource}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resources Section */}
            <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Additional Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {role.resources.map((resource, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {resource.title}
                      </h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        resource.free
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                      }`}>
                        {resource.free ? 'Free' : 'Paid'}
                      </span>
                    </div>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {resource.provider}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(resource.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {resource.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};