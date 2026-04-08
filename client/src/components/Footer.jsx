import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personal, navLinks } from '../utils/data';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FiGithub, href: personal.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-bg-border/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">NP</span>
              </div>
              <span className="font-display font-bold text-text-primary">
                Neetu Kumawat
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              MERN Stack Developer crafting scalable web applications from Jaipur, Rajasthan.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-secondary text-sm hover:text-accent-cyan transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p className="text-text-secondary text-sm">{personal.email}</p>
              <p className="text-text-secondary text-sm">{personal.location}</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-bg-border flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-bg-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs font-mono">
          <span>© {year} Neetu Kumawat. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <FiHeart size={11} className="text-red-400" /> using MERN Stack
          </span>
        </div>
      </div>
    </footer>
  );
}
