import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Palette, Zap, Filter } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      description: 'Modern e-commerce solution with real-time inventory management',
      challenge: 'Handle 10,000+ concurrent users during flash sales without performance degradation',
      solution: 'Implemented Redis caching layer and optimized database queries with proper indexing',
      impact: 'Reduced page load time by 60% and improved checkout conversion rate by 35%',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      image: 'activities/project1.png',
      githubUrl: 'https://github.com/Loidman',
      liveUrl: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Data Science',
      description: 'Real-time analytics platform for business intelligence',
      challenge: 'Process and visualize large datasets (500GB+) with minimal latency',
      solution: 'Built data pipeline using Apache Spark and implemented incremental data loading',
      impact: 'Reduced data processing time from 4 hours to 15 minutes, enabling real-time insights',
      techStack: ['Python', 'Apache Spark', 'MongoDB', 'D3.js', 'Docker'],
      image: 'activities/project2.png',
      githubUrl: 'https://github.com/Loidman'
    },
    {
      title: 'Task Management System',
      category: 'Web Development',
      description: 'Collaborative project management tool with team features',
      challenge: 'Create intuitive drag-and-drop interface with real-time collaboration',
      solution: 'Leveraged WebSocket for real-time updates and React DnD for smooth interactions',
      impact: 'Improved team productivity by 40% with streamlined task tracking',
      techStack: ['React', 'TypeScript', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/Loidman',
      liveUrl: '#'
    },
    {
      title: 'Machine Learning Model',
      category: 'Data Science',
      description: 'Predictive analytics for customer churn prevention',
      challenge: 'Achieve >85% accuracy in predicting customer churn with limited historical data',
      solution: 'Applied ensemble learning techniques and feature engineering to enhance model performance',
      impact: 'Achieved 89% accuracy, helping reduce customer churn by 25%',
      techStack: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Jupyter'],
      githubUrl: 'https://github.com/Loidman'
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Professional developer portfolio with modern UI/UX',
      challenge: 'Design high-end portfolio that stands out while maintaining excellent performance',
      solution: 'Implemented sophisticated dark theme with glassmorphism effects and optimized assets',
      impact: 'Achieved 95+ Lighthouse score across all metrics',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/Loidman/E-portfolio',
      liveUrl: 'https://loidman.github.io/E-portfolio'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code2 },
    { id: 'Full-Stack', label: 'Full-Stack', icon: Zap },
    { id: 'Data Science', label: 'Data Science', icon: Database },
    { id: 'Web Development', label: 'Web Dev', icon: Palette }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing impactful solutions that solve real-world problems through technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 group"
            >
              {/* Project Image/Placeholder */}
              <div className="relative mb-6 rounded-xl overflow-hidden bg-slate-800/50 aspect-video">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-slate-600" />
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg hover:bg-sky-500 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg hover:bg-sky-500 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-sm font-medium border border-sky-500/20">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Challenge/Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Challenge
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed pl-4">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Solution
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed pl-4">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    Impact
                  </h4>
                  <p className="text-sm text-sky-400 font-medium leading-relaxed pl-4">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-xl text-slate-400">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
