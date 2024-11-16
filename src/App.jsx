import './App.css'
import Header from './components/Header'
import SpecialitiesBar from './components/SpecialitiesBar'
import SpinningLogo from './components/SpinningLogo'

function App() {
  return (
  <div className="flex flex-col">
  <Header />
  <SpinningLogo />
  <SpecialitiesBar />
  </div>
)
}

export default App
