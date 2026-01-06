import ContactMeForm from '../components/ContactMeForm.jsx';
import '../styles/ContactMe.css';

function ContactMe() {
    return (
        <>
            <h3>contact me</h3>

            
            <div className="contact-container">
                <div className="contact-panels">
                    <div className="left-pannel">
                        <p>Kissimmee, FL</p>
                        <p>2026</p>
                        <br />
                        <br />
                        <p>Available:</p>
                        <p>Monday - Saturday</p>
                        <p>7am - 11pm</p>
                    </div>
                    
                    <div className="right-pannel">
                        <ContactMeForm />
                    </div>
                </div>

                <div className="contact-info">
                    <p>matheussecco2@gmail.com</p>
                    <p>+1 (970) 914-2475</p>
                </div>
            </div>      
            
        </>
    );
}

export default ContactMe