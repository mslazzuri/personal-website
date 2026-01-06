import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactMeForm.css';

function ContactMeForm() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            console.log('Attempting to send email...');
            const result = await emailjs.sendForm(
                'service_8vl0ceu',
                'template_d4teuvh',
                form.current,
                'dFxMb7SM4o3V45Fy2'
            );
            
            console.log('Email sent successfully:', result);
            setSubmitStatus('success');
            form.current.reset();
        } catch (error) {
            console.error('Email sending failed:', error);
            console.error('Error details:', {
                text: error.text,
                status: error.status,
                message: error.message
            });
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form ref={form} className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first_name" id="first-name" required />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last_name" id="last-name" required />
                    </div>
                </div>
                
                <div className="form-field">
                    <label htmlFor="service">Service</label>
                    <select name="service" id="service" required>
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="form-field">
                    <label htmlFor="email">Email (required)</label>
                    <input type="email" name="user_email" id="email" required />
                </div>
                
                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="3" required></textarea>
                </div>
                
                {submitStatus === 'success' && (
                    <p className="success-message">Message sent successfully! I'll get back to you soon.</p>
                )}
                
                {submitStatus === 'error' && (
                    <p className="error-message">Failed to send message. Please try again or email me directly.</p>
                )}
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </>
    )
}

export default ContactMeForm