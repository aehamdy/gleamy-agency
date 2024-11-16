import './App.css'
import Header from './components/Header'
import HeroHeading from './components/HeroHeading'
import MarqueeBar from './components/MarqueeBar'
import SpecialitiesBar from './components/SpecialitiesBar'
import SpinningLogo from './components/SpinningLogo'
import WatchVideoButton from './components/WatchVideoButton'

function App() {
  return (
  <div className="flex flex-col">
  <Header />
  <SpinningLogo />
  <SpecialitiesBar />
  <HeroHeading />
  {/* <MarqueeBar textColor="white-fa" bgColor="gray-21" /> */}
  {/* <MarqueeBar textColor="gray-21" bgColor="white-fa" /> */}
  <WatchVideoButton />
  </div>
)
}

export default App
