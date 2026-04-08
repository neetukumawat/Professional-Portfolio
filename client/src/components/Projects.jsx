import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { setProjectFilter } from '../store/uiSlice';
import { projects, allFilters } from '../utils/data';

function ProjectCard({ project, index }) {
  const { title, description, tags, emoji, gradient, accent, sourceCode, liveDemo, featured } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group animated-border card-glass rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-black/30 transition-all duration-500"
    >
      {/* Project visual header */}
      <div className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${accent}55 1px, transparent 1px), linear-gradient(90deg, ${accent}55 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        {/* Emoji icon */}
        <motion.span
          whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
          className="text-5xl relative z-10 select-none"
        >
          {emoji}
        </motion.span>

        {/* Featured badge */}
        {featured && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-mono font-medium bg-black/40 backdrop-blur-sm"
            style={{ color: accent, borderColor: `${accent}44`, border: '1px solid' }}>
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
   <div className="flex flex-col flex-1 p-6 bg-bg-card">
  <h3 className="font-display font-bold !text-[#F0F0FF] text-lg mb-2 group-hover:text-accent-cyan transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex gap-3 pt-4 border-t border-bg-border">
          <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors font-mono"
          >
            <FiGithub size={14} />
            Source Code
          </a>
          {liveDemo && liveDemo !== '#' && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono ml-auto transition-colors"
              style={{ color: accent }}
            >
              Live Demo
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((s) => s.ui.activeProjectFilter);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase()));

  return (
    <section id="projects" className="relative py-28">
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-green/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">Projects</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            A collection of projects I've crafted — from polished UIs to full-stack web apps.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => dispatch(setProjectFilter(filter))}
              className={`relative px-5 py-2 rounded-xl text-sm font-display font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-bg-primary'
                  : 'text-text-secondary hover:text-text-primary border border-bg-border hover:border-accent-cyan/30'
              }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FFF)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-text-muted py-20 font-mono"
          >
            No projects found for this filter.
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-text-muted text-sm mb-4 font-mono">
            // more projects on GitHub
          </p>
          <a
            href="https://github.com/neetukumawat"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
