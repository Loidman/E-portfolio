import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, CodeIcon, MailIcon, DownloadIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const colorClasses = {
  blue: 'bg-blue-50 text-blue-700',
  green: 'bg-green-50 text-green-700',
  purple: 'bg-purple-50 text-purple-700',
  orange: 'bg-orange-50 text-orange-700'
};

export function ResumePage() {
  return <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h1>
          <p className="text-lg text-gray-600">
            Professional qualifications and experience
          </p>
          <motion.div initial={{
          width: 0
        }} animate={{
          width: 96
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <motion.a 
            href="/Graduate Student .pdf" 
            download="Luke_Joaquin_Bernardo_Resume.pdf" 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            <DownloadIcon className="w-5 h-5" />
            Download Resume
          </motion.a>
        </div>

        {/* Contact Information */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5,
        duration: 0.6
      }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <motion.div 
            variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }} 
            initial="hidden" 
            animate="visible" 
            className="grid md:grid-cols-2 gap-4"
          >
            {[{
            icon: MailIcon,
            text: 'lukejoaquin.bernardo00@gmail.com'
          }, {
            icon: PhoneIcon,
            text: '+63 926 705 4651'
          }, {
            icon: MapPinIcon,
            text: 'Taguig City, Metro Manila, Philippines'
          }].map((item, i) => <motion.div key={i} variants={{
            hidden: {
              opacity: 0,
              x: -10
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} whileHover={{
            x: 5
          }} className="flex items-center gap-3">
                <motion.div whileHover={{
              scale: 1.2,
              rotate: 5
            }}>
                  <item.icon className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-gray-700">{item.text}</span>
              </motion.div>)}
          </motion.div>
        </motion.div>

        {/* Education */}
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
      }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <motion.div whileHover={{
            scale: 1.2,
            rotate: 5
          }}>
              <GraduationCapIcon className="w-6 h-6 text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="border-l-2 border-blue-200 pl-6 ml-3">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-blue-600 font-medium mt-1">
                Jose Rizal University
              </p>
              <p className="text-gray-600 mt-2">Expected Graduation: 2027 </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Comprehensive IT program covering software development, database
                management, networking, systems analysis, and emerging
                technologies. Strong focus on practical application and
                project-based learning.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Academic Projects */}
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
      }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Academic Projects
          </h2>

          <motion.div 
            variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{
              once: true
            }} 
            className="space-y-6"
          >
            {[{
            title: 'PARS: Predictive Analytics and Recommender System for University Accreditation Readiness',
            type: 'Accreditation Readiness Tool',
            desc: 'This website presents PARS, a Predictive Analytics and Recommender System designed to enhance university accreditation readiness. It supports institutions like Jose Rizal University in assessing compliance with ISO 21001 and ISO 9001 standards by identifying performance gaps and offering data-driven recommendations. The platform aims to streamline accreditation processes, promote continuous quality improvement, and improve stakeholder satisfaction in higher education.'
          }].map((project, i) => <motion.div key={i} variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} whileHover={{
            x: 5,
            borderLeftWidth: 6
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-blue-600 text-sm mt-1">{project.type}</p>
                <p className="text-gray-700 mt-2">{project.desc}</p>
              </motion.div>)}
          </motion.div>
        </motion.div>

        {/* Technical Skills */}
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
      }} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <motion.div whileHover={{
            scale: 1.2,
            rotate: 5
          }}>
              <CodeIcon className="w-6 h-6 text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900">
              Technical Skills
            </h2>
          </div>

          <motion.div 
            variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }} 
            } initial="hidden" 
            whileInView="visible" 
            viewport={{
              once: true
            }} 
            className="grid md:grid-cols-2 gap-6"
          >
            {[{
            title: 'Programming Languages',
            skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'],
            color: 'blue'
          }, {
            title: 'Technologies & Tools',
            skills: ['Git', 'React', 'Node.js', 'MySQL', 'HTML/CSS'],
            color: 'green'
          }, {
            title: 'Core Competencies',
            skills: ['Problem Solving', 'System Analysis', 'Database Design', 'Web Development'],
            color: 'purple'
          }, {
            title: 'Soft Skills',
            skills: ['Team Collaboration', 'Communication', 'Time Management', 'Adaptability'],
            color: 'orange'
          }].map((category, i) => <motion.div key={i} variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0
            }
          }}>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => <motion.span key={skill} whileHover={{
                scale: 1.1,
                y: -2
              }} className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[category.color]}`}>
                      {skill}
                    </motion.span>)}
                </div>
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>
    </div>;
}