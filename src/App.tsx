
import './App.css'
import Navbar from './container/Navbar'
import HomePage from './container/HomePage'
import AboutPage from './container/AboutPage'
import SkillsPage from './container/SkillsPage'
import ProjectsPage from './container/ProjectsPage'
import ExperiencePage from './container/ExperiencePage'
import ContactPage from './container/ContactPage'
import Footer from './container/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ExperiencePage />
      <ContactPage />
      <Footer />
    </>
  )
}

export default App
