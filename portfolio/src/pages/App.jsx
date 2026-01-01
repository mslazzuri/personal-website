import '../styles/App.css';
import AppBar from '../components/AppBar.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import ContactMe from './ContactMe.jsx';


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
      
      <div id='projects' className='padding-section'>
        <Projects />
      </div>
      
      <div id='skills' className='padding-section'>
        <Skills />
      </div>
      
      <div id='contact' className='padding-section'>
        <ContactMe />
      </div>
    </>
  )
}

export default App
