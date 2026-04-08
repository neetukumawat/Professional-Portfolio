import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleMenu, closeMenu } from '../store/uiSlice';
import { navLinks, personal } from '../utils/data';

export default function Navbar() {
  const dispatch = useDispatch();
  const { menuOpen, activeSection } = useSelector((s) => s.ui);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    dispatch(closeMenu());
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-bg-border/60 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-sm">
                NK
              </span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-text-primary hidden sm:block">
              Neetu<span className="gradient-text">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className={`relative px-4 py-2 text-sm font-display font-medium rounded-lg transition-colors duration-200 ${
                      isActive ? 'text-accent-cyan' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-accent-cyan/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={personal.cvFile}
              download
              className="hidden md:flex btn-primary text-xs px-5 py-2.5"
            >
              <span>Download CV</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => dispatch(toggleMenu())}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-bg-card transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-text-primary origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-0.5 bg-text-primary"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-text-primary origin-center transition-all"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-40 w-72 card-glass border-l border-bg-border flex flex-col pt-24 px-8 gap-3 md:hidden"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(href)}
                className="text-left text-lg font-display font-semibold text-text-secondary hover:text-accent-cyan py-3 border-b border-bg-border/50 transition-colors"
              >
                {label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              href={personal.cvFile}
              download
              className="btn-primary mt-4 justify-center"
            >
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeMenu())}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
