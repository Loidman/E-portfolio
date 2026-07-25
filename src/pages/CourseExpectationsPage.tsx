import { motion } from 'framer-motion';
import { Target, Brain, MessageSquare, BookOpen } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const exercises = [
  {
    label: 'A',
    icon: Brain,
    color: 'sky',
    question:
      'Identify and describe a specific business problem that can be addressed using deep learning-based predictive models. First, explain the nature and impact of the business problem. Then, discuss how deep learning can be applied to solve it, including strategies for addressing the "black box" challenge to improve the transparency, interpretability, and trustworthiness of the model\'s predictions.',
    answer: [
      'Reading through the deep learning study, the part that grabbed me was customer churn. It\'s such a simple idea when you think about it, customers just leaving for someone else, but the numbers around it caught me off guard. Keeping five percent more customers around can bump profits up by a huge amount. I hadn\'t really thought about how much money is riding on just noticing when someone\'s about to walk away.',
      'What got me curious is how deep learning actually catches this. Companies have all this messy data sitting around, call logs, usage history, complaints, and most of it probably just goes unused. A deep learning model can dig through that mess and find patterns a person would never spot on their own. The study mentioned a churn model that hit almost 78 percent accuracy, better than the random forest method it was compared against. That made me want to know more about what makes deep learning better at this than older methods.',
      'But then there\'s the black box problem, and honestly this is the part that stuck with me the most. The model can say "this customer is probably leaving" but it can\'t really explain why. That\'s kind of unsettling if you\'re the one making decisions based on it. I liked the CoPilot example from the reading, where the system only sends an answer straight to the customer if it\'s confident enough, otherwise a human checks it first. That feels like a smart middle ground. Pairing that kind of confidence check with tools that show which factors mattered most, and keeping a person involved for anything big, seems like the way to actually trust these predictions instead of just hoping they\'re right.',
    ],
  },
  {
    label: 'B',
    icon: MessageSquare,
    color: 'violet',
    question:
      'Discuss how modern organizations are using advanced Natural Language Processing (NLP) models to develop intelligent, context-aware conversational systems that can dynamically adapt to diverse user characteristics, communication styles, and learning needs in real time.',
    answer: [
      'The NLP reading made me realize how much chatbots have changed, and honestly I didn\'t expect that. I always pictured them as those clunky bots that just repeat a script no matter what you type. Reading about ELIZA back in the day confirmed that early ones really were just pattern matching, nothing close to understanding you.',
      'What really caught my attention was the DigitalGenius example. AutoPilot handles the boring repetitive questions, but CoPilot is the one that stuck with me, since it drafts an answer, checks how confident it is, and only sends it straight through if it\'s sure enough. Otherwise a human looks at it first. I liked that the system keeps learning from those corrections, so it actually gets sharper the more it\'s used instead of staying stuck the same way forever.',
      'Seeing this same pattern show up in education got me even more interested. Chatbots being used for tutoring makes sense once you think about it, since every student learns differently, and a system that can pick up on how someone\'s interacting with it can adjust instead of giving the same response to everyone. That\'s honestly the part that excites me most about NLP right now, the idea that a system can read the room, so to speak, and shift how it responds based on the person it\'s talking to. It makes me wonder how far that adaptability can actually go.',
    ],
  },
  {
    label: 'C',
    icon: BookOpen,
    color: 'emerald',
    question: 'Course Expectations',
    answer: [
      'Going through these two readings honestly gave me a lot to think about heading into ITC-C508. I didn\'t expect deep learning and NLP to show up in this many places once you start looking, and it made the whole field feel a lot more real than just something you read about in a textbook.',
      'The black box problem is probably what stuck with me the most. I want to actually understand how to make these models more transparent, because a prediction doesn\'t mean much if nobody can explain where it came from. I\'m hoping this course gets into that more, since it feels like one of those things you only really get by building and testing it yourself.',
      'The conversational AI side got me thinking too, especially since my group is working on our NLP capstone project right now, which uses sentence transformers to help with accreditation preparedness. Seeing how systems like CoPilot pick up on context and adjust their responses made me curious about how we could apply that same kind of thinking to what we\'re building. So this course feels less like something to just get through and more like something that connects directly to what we\'re already working on.',
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string; badgeBg: string; divider: string }> = {
  sky:     { bg: 'bg-sky-500/10',     border: 'border-sky-500/25',     icon: 'text-sky-400',     badge: 'text-sky-300',     badgeBg: 'bg-sky-500/10 border-sky-500/20',     divider: 'bg-sky-500/20' },
  violet:  { bg: 'bg-violet-500/10',  border: 'border-violet-500/25',  icon: 'text-violet-400',  badge: 'text-violet-300',  badgeBg: 'bg-violet-500/10 border-violet-500/20',  divider: 'bg-violet-500/20' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', icon: 'text-emerald-400', badge: 'text-emerald-300', badgeBg: 'bg-emerald-500/10 border-emerald-500/20', divider: 'bg-emerald-500/20' },
};

export function CourseExpectationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl mb-6"
          >
            <Target className="w-10 h-10 text-sky-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-6xl font-bold mb-5 leading-tight"
          >
            Course{' '}
            <span className="gradient-text">Expectations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            A personal reflection on what I aim to gain, achieve, and contribute throughout this course — setting clear intentions for meaningful learning.
          </motion.p>
        </div>
      </section>

      {/* Exercise Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 mb-2 flex items-center gap-4"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-lg">
          Exercise #WW-P1
        </span>
        <div className="flex-1 h-px bg-slate-700/50" />
      </motion.div>

      {/* Exercise Items */}
      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-10">
        {exercises.map((item, index) => {
          const c = colorMap[item.color];
          return (
            <motion.div
              key={item.label}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card overflow-hidden"
            >
              {/* Card header */}
              <div className={`flex items-center gap-4 px-8 pt-8 pb-6 border-b border-slate-700/40`}>
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-md border ${c.badgeBg} ${c.badge} font-mono`}>
                    {item.label}
                  </span>
                  <h2 className="text-slate-200 font-semibold text-base leading-snug">
                    {item.question}
                  </h2>
                </div>
              </div>

              {/* Answer */}
              <div className="px-8 py-7 space-y-4">
                <p className={`text-xs font-mono uppercase tracking-widest ${c.icon} mb-5`}>Answer</p>
                {item.answer.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-slate-300 leading-normal text-[0.975rem] text-justify break-words [text-align-last:left]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
