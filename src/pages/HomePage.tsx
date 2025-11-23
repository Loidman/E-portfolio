import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UserIcon, FolderIcon, BookOpenIcon, FileTextIcon, ArrowRightIcon, Linkedin } from 'lucide-react';
export function HomePage() {
  const {
    scrollY
  } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const quickLinks = [{
    to: '/about',
    icon: UserIcon,
    title: 'About Me',
    description: 'Learn about my background and goals'
  }, {
    to: '/activities',
    icon: FolderIcon,
    title: 'Class Activities',
    description: 'View my coursework and projects'
  }, {
    to: '/reflections',
    icon: BookOpenIcon,
    title: 'Reflections',
    description: 'Read my academic journey'
  }, {
    to: '/resume',
    icon: FileTextIcon,
    title: 'Resume',
    description: 'See my qualifications and skills'
  }];
  return <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div style={{
        y: y1
      }} className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-xl" />
        <motion.div style={{
        y: y2
      }} className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl" />

        <motion.div style={{
        opacity
      }} className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{
          scale: 0,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
              <img 
                src="profile.jpg" 
                alt="Luke Joaquin Bernardo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Luke Joaquin Bernardo
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="text-xl text-gray-600 mb-8">
            Information Technology Student | Digital Builder | Academic
            Portfolio
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }} className="flex justify-center gap-4">
            <Link to="/about">
              <motion.button whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }} whileTap={{
              scale: 0.95
            }} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md">
                Explore Portfolio
              </motion.button>
            </Link>
            <a href="https://www.linkedin.com/in/luke-joaquin-bernardo-587381364/" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{
              scale: 1.05,
              backgroundColor: '#0077b5',
              color: '#ffffff'
            }} whileTap={{
              scale: 0.95
            }} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-md border border-blue-200 flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.6
      }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to My E-Portfolio
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This portfolio showcases my academic journey as an Information
            Technology student at Jose Rizal University. Here you'll find my
            coursework, reflections on learning experiences, and documentation
            of my growth in technology and digital tools.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm passionate about building structured, meaningful projects and
            continuously expanding my technical knowledge. Explore the sections
            below to learn more about my work and academic progress.
          </p>
        </motion.div>
      </section>

      {/* Quick Links with Stagger */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 initial={{
        opacity: 0,
        x: -20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-3xl font-bold text-gray-900 text-center mb-12">
          Explore My Work
        </motion.h2>

        <motion.div variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }} className="grid md:grid-cols-2 gap-6">
          {quickLinks.map(link => <motion.div key={link.to} variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }}>
              <Link to={link.to}>
                <motion.div whileHover={{
              scale: 1.03,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              borderColor: '#3b82f6'
            }} whileTap={{
              scale: 0.98
            }} transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20
            }} className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: 5
              }} transition={{
                type: 'spring',
                stiffness: 400,
                damping: 10
              }}>
                    <link.icon className="w-12 h-12 text-blue-600 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </motion.div>
              </Link>
            </motion.div>)}
        </motion.div>
      </section>
    </div>;
}