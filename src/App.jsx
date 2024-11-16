import './App.css'
import Header from './components/Header'
import MarqueeBar from './components/MarqueeBar'
import SpecialitiesBar from './components/SpecialitiesBar'
import SpinningLogo from './components/SpinningLogo'

function App() {
  return (
  <div className="flex flex-col">
  <Header />
  <SpinningLogo />
  <SpecialitiesBar />
  <MarqueeBar textColor="white-fa" bgColor="gray-21" />
  <MarqueeBar textColor="gray-21" bgColor="white-fa" />
  </div>
)
}

export default App
