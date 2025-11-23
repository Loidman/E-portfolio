import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-900 font-medium">Luke Joaquin Bernardo</p>
            <p className="text-gray-600 text-sm">Jose Rizal University</p>
            <p className="text-gray-600 text-sm">
              Bachelor of Science in Information Technology
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a href="https://github.com/Loidman" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.2,
            rotate: 5
          }} whileTap={{
            scale: 0.9
          }} className="text-gray-600 hover:text-blue-600 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/luke-joaquin-bernardo-587381364/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.2,
            rotate: -5
          }} whileTap={{
            scale: 0.9
          }} className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Luke Joaquin Bernardo. All rights
          reserved.
        </motion.div>
      </div>
    </footer>;
}