import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, TargetIcon, CodeIcon } from 'lucide-react';
export function AboutPage() {
  return <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <motion.div initial={{
          width: 0
        }} animate={{
          width: 96
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Profile Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 200
          }} whileHover={{
            scale: 1.05,
            rotate: 2
          }} className="flex-shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-blue-200 shadow-lg">
                <img 
                  src="profile.jpg" 
                  alt="Luke Joaquin Bernardo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6
              }
            }} }initial="hidden" animate="visible" className="flex-1">
              <motion.h2 variants={{
              hidden: {
                opacity: 0,
                y: 10
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }} className="text-3xl font-bold text-gray-900 mb-2">
                Luke Joaquin Bernardo
              </motion.h2>
              <motion.p variants={{
              hidden: {
                opacity: 0,
                y: 10
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }} className="text-lg text-blue-600 font-medium mb-6">
                Bachelor of Science in Information Technology
              </motion.p>

              {["I'm an Information Technology student at Jose Rizal University with a strong interest in technology, digital tools, and building structured academic projects. My journey in IT has been driven by curiosity and a desire to understand how technology shapes our world.", "Throughout my studies, I've developed skills in programming, system analysis, and digital problem-solving. I approach each project with attention to detail and a commitment to creating meaningful, well-organized work that demonstrates both technical competence and creative thinking.", "This portfolio represents my academic growth and serves as a comprehensive record of my coursework, reflections, and achievements. I'm continuously learning and expanding my capabilities in the ever-evolving field of information technology."].map((text, i) => <motion.p key={i} variants={{
              hidden: {
                opacity: 0,
                y: 10
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }} className="text-gray-700 leading-relaxed mb-4">
                  {text}
                </motion.p>)}
            </motion.div>
          </div>
        </motion.div>

        {/* Key Areas with Stagger */}
        <motion.div variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }} className="grid md:grid-cols-3 gap-6 mb-8">
          {[{
          icon: GraduationCapIcon,
          title: 'Academic Focus',
          text: 'Pursuing comprehensive knowledge in information systems, software development, and digital technologies at Jose Rizal University.'
        }, {
          icon: CodeIcon,
          title: 'Technical Interests',
          text: 'Passionate about programming, web development, database management, and exploring emerging technologies in the IT landscape.'
        }, {
          icon: TargetIcon,
          title: 'Future Goals',
          text: 'Aiming to build a strong foundation in IT, contribute to meaningful projects, and develop expertise that bridges technology and practical problem-solving.'
        }].map((item, index) => <motion.div key={index} variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }} whileHover={{
          y: -5,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }} transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <motion.div whileHover={{
            scale: 1.1,
            rotate: 5
          }} transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10
          }}>
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>)}
        </motion.div>

        {/* Education Details */}
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
      }} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-sm border border-blue-100 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Jose Rizal University
              </h4>
              <p className="text-blue-600 font-medium">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-gray-600 mt-2">
                Currently pursuing a comprehensive IT degree with coursework in
                programming, systems analysis, database management, networking,
                and software development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
}