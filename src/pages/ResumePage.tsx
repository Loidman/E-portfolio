import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, GraduationCap, Code } from 'lucide-react';

export function ResumePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Professional qualifications and experience
          </p>

          {/* Download Button */}
          <motion.a
            href="Graduate Student .pdf"
            download="Luke_Joaquin_Bernardo_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Mail, text: 'lukejoaquin.bernardo00@gmail.com' },
              { icon: Phone, text: '+63 926 705 4651' },
              { icon: MapPin, text: 'Taguig City, Metro Manila, Philippines', span: 'md:col-span-2' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg ${item.span || ''}`}
              >
                <item.icon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-sky-500/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-sky-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-sky-500/30 pl-6">
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Jose Rizal University
              </h3>
              <p className="text-sky-400 font-semibold mb-2">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-slate-400 mb-3">2023 - Present</p>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive IT degree with coursework in programming, systems analysis, 
                database management, networking, and software development. Focus on modern 
                web technologies and data analytics.
              </p>
            </div>
            <div className="border-l-2 border-slate-700/30 pl-6">
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Pateros Catholic School
              </h3>
              <p className="text-slate-400 mb-3">2010 - 2023</p>
              <p className="text-slate-300 leading-relaxed">
                Built strong academic foundation with emphasis on discipline, critical thinking, 
                and holistic education that prepared me for higher education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass-card p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <Code className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: 'Programming Languages',
                skills: ['PHP', 'Java', 'JavaScript', 'HTML', 'Python', 'MySQL']
              },
              {
                category: 'Tools & Development',
                skills: ['Git & GitHub', 'Node.js', 'Docker', 'VS Code', 'Figma']
              },
              {
                category: 'Design & UI',
                skills: ['UI/UX Design', 'Responsive Design', 'Tailwind CSS', 'Framer Motion', 'Accessibility', 'Design Systems']
              }
            ].map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-slate-200 mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-md text-sm border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
