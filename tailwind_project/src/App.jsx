import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return( <>
    <Navbar>Navbar</Navbar>
    <Hero></Hero>
    <Skills></Skills>
    <About></About>
    <Projects></Projects>
  </>
  )
}

export default App