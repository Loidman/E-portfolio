import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, MailIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a placeholder form.');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">I'd love to hear from you</p>
          <motion.div initial={{
          width: 0
        }} animate={{
          width: 96
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[{
              id: 'name',
              label: 'Your Name',
              type: 'text',
              placeholder: 'John Doe'
            }, {
              id: 'email',
              label: 'Email Address',
              type: 'email',
              placeholder: 'john@example.com'
            }, {
              id: 'subject',
              label: 'Subject',
              type: 'text',
              placeholder: 'How can I help?'
            }].map((field, index) => <motion.div key={field.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5 + index * 0.1,
              duration: 0.5
            }}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <motion.input type={field.type} id={field.id} name={field.id} value={formData[field.id as keyof typeof formData]} onChange={handleChange} onFocus={() => setFocusedField(field.id)} onBlur={() => setFocusedField(null)} animate={{
                borderColor: focusedField === field.id ? '#3b82f6' : '#d1d5db',
                scale: focusedField === field.id ? 1.02 : 1
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder={field.placeholder} required />
                </motion.div>)}

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8,
              duration: 0.5
            }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <motion.textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} animate={{
                borderColor: focusedField === 'message' ? '#3b82f6' : '#d1d5db',
                scale: focusedField === 'message' ? 1.02 : 1
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }} rows={5} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none" placeholder="Your message here..." required />
              </motion.div>

              <motion.button type="submit" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9,
              duration: 0.5
            }} whileHover={{
              scale: 1.03,
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }} whileTap={{
              scale: 0.97
            }} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md">
                <SendIcon className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-sm border border-blue-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

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
            }} initial="hidden" animate="visible" className="space-y-4">
                {[{
                icon: MailIcon,
                title: 'Email',
                text: 'lukejoaquin.bernardo00@gmail.com'
              }, {
                icon: GithubIcon,
                title: 'GitHub',
                link: 'https://github.com/Loidman',
                text: 'github.com/lukebernardo'
              }, {
                icon: LinkedinIcon,
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/luke-joaquin-bernardo-587381364/',
                text: 'linkedin.com/in/lukebernardo'
              }].map((item, i) => <motion.div key={i} variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },
                visible: {
                  opacity: 1,
                  x: 0
                }
              }} whileHover={{
                x: 5
              }} transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }} className="flex items-start gap-4">
                    <motion.div whileHover={{
                  scale: 1.1,
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }} className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        {item.text}
                      </a>
                    </div>
                  </motion.div>)}
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} whileHover={{
            scale: 1.02
          }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm always interested in connecting with fellow students,
                professionals, and anyone interested in technology and IT.
                Whether you have questions about my work, want to collaborate,
                or just want to say hello, feel free to reach out!
              </p>
              <p className="text-gray-700 leading-relaxed">
                I typically respond within 24-48 hours. Looking forward to
                hearing from you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>;
}