import { motion } from 'framer-motion';
import { FileText, Code, ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { activities, periodOrder, periodColors, periodTextColors, periodBgColors } from '../data/activities';

export function ActivitiesPage() {
  const navigate = useNavigate();

  const grouped = periodOrder.map((period) => ({
    period,
    items: activities.filter((a) => a.period === period),
  }));

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400">
            Click any project to view the task and reflection
          </p>
        </motion.div>

        {/* Period Sections */}
        <div className="space-y-14">
          {grouped.map(({ period, items }, sectionIndex) => (
            <motion.section
              key={period}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.15 }}
            >
              {/* Period Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-px flex-1 bg-gradient-to-r ${periodColors[period]} opacity-40`} />
                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${periodBgColors[period]} ${periodTextColors[period]}`}>
                  {period} Period
                </span>
                <div className={`h-px flex-1 bg-gradient-to-l ${periodColors[period]} opacity-40`} />
              </div>

              {/* Activity Cards */}
              <div className="grid gap-5 sm:grid-cols-2">
                {items.map((activity, index) => {
                  const hasNotebook = activity.documents.some((d) => d.isNotebook);
                  const hasDoc = activity.documents.some((d) => !d.isNotebook);

                  return (
                    <motion.button
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(56,189,248,0.12)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/activities/${activity.id}`)}
                      className="glass-card p-6 text-left w-full cursor-pointer group transition-shadow"
                    >
                      {/* Icon row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${periodColors[period]}`}>
                          {hasNotebook ? (
                            <Code className="w-6 h-6 text-white" />
                          ) : (
                            <FileText className="w-6 h-6 text-white" />
                          )}
                        </div>

                        {/* Document type badges */}
                        <div className="flex items-center gap-2">
                          {hasDoc && (
                            <span className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                              <FileText className="w-3 h-3" /> Report
                            </span>
                          )}
                          {hasNotebook && (
                            <span className="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                              <BookOpen className="w-3 h-3" /> Notebook
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-1 text-slate-100 group-hover:text-white transition-colors">
                        {activity.title}
                      </h3>

                      <p className={`text-xs font-medium mb-3 ${periodTextColors[period]}`}>
                        {activity.type}
                      </p>

                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {activity.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {activity.techStack.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {activity.techStack.length > 3 && (
                            <span className="px-2 py-0.5 bg-slate-700/50 text-slate-400 rounded-full text-xs">
                              +{activity.techStack.length - 3}
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors flex-shrink-0" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
