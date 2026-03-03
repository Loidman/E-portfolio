import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Code } from 'lucide-react';
import { useState } from 'react';

export function ActivitiesPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const projects = [
    {
      title: 'Professional Article',
      description: 'A comprehensive professional article exploring key concepts and insights in the field.',
      techStack: ['Research', 'Technical Writing', 'Analysis'],
      link: `${import.meta.env.BASE_URL}Professional Article - Bernardo, Luke Joaquin.pdf`,
      type: 'Academic Writing',
      isNotebook: false
    },
    {
      title: 'PT-P2: Iris Classification with kNN',
      description: 'Implementation of K-Nearest Neighbors algorithm for Iris species classification including model training, evaluation, and comprehensive data visualization.',
      techStack: ['Python', 'scikit-learn', 'Machine Learning', 'Data Visualization'],
      link: `${import.meta.env.BASE_URL}PT-P2/PT-P2 - BERNARDO, Luke Joaquin.pdf`,
      type: 'Machine Learning Project',
      isNotebook: false
    },
    {
      title: 'PT-P2: Iris Classification (Notebook)',
      description: 'Interactive Jupyter notebook with executable code for K-Nearest Neighbors implementation on the Iris dataset, including step-by-step analysis and visualizations.',
      techStack: ['Jupyter', 'Python', 'scikit-learn', 'Interactive'],
      link: `${import.meta.env.BASE_URL}PT-P2/PT_P2_BERNARDO,_Luke_Joaquin.html`,
      type: 'Jupyter Notebook',
      isNotebook: true
    },
    {
      title: 'PT-P3: Real Estate Price Prediction',
      description: 'Complete machine learning pipeline for predicting real estate prices, featuring data cleaning, preprocessing, and regression modeling with extensive feature engineering.',
      techStack: ['Python', 'Pandas', 'Data Preprocessing', 'Regression'],
      link: `${import.meta.env.BASE_URL}PT-P3/PT_P3_BERNARDO,_Luke_Joaquin.pdf`,
      type: 'Machine Learning Project',
      isNotebook: false
    },
    {
      title: 'PT-P3: Real Estate Prediction (Notebook)',
      description: 'Interactive Jupyter notebook for real estate price prediction with live code execution, data exploration, and model development workflow.',
      techStack: ['Jupyter', 'Pandas', 'Regression', 'Interactive'],
      link: `${import.meta.env.BASE_URL}PT-P3/PT_P3_BERNARDO,_Luke_Joaquin.html`,
      type: 'Jupyter Notebook',
      isNotebook: true
    },
    {
      title: 'WW-P2: Customer Data Cleaning Pipeline',
      description: 'Comprehensive data cleaning and preprocessing pipeline implementing outlier handling, feature engineering, normalization, and categorical encoding for customer analytics.',
      techStack: ['Python', 'Data Cleaning', 'Feature Engineering', 'Data Preprocessing'],
      link: `${import.meta.env.BASE_URL}WW-P2/BERNARDO WW2-datacleaning.pdf`,
      type: 'Data Engineering',
      isNotebook: false
    },
    {
      title: 'WW-P2: Data Cleaning Pipeline (Notebook)',
      description: 'Interactive Jupyter notebook demonstrating the complete data cleaning workflow with executable code cells and inline visualizations.',
      techStack: ['Jupyter', 'Pandas', 'Data Cleaning', 'Interactive'],
      link: `${import.meta.env.BASE_URL}WW-P2/BERNARDO_WW2_datacleaning.html`,
      type: 'Jupyter Notebook',
      isNotebook: true
    },
    {
      title: 'Revised kNN IEEE Report',
      description: 'Addendum activity document providing detailed analysis and documentation for the K-Nearest Neighbors algorithm implementation and research findings.',
      techStack: ['Technical Writing', 'IEEE Format', 'Research Documentation'],
      link: `${import.meta.env.BASE_URL}Revised kNN IEEE Report/Addendum Activity - BERNARDO, Luke Joaquin.pdf`,
      type: 'Academic Documentation',
      isNotebook: false
    }
  ];

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

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedPdf(project.link)}
              className="glass-card p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  project.isNotebook 
                    ? 'bg-gradient-to-br from-green-500 to-teal-600' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-600'
                }`}>
                  {project.isNotebook ? (
                    <Code className="w-6 h-6 text-white" />
                  ) : (
                    <FileText className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-100">
                {project.title}
              </h3>
              
              <p className="text-sm text-blue-400 mb-3">
                {project.type}
              </p>
              
              <p className="text-slate-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPdf(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Close PDF viewer"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* PDF Viewer */}
              <iframe
                src={selectedPdf}
                className="w-full h-full"
                title="PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
