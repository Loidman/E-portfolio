import { motion } from 'framer-motion';

export function ReflectionsPage() {
  const reflections: Array<{term: string; icon: any; color: string; text: string}> = [];
  const colorClasses = {
    blue: {
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      icon: 'bg-blue-100 text-blue-600',
      accent: 'bg-blue-600'
    },
    green: {
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      icon: 'bg-green-100 text-green-600',
      accent: 'bg-green-600'
    },
    purple: {
      bg: 'from-purple-50 to-purple-100',
      border: 'border-purple-200',
      icon: 'bg-purple-100 text-purple-600',
      accent: 'bg-purple-600'
    }
  };
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
      }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Reflections
          </h1>
          <p className="text-lg text-gray-600">
            Insights and growth across the semester
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

        {/* Reflections with Stagger */}
        <motion.div variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }} initial="hidden" animate="visible" className="space-y-8">
          {reflections.map((reflection, index) => {
          const colors = colorClasses[reflection.color as keyof typeof colorClasses];
          return <motion.div key={reflection.term} variants={{
            hidden: {
              opacity: 0,
              y: 30
            },
            visible: {
              opacity: 1,
              y: 0
            }
          }} whileHover={{
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }} className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8 shadow-sm`}>
                <div className="flex items-start gap-6">
                  <motion.div initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                delay: index * 0.2 + 0.3,
                type: 'spring',
                stiffness: 200
              }} whileHover={{
                scale: 1.1,
                rotate: 5
              }} className={`flex-shrink-0 w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center`}>
                    <reflection.icon className="w-7 h-7" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {reflection.term}
                      </h2>
                      <motion.div initial={{
                    width: 0
                  }} animate={{
                    width: '100%'
                  }} transition={{
                    delay: index * 0.2 + 0.5,
                    duration: 0.6
                  }} className={`h-1 flex-1 ${colors.accent} rounded-full opacity-30`} />
                    </div>

                    <motion.p initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: index * 0.2 + 0.7,
                  duration: 0.6
                }} className="text-gray-700 leading-relaxed text-lg">
                      {reflection.text}
                    </motion.p>
                  </div>
                </div>
              </motion.div>;
        })}
        </motion.div>
      </div>
    </div>;
}
