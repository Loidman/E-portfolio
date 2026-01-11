import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, Github, Linkedin, Mail, Code2, Database, Palette, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('lukebernardo@example.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const techStack = [
    'PHP', 'Java', 'JavaScript', 'HTML', 'Python', 'MySQL', 'Git', 'Node.js'
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building responsive, scalable applications with modern frameworks'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Optimizing database performance and implementing efficient data pipelines'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive, accessible interfaces with focus on user experience'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Value Statement */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-20 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y1, opacity: useTransform(scrollY, [0, 300], [0.5, 0]) }} 
          className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" 
        />

        <motion.div 
          style={{ opacity }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-sky-500/50 shadow-2xl shadow-sky-500/20 ring-4 ring-slate-800/50">
              <img 
                src="profile.jpg" 
                alt="Luke Joaquin Bernardo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Value Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Full-Stack Developer</span>
              <br />
              <span className="text-slate-200">& Problem Solver</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-light"
          >
            Building <span className="text-sky-400 font-semibold">scalable web solutions</span> with modern technologies.
            <br />
            Turning complex problems into elegant, user-friendly applications.
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm text-slate-300 font-mono hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link to="/activities">
              <button className="btn-primary group">
                View My Work
                <ArrowRightIcon className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary">
                Get In Touch
              </button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a 
              href="https://github.com/Loidman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-sky-500 hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-sky-400 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/luke-joaquin-bernardo-587381364/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-sky-500 hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-sky-400 transition-colors" />
            </a>
            <button 
              onClick={copyEmail}
              className="relative p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-sky-500 hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-sky-400 transition-colors" />
              {emailCopied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs rounded-md whitespace-nowrap">
                  Email copied!
                </span>
              )}
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-8 h-8 text-slate-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Bring</span> to the Table
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(56, 189, 248, 0.15)' }}
              className="glass-card p-8 group"
            >
              <div className="mb-6 inline-flex p-4 bg-sky-500/10 rounded-xl group-hover:bg-sky-500/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link to="/contact">
            <button className="btn-primary text-lg px-8 py-4">
              Start a Conversation
              <ArrowRightIcon className="inline-block ml-2 w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
