import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ActivityDetailPage } from './pages/ActivityDetailPage';
import { ReflectionsPage } from './pages/ReflectionsPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
function AnimatedRoutes() {
  const location = useLocation();
  return <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <HomePage />
            </motion.div>} />
        <Route path="/about" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <AboutPage />
            </motion.div>} />
        <Route path="/activities" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <ActivitiesPage />
            </motion.div>} />
        <Route path="/activities/:id" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <ActivityDetailPage />
            </motion.div>} />
        <Route path="/reflections" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <ReflectionsPage />
            </motion.div>} />
        <Route path="/resume" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <ResumePage />
            </motion.div>} />
        <Route path="/contact" element={<motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
              <ContactPage />
            </motion.div>} />
      </Routes>
    </AnimatePresence>;
}
export function App() {
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);

  useEffect(() => {
    setShowUpdateNotice(true);
  }, []);

  return <HashRouter>
      <div className="min-h-screen flex flex-col">
        <AnimatePresence>
          {showUpdateNotice && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
              <motion.div initial={{
            opacity: 0,
            y: 20,
            scale: 0.97
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} exit={{
            opacity: 0,
            y: 16,
            scale: 0.98
          }} transition={{
            duration: 0.25
          }} className="w-full max-w-2xl glass-card p-6 md:p-8 border-sky-500/30 shadow-2xl shadow-sky-500/20">
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-sky-400 mb-2">Update</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">Message to Sir Raga</h2>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <p>Good day, Sir Raga,</p>
                  <p>I hope you're having a productive week.</p>
                  <p>I would like to update you on the changes I've made to my E-portfolio. I have moved my Professional Article to the homepage for better visibility; it was previously located under the projects page.</p>
                  <p>Additionally, all of my preliminary submissions are now organized within the Projects tab. Each task is clickable, leading directly to the actual submission and my corresponding reflection.</p>
                  <p>Thank you for your time and guidance.</p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button onClick={() => setShowUpdateNotice(false)} className="btn-primary px-5 py-2.5">
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
        <Navigation />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>;
}