import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FileText, Code, Lightbulb, BookOpen, Maximize2, X } from 'lucide-react';
import { activities, periodColors, periodTextColors, periodBgColors } from '../data/activities';

export function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activity = activities.find((a) => a.id === id);

  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-12 text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-slate-300 mb-4">Activity not found</h2>
          <button
            onClick={() => navigate('/activities')}
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const activeDoc = activity.documents[activeDocIndex];
  const hasMultipleDocs = activity.documents.length > 1;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate('/activities')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/15 border border-sky-500/40 text-sky-400 hover:bg-sky-500/25 hover:border-sky-400 hover:text-sky-300 font-medium transition-all duration-200 mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${periodBgColors[activity.period]} ${periodTextColors[activity.period]}`}>
              {activity.period} Period
            </span>
            <span className="text-slate-500 text-sm">{activity.type}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {activity.title}
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl">{activity.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {activity.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT: Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${periodColors[activity.period]}`}>
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-100">Reflection</h2>
              </div>

              {activity.reflection ? (
                <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                  {activity.reflection}
                </p>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Lightbulb className="w-12 h-12 text-slate-600 mb-3" />
                  <p className="text-slate-500 text-sm">
                    Reflection coming soon
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT: Document Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="glass-card overflow-hidden flex flex-col" style={{ minHeight: '600px' }}>
              {/* Tab Bar / Header */}
              <div className="flex items-center border-b border-slate-700/60">
                {/* Tabs (multi-doc) or label (single doc) */}
                <div className="flex flex-1">
                  {hasMultipleDocs ? (
                    activity.documents.map((doc, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDocIndex(i)}
                        className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-colors border-b-2 ${
                          activeDocIndex === i
                            ? `border-current ${periodTextColors[activity.period]} bg-slate-800/50`
                            : 'border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {doc.isNotebook ? (
                          <BookOpen className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                        {doc.label}
                      </button>
                    ))
                  ) : (
                    <div className="flex items-center gap-2 px-5 py-3.5">
                      {activeDoc.isNotebook ? (
                        <Code className={`w-4 h-4 ${periodTextColors[activity.period]}`} />
                      ) : (
                        <FileText className={`w-4 h-4 ${periodTextColors[activity.period]}`} />
                      )}
                      <span className={`text-sm font-medium ${periodTextColors[activity.period]}`}>
                        {activeDoc.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="flex items-center gap-1.5 mx-3 px-3 py-1.5 rounded-md bg-slate-700/50 hover:bg-slate-600/60 text-slate-400 hover:text-slate-200 text-xs font-medium transition-all duration-200"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Fullscreen
                </button>
              </div>

              {/* iframe */}
              <iframe
                key={activeDoc.link}
                src={activeDoc.link}
                className="w-full flex-1"
                style={{ minHeight: '550px' }}
                title={`${activity.title} – ${activeDoc.label}`}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-700/60 flex-shrink-0">
              <div className="flex items-center gap-2">
                {hasMultipleDocs ? (
                  activity.documents.map((doc, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveDocIndex(i)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeDocIndex === i
                          ? `${periodTextColors[activity.period]} bg-slate-800`
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {doc.isNotebook ? <BookOpen className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      {doc.label}
                    </button>
                  ))
                ) : (
                  <span className={`text-sm font-medium ${periodTextColors[activity.period]}`}>
                    {activeDoc.label}
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-700/50 hover:bg-red-500/20 hover:text-red-400 text-slate-400 text-sm font-medium transition-all duration-200"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>

            {/* Fullscreen iframe */}
            <iframe
              key={`fs-${activeDoc.link}`}
              src={activeDoc.link}
              className="w-full flex-1"
              title={`${activity.title} – ${activeDoc.label} (fullscreen)`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
