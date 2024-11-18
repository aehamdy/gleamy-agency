import { useState } from 'react'
import Header from '../components/Header'
import NavList from '../components/NavList'

function App() {
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

export default App
