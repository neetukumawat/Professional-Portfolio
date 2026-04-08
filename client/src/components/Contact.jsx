import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { FiSend, FiLoader, FiCheckCircle, FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { submitContactForm, resetContact } from '../store/contactSlice';
import { personal } from '../utils/data';

const initialForm = { name: '', email: '', subject: '', message: '' };

const contactInfo = [
  { icon: FiMapPin, label: 'Location', value: personal.location },
  { icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/neetukumawat', href: personal.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'neetu-kumawat', href: personal.linkedin },
];

export default function Contact() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((s) => s.contact);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(form));
  };

  useEffect(() => {
    if (success) {
      toast.success("Message sent! I'll get back to you soon 🚀");
      setForm(initialForm);
      setTimeout(() => dispatch(resetContact()), 4000);
    }
    if (error) {
      toast.error(error);
      setTimeout(() => dispatch(resetContact()), 4000);
    }
  }, [success, error, dispatch]);

  return (
    <section id="contact" className="relative py-28">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Contact</div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Have a project in mind or want to chat? I'm always open to new opportunities. Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="card-glass rounded-xl p-5 flex items-center gap-4 hover:border-accent-cyan/30 border border-transparent transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-text-secondary text-sm hover:text-accent-cyan transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-text-secondary text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* "Open to" card */}
            <div className="card-glass rounded-xl p-6 border border-accent-green/20 bg-accent-green/3 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-accent-green text-xs font-mono font-semibold tracking-wide">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Currently looking for full-time roles or freelance projects in MERN stack development.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    placeholder="Rahul Sharma"
                    className="input-field"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="rahul@example.com"
                    className="input-field"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-text-muted mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  minLength={5}
                  placeholder="Project collaboration / Job opportunity"
                  className="input-field"
                  disabled={loading}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-text-muted mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="input-field resize-none"
                  disabled={loading}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading || success}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              >
                {loading ? (
                  <>
                    <FiLoader size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : success ? (
                  <>
                    <FiCheckCircle size={16} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-center text-text-muted text-xs font-mono">
                * I'll respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
