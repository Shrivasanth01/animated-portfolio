import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import FloatingNav from "./components/FloatingNav"
import Navbar from "./components/Navbar"
import AnimatedBackground from "./components/AnimatedBackground"
import AnimatedCanvasBackground from "./components/AnimatedCanvasBackground"
import MobileNav from "./components/MobileNav"

export default function App() {
  return (
    <>
  <AnimatedCanvasBackground />
  <Navbar />
  <MobileNav />
  <Hero />
  <Skills />
  <Projects />
  <Education />
  <Contact />
</>
  )
}