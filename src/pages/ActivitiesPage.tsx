import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export function ActivitiesPage() {
  const projects: Array<{title: string; description: string; techStack: string[]}> = [];

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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400">
            Showcasing my development work and technical solutions
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="glass-card p-12 max-w-md mx-auto">
            <Lightbulb className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-slate-300">Coming Soon</h3>
            <p className="text-slate-400">
              Projects will be added as I continue building and learning
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
