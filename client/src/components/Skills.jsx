import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillGroups } from '../utils/data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-body text-text-secondary group-hover:text-text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-28">
      {/* Background orb */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-cyan/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="section-label justify-center">
            <span>Technical Skills</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            A full-stack toolkit refined through hands-on projects — from pixel-perfect frontends to production-grade APIs.
          </p>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillGroups.map(({ category, icon, color, skills }) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="animated-border card-glass rounded-2xl p-7 hover:shadow-2xl transition-shadow duration-500 group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${color}18`, border: `1px solid ${color}33` }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-base">{category}</h3>
                  <p className="text-text-muted text-xs font-mono">{skills.length} skills</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={color}
                    inView={inView}
                    delay={0.3 + i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tech strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 card-glass rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <span className="text-text-muted text-sm font-mono tracking-wider uppercase">
              Also experienced with
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Axios', 'Mongoose', 'JWT Auth', 'bcryptjs', 'dotenv',
              'Nodemon', 'CORS', 'React Router', 'React Hooks',
              'CSS Flexbox', 'CSS Grid', 'Framer Motion',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-xs font-mono text-text-secondary border border-bg-border hover:border-accent-cyan/40 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
