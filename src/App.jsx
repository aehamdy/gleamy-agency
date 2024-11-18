import { useState } from 'react'
import './App.css'
import AboutUsContent from './components/AboutUsContent'
import AboutUsHeading from './components/AboutusHeading'
import Button from './components/Button'
import Header from './components/Header'
import HeroHeading from './components/HeroHeading'
import MarqueeBar from './components/MarqueeBar'
import NavList from './components/NavList'
import OneLetter from './components/OneLetter'
import ProjectCard from './components/ProjectCard'
import Projects from './components/Projects'
import SectionHeading from './components/SectionHeading'
import ServiceCard from './components/ServiceCard'
import Services from './components/Services'
import SpecialitiesBar from './components/SpecialitiesBar'
import SpinningLogo from './components/SpinningLogo'
import WatchVideoButton from './components/WatchVideoButton'

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const handleNavVisibility = () => {
    setIsNavExpanded(prevValue => !prevValue);
  }

  return (
    <>
  <NavList isNavExpanded={isNavExpanded} />
  <div className="flex flex-col">
  <Header />
  {/* <MarqueeBar textColor="white-fa" bgColor="gray-21" /> */}
  {/* <MarqueeBar textColor="gray-21" bgColor="white-fa" /> */}
  {/* <SectionHeading text="about us" /> */}
  {/* <Projects /> */}
  </div>
    </>
)
}

export default App
