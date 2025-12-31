import '@fortawesome/fontawesome-free/css/all.min.css';
import coffeeGIF from '../assets/coffee.gif';
import '../styles/Home.css';

function Home() {
    return (
        <>
            <img src={coffeeGIF} alt="MSL" className="coffeeGIF"/>
            <h1>Hello, I'm Matheus</h1>
            <h2>and I like to code.</h2>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                <a className="home-button" href='http://www.linkedin.com/in/matheuslazzuri' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a className="home-button" href='https://github.com/mslazzuri' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a className="home-button" target="_blank" rel="noopener noreferrer"><i className="fas fa-file"></i></a>
                <a className="home-button" href='https://www.instagram.com/matheus_secco' target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </>
    );
}

export default Home