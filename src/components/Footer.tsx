import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50 mt-20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* About Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="gradient-text">LJB</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                IT Student passionate about building innovative solutions through code.
              </p>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/Loidman"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/luke-joaquin-bernardo-587381364/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="mailto:lukejoaquin.bernardo00@gmail.com"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-slate-200">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Projects', path: '/activities' },
                  { name: 'Resume', path: '/resume' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-8 border-t border-slate-800/50 text-center"
        >
          <p className="text-sm text-slate-400">
            © {currentYear} Luke Joaquin Bernardo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
