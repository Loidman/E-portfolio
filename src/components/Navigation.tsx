import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
export function Navigation() {
  const location = useLocation();
  const navItems = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About Me'
  }, {
    path: '/activities',
    label: 'Class Activities'
  }, {
    path: '/reflections',
    label: 'Reflections'
  }, {
    path: '/resume',
    label: 'Resume'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <motion.nav initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }} className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              LJB
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-1 relative">
            {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return <Link key={item.path} to={item.path} className="relative">
                  <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1,
                duration: 0.4
              }} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                    {item.label}
                    {isActive && <motion.div layoutId="activeNav" className="absolute inset-0 bg-blue-50 rounded-lg -z-10" transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />}
                  </motion.div>
                </Link>;
          })}
          </div>

          <div className="md:hidden">
            <motion.button whileTap={{
            scale: 0.9
          }} className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>;
}