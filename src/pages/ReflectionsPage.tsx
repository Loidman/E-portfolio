import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export function ReflectionsPage() {
  const reflections: Array<{term: string; icon: any; color: string; text: string}> = [];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Academic <span className="gradient-text">Reflections</span>
          </h1>
          <p className="text-xl text-slate-400">
            Insights and growth throughout my learning journey
          </p>
        </motion.div>

        {/* Reflections */}
        {reflections.length > 0 ? (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {reflections.map((reflection, index) => (
              <motion.div
                key={reflection.term}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(56, 189, 248, 0.15)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-8"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 p-4 bg-sky-500/10 rounded-xl"
                  >
                    <reflection.icon className="w-8 h-8 text-sky-400" />
                  </motion.div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-slate-100">
                      {reflection.term}
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {reflection.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="glass-card p-12 max-w-md mx-auto">
              <Lightbulb className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-slate-300">Coming Soon</h3>
              <p className="text-slate-400">
                Academic reflections will be added as I progress through my coursework
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
