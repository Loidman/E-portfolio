import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, GraduationCap, Award } from 'lucide-react';

export function AboutPage() {
  const coreSkills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: '⚡' },
    { name: 'React & Next.js', level: 85, icon: '⚛️' },
    { name: 'Node.js & Express', level: 80, icon: '🟢' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'SQL & NoSQL', level: 75, icon: '🗄️' }
  ];

  const toolsDevOps = [
    'Git & GitHub', 'Docker', 'AWS', 'CI/CD', 'Linux', 'VS Code', 'Postman', 'Figma'
  ];

  const designSkills = [
    'UI/UX Design', 'Responsive Design', 'Tailwind CSS', 'Framer Motion', 'Accessibility', 'Design Systems'
  ];

  const timeline = [
    {
      year: '2010 - 2023',
      title: 'Pateros Catholic School',
      type: 'education',
      description: 'Built a strong academic foundation and developed essential values that prepared me for college. The emphasis on discipline, critical thinking, and holistic education shaped my work ethic.',
      icon: GraduationCap
    },
    {
      year: '2023 - Present',
      title: 'Jose Rizal University',
      type: 'education',
      description: 'Pursuing Bachelor of Science in Information Technology with comprehensive coursework in programming, systems analysis, database management, networking, and software development.',
      icon: GraduationCap
    },
    {
      year: '2024',
      title: 'Data Analytics Specialization',
      type: 'achievement',
      description: 'Completed advanced coursework in data science, statistical analysis, and machine learning. Developed expertise in Excel, Python libraries (NumPy, pandas, matplotlib).',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate IT student combining technical expertise with creative problem-solving
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-sky-500/50 shadow-2xl shadow-sky-500/20 ring-4 ring-slate-800/50">
                <img 
                  src="profile.jpg" 
                  alt="Luke Joaquin Bernardo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-slate-100">
                Luke Joaquin Bernardo
              </h2>
              <p className="text-xl text-sky-400 font-semibold mb-6">
                IT Student & Aspiring Full-Stack Developer
              </p>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm an Information Technology student at Jose Rizal University with a strong passion for building innovative solutions through code. My journey in tech is driven by curiosity and a desire to create meaningful applications that solve real-world problems.
                </p>
                <p>
                  Throughout my academic career, I've developed expertise in <span className="text-sky-400 font-semibold">full-stack development</span>, <span className="text-sky-400 font-semibold">data analytics</span>, and <span className="text-sky-400 font-semibold">UI/UX design</span>. I'm constantly learning and adapting to new technologies in this ever-evolving field.
                </p>
                <p>
                  Beyond coding, I focus on writing clean, maintainable code and creating user-centric designs that prioritize accessibility and performance. I believe great software should be both powerful and intuitive.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>

          {/* Core Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-500/10 rounded-lg">
                <Code2 className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Core Stack</h3>
            </div>
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-200 font-medium flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-sky-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & DevOps */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Tools & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolsDevOps.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Palette className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Design</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {designSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-sky-500/10 rounded-xl">
                      <item.icon className="w-8 h-8 text-sky-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-sm font-mono border border-sky-500/20">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
