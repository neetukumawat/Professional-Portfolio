import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import useScrollSpy from '../hooks/useScrollSpy';

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function Home() {
  useScrollSpy(SECTIONS);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
