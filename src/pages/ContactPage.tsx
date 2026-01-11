import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Send, Copy, Check } from 'lucide-react';

export function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lukejoaquin.bernardo00@gmail.com',
      copyable: true,
      onClick: () => {
        navigator.clipboard.writeText('lukejoaquin.bernardo00@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 926 705 4651',
      copyable: true,
      onClick: () => {
        navigator.clipboard.writeText('+63 926 705 4651');
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Taguig City, Metro Manila, Philippines',
      copyable: false
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luke-joaquin-bernardo-587381364/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Loidman',
      color: 'hover:bg-slate-700'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-100">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 ${
                      item.copyable ? 'cursor-pointer hover:bg-slate-800/50' : ''
                    } transition-colors`}
                    onClick={item.onClick}
                  >
                    <div className="p-2 bg-sky-500/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      <p className="text-slate-200 font-medium break-words text-sm sm:text-base">{item.value}</p>
                    </div>
                    {item.copyable && (
                      <div className="relative">
                        {(item.label === 'Email' ? emailCopied : phoneCopied) ? (
                          <Check className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-slate-400 hover:text-sky-400 transition-colors" />
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-100">Connect With Me</h2>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-slate-800/30 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6 text-slate-300" />
                    <span className="text-slate-200 font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-100">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center glass-card p-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Let's Create Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hello, 
            I'm always excited to connect with fellow developers and potential collaborators.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
