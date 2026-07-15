import '@fortawesome/fontawesome-free/css/all.min.css';
import coffeeGIF from '../assets/coffee.gif';
import '../styles/Home.css';
import { useLanguage } from '../context/LanguageContext';

const INTRODUCTION = {
    US: {
        h1: "Hello, I'm Matheus",
        h2: "and I like to code."
    },
    PT: {
        h1: "Olá, eu sou o Matheus",
        h2: "e eu gosto de programar",
    }
}

function Home() {
    const {language} = useLanguage();
    return (
        <>
            <img src={coffeeGIF} alt="MSL" className="coffeeGIF"/>
            <h1>{INTRODUCTION[language].h1}</h1>
            <h2>{INTRODUCTION[language].h2}</h2>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                <a className="home-button" href='http://www.linkedin.com/in/matheuslazzuri' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a className="home-button" href='https://github.com/mslazzuri' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a className="home-button" href={language == 'US' ? '/portfolio/resume.pdf' : '/portfolio/resume-pt.pdf'} target="_blank" rel="noopener noreferrer"><i className="fas fa-file"></i></a>
                <a className="home-button" href='https://www.instagram.com/matheus_secco' target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </>
    );
}

export default Home