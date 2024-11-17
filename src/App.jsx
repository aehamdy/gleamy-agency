import './App.css'
import AboutUsHeading from './components/AboutusHeading'
import Header from './components/Header'
import HeroHeading from './components/HeroHeading'
import MarqueeBar from './components/MarqueeBar'
import OneLetter from './components/OneLetter'
import SectionHeading from './components/SectionHeading'
import SpecialitiesBar from './components/SpecialitiesBar'
import SpinningLogo from './components/SpinningLogo'
import WatchVideoButton from './components/WatchVideoButton'

function App() {
  return (
  <div className="flex flex-col">
  <Header />
  <SpinningLogo />
  <SpecialitiesBar />
  {/* <MarqueeBar textColor="white-fa" bgColor="gray-21" /> */}
  {/* <MarqueeBar textColor="gray-21" bgColor="white-fa" /> */}
  {/* <SectionHeading text="about us" /> */}
  <AboutUsHeading />
  <WatchVideoButton />
  </div>
)
}

export default App
