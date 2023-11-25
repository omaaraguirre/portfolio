import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Techs from './components/Techs'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  AOS.init()

  return (
    <>
      <Header />
      <HeroSection />
      <Techs />
      <Projects />
      <Contact />
    </>
  )
}

export default App
