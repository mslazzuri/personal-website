import '../styles/App.css';
import AppBar from '../components/AppBar.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';


function App() {
  return (
    <>
      <AppBar />

      <div id='home' className="padding-section">
        <Home />
      </div>

      <div id='about' className='padding-section'>
        <AboutMe />
      </div>

    </>
  )
}

export default App
