import '../styles/App.css';
import AppBar from '../components/AppBar.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Storyline from './Storyline.jsx';
import ContactMe from './ContactMe.jsx';


function App() {
  return (
    <>
      <AppBar />

      <div id='home' className="padding-section">
        <Home />
      </div>
      
      <div style={{
        display: "flex", flexDirection: "column", gap: "150px", padding: "25px"
      }}>
        <div id='storyline'>
          <Storyline />
        </div>

        <div id='projects'>
          <Projects />
        </div>

        <div id='about'>
          <AboutMe />
        </div>

        <div id='skills'>
          <Skills />
        </div>

        <div id='contact'>
          <ContactMe />
        </div>
      </div>
    </>
  )
}

export default App
