import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';
export function ReflectionsPage() {
  const reflections = [{
    term: 'Prelim Term',
    icon: BookOpenIcon,
    color: 'blue',
    text: ' At the beginning of the course, I was introduced to the fundamentals of data science and data analytics, with a particular focus on cleaning data and using basic statistical functions in Excel. Initially, I found it challenging to understand why data cleaning is so critical, but as I practiced filtering, sorting, and handling missing values, I began to appreciate how clean data leads to more accurate analysis. Learning Excel’s formulas and functions not only boosted my confidence in handling datasets but also made me more methodical in how I approach problem-solving with numbers. This foundational experience set the stage for deeper analytical work in the following terms.'
  }, {
    term: 'Midterm Term',
    icon: TrendingUpIcon,
    color: 'green',
    text: 'During the midterm, I advanced to creating visualizations, statistical graphs, and mastering pivot tables in Excel. Visualizing data with charts and dashboards initially seemed overwhelming due to the variety of options and the importance of clarity in presenting information. However, building different charts and experimenting with pivot tables helped me understand patterns and relationships within data more intuitively. A breakthrough moment was successfully summarizing a complex dataset with a pivot table, realizing how quickly insights can be extracted. These skills made data analysis more interactive and showed me the powerful storytelling element of data visualization.'
  }, {
    term: 'Finals Term',
    icon: AwardIcon,
    color: 'purple',
    text: 'In the final term, I transitioned from Excel to Python programming and exploring data analysis libraries like NumPy, pandas, and matplotlib. At first, learning a programming language felt daunting compared to Excel’s visual environment. However, as I progressed, I recognized the flexibility and depth Python offers, especially in handling larger datasets and automating repetitive analysis tasks. Mastering pandas for data manipulation and matplotlib for visualization opened new possibilities, making analysis both faster and more sophisticated. Connecting Python tools with my Excel experience revealed how both platforms complement each other and deepened my understanding of modern data analytics.'
  }];
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

        {/* Summary Card */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Reflection Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Looking back at the semester, I see clear growth in both my technical and analytical abilities. Starting from basic data cleaning in Excel, I built a strong foundation that allowed me to confidently tackle more complex tasks, such as creating dashboards and pivot tables. This paved the way for my leap into Python, where I learned to automate and enhance my data analysis. The progression from Excel basics to advanced Python libraries not only expanded my skill set but also changed the way I think about problem-solving and data-driven decision-making. Every challenge helped me become more adaptable and resourceful, preparing me for future work in the IT and data analytics fields.


          </p>
        </motion.div>
      </div>
    </div>;
}
