import '../styles/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppBar from '../components/AppBar.jsx';
import coffeeGIF from '../assets/coffee.gif';
import AboutMe from './AboutMe.jsx';

function App() {
  return (
    <>
      <AppBar />

      <div className="padding-section">
        <img src={coffeeGIF} alt="MSL" className="coffeeGIF"/>
        <h1>Hello, I'm Matheus</h1>
        <h2>and I like to code.</h2>

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
          <button className="home-button"><i className="fab fa-linkedin"></i></button>
          <button className="home-button"><i className="fab fa-github"></i></button>
          <button className="home-button"><i className="fas fa-file-pdf"></i></button>
          <button className="home-button"><i className="fab fa-instagram"></i></button>
        </div>
      </div>

      <div className='padding-section'>
        <AboutMe />
      </div>

    </>
  )
}

export default App
