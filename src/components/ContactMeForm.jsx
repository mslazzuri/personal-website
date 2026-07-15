import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactMeForm.css';
import { useLanguage } from '../context/LanguageContext';

function ContactMeForm() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    const { language } = useLanguage();

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
                        <label htmlFor="first-name">{language == 'US' ? "First Name" : "Nome"}</label>
                        <input type="text" name="first_name" id="first-name" required />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="last-name">{language == 'US' ? "Last Name" : "Sobrenome"}</label>
                        <input type="text" name="last_name" id="last-name" required />
                    </div>
                </div>
                
                <div className="form-field">
                    <label htmlFor="service">{language == 'US' ? "Service" : "Serviço"}</label>
                    <select name="service" id="service" required>
                        <option value="">{language == 'US' ? "Select a service" : "Selecione um serviço"}</option>
                        <option value="web-development">{language == 'US' ? "Web Development" : "Desenvolvimento Web"}</option>
                        <option value="consulting">{language == 'US' ? "Consulting" : "Consulta"}</option>
                        <option value="other">{language == 'US' ? "Other" : "Outro"}</option>
                    </select>
                </div>
                
                <div className="form-field">
                    <label htmlFor="email">{language == 'US' ? "Email (required)" : "Email (obrigatório)"}</label>
                    <input type="email" name="user_email" id="email" required />
                </div>
                
                <div className="form-field">
                    <label htmlFor="message">{language == 'US' ? "Message" : "Mensagem"}</label>
                    <textarea name="message" id="message" rows="3" required></textarea>
                </div>
                
                {submitStatus === 'success' && (
                    <p className="success-message">Message sent successfully! I'll get back to you soon.</p>
                )}
                
                {submitStatus === 'error' && (
                    <p className="error-message">Failed to send message. Please try again or email me directly.</p>
                )}
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? language == 'US' ? "Submiting..." : "Enviando..." : language == 'US' ? "Submit" : "Enviar"}
                </button>
            </form>
        </>
    )
}

export default ContactMeForm