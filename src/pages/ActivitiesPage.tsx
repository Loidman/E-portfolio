import { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { activities, periodOrder, periodColors, periodTextColors, periodBgColors } from '../data/activities';
import { rememberProjectsScrollPosition, restoreProjectsScrollPosition } from '../utils/projectScroll';

export function ActivitiesPage() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    restoreProjectsScrollPosition();
  }, []);

  /* ── Group activities by yearLevel + semester, then by period ── */
  const yearSemesterGroups = (() => {
    const map = new Map<string, typeof activities>();
    activities.forEach((a) => {
      const key = `${a.yearLevel} · ${a.semester}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(a);
    });
    return Array.from(map.entries()).map(([label, items]) => ({
      label,
      periods: periodOrder
        .map((period) => ({
          period,
          items: items.filter((a) => a.period === period),
        }))
        .filter(({ items }) => items.length > 0),
    }));
  })();

  const hasActivities = yearSemesterGroups.some((g) => g.periods.some(({ items }) => items.length > 0));

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

        {/* Year / Semester Sections */}
        {hasActivities ? (
          <div className="space-y-16">
            {yearSemesterGroups.map(({ label, periods }, groupIndex) => (
              <motion.section
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.12 }}
              >
                {/* Period Sub-sections */}
                <div className="space-y-10">
                  {periods.map(({ period, items }, sectionIndex) => (
                    <div key={period}>
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
                              transition={{ duration: 0.4, delay: sectionIndex * 0.1 + index * 0.08 }}
                              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(56,189,248,0.12)' }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                rememberProjectsScrollPosition();
                                navigate(`/activities/${activity.id}`);
                              }}
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
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        ) : (
          <div className="glass-card p-10 text-center">
            <h2 className="text-2xl font-semibold text-slate-100 mb-3">No projects yet</h2>
            <p className="text-slate-400">New project entries will appear here soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

