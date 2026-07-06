import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Trayectoria } from './components/Trayectoria';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-black text-white font-sans selection:bg-acid selection:text-black">
        <Header />
        <Hero />
        <About />
        <Trayectoria />
        <Projects />
        <Expertise />
        <Certifications />
        <Footer />
      </main>
    </MotionConfig>
  );
}

export default App;
