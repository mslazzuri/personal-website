import ContactMeForm from '../components/ContactMeForm.jsx';
import '../styles/ContactMe.css';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext.jsx';

function ContactMe() {
    const { language } = useLanguage();
    return (
        <>
            <FadeIn><h3>{language == 'US' ? "contact me" : "contato"}</h3></FadeIn>

            <FadeIn delay={0.1}>
                <div className="contact-container">
                    <div className="contact-panels">
                        <div className="left-pannel">
                            <p>Kissimmee, FL</p>
                            <p>2026</p>
                            <br />
                            <br />
                            <p>{language == 'US' ? "Available:" : "Disponibilidade:"}</p>
                            <p>{language == 'US' ? "Monday - Saturday" : "Segunda - Sexta"}</p>
                            <p>{language == 'US' ? "7am - 11pm" : "7h - 23h"}</p>
                        </div>

                        <div className="right-pannel">
                            <ContactMeForm />
                        </div>
                    </div>

                    <div className="contact-info">
                        <p>matheussecco2@gmail.com</p>
                        <p>{language == 'US' ? "+1 (970) 914-2475" : "+55 11 98814-9679"}</p>
                    </div>
                    <div className="references">
                        <a href="http://www.linkedin.com/in/matheuslazzuri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/mslazzuri" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.instagram.com/matheus_secco" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href={language == 'US' ? "/portfolio/resume.pdf" : "/portfolio/resume-pt.pdf"} target="_blank" rel="noopener noreferrer">{language == 'US' ? "Resume" : "Currículo"}</a>
                    </div>
                </div>
            </FadeIn>
        </>
    );
}

export default ContactMe;
