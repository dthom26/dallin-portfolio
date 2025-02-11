
import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Service from './components/service.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
