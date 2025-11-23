import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileTextIcon, ClipboardListIcon, FileCheckIcon, HelpCircleIcon, ExternalLinkIcon, XIcon } from 'lucide-react';

interface Activity {
  title: string;
  thumbnail: string;
  file?: string;
  type: 'activity' | 'quiz' | 'exam' | 'assignment' | 'seatwork' | 'lab';
}

interface TermActivities {
  activities: Activity[];
  quizzes: Activity[];
  exams: Activity[];
  assignments: Activity[];
  seatwork: Activity[];
  labs: Activity[];
}

export function ActivitiesPage() {
  const [activeTerm, setActiveTerm] = useState<'prelim' | 'midterm' | 'final'>('prelim');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [showZoomHint, setShowZoomHint] = useState(true);

  const terms = [{
    id: 'prelim' as const,
    label: 'Prelim Term'
  }, {
    id: 'midterm' as const,
    label: 'Midterm Term'
  }, {
    id: 'final' as const,
    label: 'Final Term'
  }];

  const activitiesData: Record<'prelim' | 'midterm' | 'final', TermActivities> = {
    prelim: {
      activities: [
        { title: 'Activity 1', thumbnail: '/activities/prelim/Prelim Act 1.png', file: '/activities/prelim/PRELIM ACTIVITY NO1_BERNARDO_LUKE JOAQUIN.xlsx', type: 'activity' },
        { title: 'Activity 2', thumbnail: '/activities/prelim/Prelim Act 2.png', file: '/activities/prelim/PrelimActivityNo2-CleaningData_BERNARDO_LukeJoaquin.xlsx', type: 'activity' }
      ],
      quizzes: [
        { title: 'Quiz 1', thumbnail: '/activities/prelim/Prelim Quiz 1.png', type: 'quiz' },
        { title: 'Quiz 2', thumbnail: '/activities/prelim/Prelim Quiz 2.png', type: 'quiz' }
      ],
      exams: [
        { title: 'Prelim Exam', thumbnail: '/activities/prelim/Prelim Exam.png', type: 'exam' }
      ],
      assignments: [],
      seatwork: [],
      labs: []
    },
    midterm: {
      activities: [
        { title: 'Activity 1', thumbnail: '/activities/midterm/Midterm Act 1.png', type: 'activity' },
        { title: 'Activity 2', thumbnail: '/activities/midterm/Midterm Act 2.png', file: '/activities/midterm/Midterm Act 2 - Freq Distribution Graph - BERNARDO, Luke Joaquin.xlsx', type: 'activity' },
        { title: 'Activity 3', thumbnail: '/activities/midterm/Midterm Act 3.png', type: 'activity' },
        { title: 'Activity 4', thumbnail: '/activities/midterm/Midterm Act 4.png', type: 'activity' }
      ],
      quizzes: [
        { title: 'Quiz 1', thumbnail: '/activities/midterm/Midterm Quiz 1.png', type: 'quiz' },
        { title: 'Quiz 2', thumbnail: '/activities/midterm/Midterm Quiz 2.png', type: 'quiz' }
      ],
      exams: [
        { title: 'Midterm Exam', thumbnail: '/activities/midterm/Midterm Exam.png', type: 'exam' }
      ],
      assignments: [
        { title: 'Using Pivot Table', thumbnail: '/activities/midterm/Midterm Assignment_UsingPivotTable_BERNARDO (1).pdf', file: '/activities/midterm/Midterm Assignment_UsingPivotTable_BERNARDO (1).pdf', type: 'assignment' },
        { title: 'Probability Activity', thumbnail: '/activities/midterm/ProbabilityActivity - BERNARDO, Luke Joaquin (1).pdf', file: '/activities/midterm/ProbabilityActivity - BERNARDO, Luke Joaquin (1).pdf', type: 'assignment' }
      ],
      seatwork: [
        { title: 'Seatwork 1', thumbnail: '/activities/midterm/Midterm Seatwork 1.png', file: '/activities/midterm/Midterm Seatwork No.1_Charts and Sparklines - Bernardo, Luke Joaquin.xlsx', type: 'seatwork' },
        { title: 'Seatwork 2', thumbnail: '/activities/midterm/Midterm Seatwork 2.png', type: 'seatwork' }
      ],
      labs: [
        { title: 'Lab 1 - Car Sale', thumbnail: '/activities/midterm/Car Sale Lab1_Bernardo, Luke Joaquin (1).xlsx', file: '/activities/midterm/Car Sale Lab1_Bernardo, Luke Joaquin (1).xlsx', type: 'lab' },
        { title: 'Lab 2 - Car Sale', thumbnail: '/activities/midterm/Car Sale Lab2_Bernardo, Luke Joaquin (1).xlsx', file: '/activities/midterm/Car Sale Lab2_Bernardo, Luke Joaquin (1).xlsx', type: 'lab' },
        { title: 'Creating Charts', thumbnail: '/activities/midterm/Midterm Lab Activity 1_ Creating Charts_Bernardo, Luke Joaquin 1.xlsx', file: '/activities/midterm/Midterm Lab Activity 1_ Creating Charts_Bernardo, Luke Joaquin 1.xlsx', type: 'lab' }
      ]
    },
    final: {
      activities: [
        { title: 'Activity 1', thumbnail: '/activities/finals/Finals Act 1.png', file: '/activities/finals/FinalTermActivityNo.1 - PythonListTuples_BERNARDO, Luke Joaquin (1).pdf', type: 'activity' },
        { title: 'Activity 2', thumbnail: '/activities/finals/Finals Act 2.png', file: '/activities/finals/FinalTerm Activity No.2_PythonListTupple - BERNARDO, Luke Joaquin.pdf', type: 'activity' },
        { title: 'Activity 3', thumbnail: '/activities/finals/Finals Act 3.png', type: 'activity' }
      ],
      quizzes: [
        { title: 'Quiz 1', thumbnail: '/activities/finals/Finals Quiz 1.png', type: 'quiz' },
        { title: 'Quiz 2', thumbnail: '/activities/finals/Finals Quiz 2.png', type: 'quiz' }
      ],
      exams: [
        { title: 'Finals Exam', thumbnail: '/activities/finals/Finals Exam.png', type: 'exam' }
      ],
      assignments: [
        { title: 'Python MatPlotLib', thumbnail: '/activities/finals/Finalterm Assignment_PythonMatPlotLib_BERNARDO (1).pdf', file: '/activities/finals/Finalterm Assignment_PythonMatPlotLib_BERNARDO (1).pdf', type: 'assignment' }
      ],
      seatwork: [
        { title: 'Seatwork 1', thumbnail: '/activities/finals/Finals Seatwork 1.png', type: 'seatwork' },
        { title: 'Database Certification Survey', thumbnail: '/activities/finals/Finals Seatwork Database Certification Survey.png', type: 'seatwork' },
        { title: 'Data Certification Report', thumbnail: '/activities/finals/Finals Seatwork Data Certification Report.png', file: '/activities/finals/ITS-DATABASE CERTIFICATION EXAM REPORT - BERNARDO, Luke Joaquin (1).pdf', type: 'seatwork' }
      ],
      labs: []
    }
  };

  const currentActivities = activitiesData[activeTerm];

  const categories = [
    {
      icon: ClipboardListIcon,
      title: 'Activities',
      items: currentActivities.activities
    },
    {
      icon: HelpCircleIcon,
      title: 'Quizzes',
      items: currentActivities.quizzes
    },
    {
      icon: FileCheckIcon,
      title: 'Exams',
      items: currentActivities.exams
    },
    {
      icon: FileTextIcon,
      title: 'Assignments',
      items: currentActivities.assignments
    },
    {
      icon: FileTextIcon,
      title: 'Seatwork',
      items: currentActivities.seatwork
    },
    {
      icon: FileTextIcon,
      title: 'Labs',
      items: currentActivities.labs
    }
  ].filter(cat => cat.items.length > 0);

  return <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Class Activities
          </h1>
          <p className="text-lg text-gray-600">
            Organized coursework across academic terms
          </p>
          <motion.div initial={{
          width: 0
        }} animate={{
          width: 96
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Term Selector with Animated Indicator */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl shadow-sm border border-gray-200 p-1 relative">
            {terms.map(term => <motion.button key={term.id} onClick={() => setActiveTerm(term.id)} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className={`relative px-6 py-3 rounded-lg font-medium transition-colors z-10 ${activeTerm === term.id ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                {term.label}
              </motion.button>)}
            <motion.div layoutId="activeTermBg" className="absolute bg-blue-600 rounded-lg shadow-md" style={{
            left: activeTerm === 'prelim' ? '0.25rem' : activeTerm === 'midterm' ? 'calc(33.33% + 0.125rem)' : 'calc(66.66% + 0.125rem)',
            width: 'calc(33.33% - 0.25rem)',
            top: '0.25rem',
            bottom: '0.25rem'
          }} transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30
          }} />
          </div>
        </motion.div>

        {/* Categories Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTerm} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => <motion.div key={category.title} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.1,
            duration: 0.4
          }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: 5
              }} className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category.items.length} items
                    </p>
                  </div>
                </div>

                <motion.div variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }} initial="hidden" animate="visible" className="space-y-3">
                  {category.items.map((item, i) => <motion.div key={i} variants={{
                hidden: {
                  opacity: 0,
                  x: -10
                },
                visible: {
                  opacity: 1,
                  x: 0
                }
              }} whileHover={{
                scale: 1.02,
                borderColor: '#3b82f6',
                backgroundColor: '#eff6ff'
              }} whileTap={{
                scale: 0.98
              }} transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20
              }} onClick={() => setSelectedActivity(item)}
              className="group border-2 border-gray-200 rounded-lg p-4 cursor-pointer overflow-hidden">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors truncate">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Click to view
                          </p>
                        </div>
                        <ExternalLinkIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                      </div>
                    </motion.div>)}
                </motion.div>
              </motion.div>)}
          </motion.div>
        </AnimatePresence>

        {/* Activity Modal */}
        <AnimatePresence>
          {selectedActivity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (isImageZoomed) {
                  setIsImageZoomed(false);
                  setShowZoomHint(true);
                } else {
                  setSelectedActivity(null);
                  setIsImageZoomed(false);
                  setShowZoomHint(true);
                }
              }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            >
              {!isImageZoomed ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedActivity.title}</h3>
                    <button
                      onClick={() => {
                        setSelectedActivity(null);
                        setIsImageZoomed(false);
                        setShowZoomHint(true);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <XIcon className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    <div className="relative">
                      <img
                        src={selectedActivity.thumbnail}
                        alt={selectedActivity.title}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsImageZoomed(true);
                          setShowZoomHint(false);
                        }}
                        onMouseEnter={() => setShowZoomHint(true)}
                        className="w-full rounded-lg shadow-lg cursor-zoom-in"
                      />
                      <AnimatePresence>
                        {showZoomHint && !isImageZoomed && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-4 w-full flex justify-center pointer-events-none"
                          >
                            <div className="bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm">
                              Click to zoom fullscreen
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {selectedActivity.file && (
                      <div className="mt-6 flex gap-3">
                        {selectedActivity.file.endsWith('.pdf') ? (
                          <>
                            <a
                              href={selectedActivity.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                              <ExternalLinkIcon className="w-5 h-5" />
                              View PDF
                            </a>
                            <a
                              href={selectedActivity.file}
                              download
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                            >
                              <ExternalLinkIcon className="w-5 h-5" />
                              Download
                            </a>
                          </>
                        ) : selectedActivity.file.endsWith('.xlsx') ? (
                          <>
                            <a
                              href={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(window.location.origin + selectedActivity.file)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                              <ExternalLinkIcon className="w-5 h-5" />
                              View Excel
                            </a>
                            <a
                              href={selectedActivity.file}
                              download
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                            >
                              <ExternalLinkIcon className="w-5 h-5" />
                              Download
                            </a>
                          </>
                        ) : (
                          <a
                            href={selectedActivity.file}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                          >
                            <ExternalLinkIcon className="w-5 h-5" />
                            Download File
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 overflow-auto"
                  onClick={() => setIsImageZoomed(false)}
                >
                  <img
                    src={selectedActivity.thumbnail}
                    alt={selectedActivity.title}
                    className="max-w-full max-h-full object-contain cursor-zoom-out"
                    onClick={() => setIsImageZoomed(false)}
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>;
}