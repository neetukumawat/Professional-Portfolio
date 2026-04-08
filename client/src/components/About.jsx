import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { personal } from '../utils/data';

const stats = [
  { value: '8+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '100%', label: 'Passion Driven' },
  { value: 'MERN', label: 'Core Stack' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="relative py-28">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text content */}
          <div>
            <motion.div variants={itemVariants} className="section-label">About Me</motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary leading-tight mb-6"
            >
              Building the web,{' '}
              <span className="gradient-text">one layer at a time</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-text-secondary text-lg leading-relaxed mb-5">
              {personal.summary}
            </motion.p>

            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed mb-8">
              I specialize in the MERN stack — crafting everything from polished React interfaces powered 
              by Redux Toolkit to robust Express REST APIs backed by MongoDB. I care deeply about clean 
              architecture, responsive design, and shipping code that scales.
            </motion.p>

            {/* Contact info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 mb-8">
              {[
                { icon: FiMapPin, text: personal.location },
                { icon: FiMail, text: personal.email, href: `mailto:${personal.email}` },
                { icon: FiGithub, text: 'github.com/neetukumawat', href: personal.github },
                { icon: FiLinkedin, text: 'linkedin.com/in/neetu-kumawat', href: personal.linkedin },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-accent-cyan" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-text-secondary text-sm hover:text-accent-cyan transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-text-secondary text-sm">{text}</span>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href={personal.cvFile}
              download
              className="btn-primary inline-flex"
            >
              <FiDownload size={15} />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Right: Stats + Card */}
          <div className="flex flex-col gap-6">
            {/* Avatar card */}
           <motion.div
  variants={itemVariants}
  className="rounded-2xl p-8 relative overflow-hidden"
  style={{
    background: 'linear-gradient(135deg, #0D0D1A 0%, #111120 100%)',
    border: '1px solid rgba(0, 212, 255, 0.15)',
  }}
>
              {/* Code snippet decoration */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>

              <div className="font-mono text-sm leading-relaxed">
                <div className="text-[#6A7FA8] mb-1">// about.js</div>
                <div>
                  <span className="text-accent-purple">const</span>{' '}
                  <span className="text-accent-cyan">developer</span>{' '}
                  <span className="text-text-secondary">= {'{'}</span>
                </div>
                <div className="pl-4 mt-1 space-y-1">
                  <div>
                    <span className="text-accent-green">name</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-yellow-400">"Neetu kumawat"</span>
                    <span className="text-text-secondary">,</span>
                  </div>
                  <div>
                    <span className="text-accent-green">role</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-yellow-400">"MERN Stack Dev"</span>
                    <span className="text-text-secondary">,</span>
                  </div>
                  <div>
                    <span className="text-accent-green">location</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-yellow-400">"Jaipur, RJ"</span>
                    <span className="text-text-secondary">,</span>
                  </div>
                  <div>
                    <span className="text-accent-green">available</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-accent-cyan">true</span>
                    <span className="text-text-secondary">,</span>
                  </div>
                  <div>
                    <span className="text-accent-green">stack</span>
                    <span className="text-text-secondary">: [</span>
                  </div>
                  <div className="pl-4 space-y-0.5">
                    {['MongoDB', 'Express', 'React', 'Node.js'].map((s) => (
                      <div key={s}>
                        <span className="text-yellow-400">"{s}"</span>
                        <span className="text-text-secondary">,</span>
                      </div>
                    ))}
                  </div>
                  <div><span className="text-text-secondary">],</span></div>
                </div>
                <div><span className="text-text-secondary">{'}'}</span></div>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  custom={i}
                  className="card-glass rounded-xl p-5 text-center hover:border-accent-cyan/30 transition-colors duration-300 border border-transparent"
                >
                  <div className="font-display font-extrabold text-3xl gradient-text mb-1">{value}</div>
                  <div className="text-text-muted text-xs font-mono tracking-wider uppercase">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
