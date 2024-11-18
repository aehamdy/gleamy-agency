import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import NavList from '../components/NavList'

function LandingPage() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavVisibility = () => {
    setIsNavExpanded(prevValue => !prevValue);
  }

  return (
    <>
  <NavList isNavExpanded={isNavExpanded} />
  <div className="flex flex-col">
  <Header isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />
  </div>
    </>
)
}

export default LandingPage;
