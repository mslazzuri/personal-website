import '../styles/ContactMeForm.css';

function ContactMeForm() {

    return (
        <>
            <form className="form">
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" />
                    </div>
                </div>
                
                <div className="form-field">
                    <label htmlFor="service">Service</label>
                    <select name="service" id="service">
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="form-field">
                    <label htmlFor="email">Email (required)</label>
                    <input type="email" name="email" id="email" required />
                </div>
                
                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="3"></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </>
    )
}

export default ContactMeForm