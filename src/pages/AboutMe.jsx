import myPicture from "../assets/myPic.png";
import '../styles/AboutMe.css';
import data from '../aboutme.json';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

function AboutMe() {
    const {language} = useLanguage();
    return (
        <>
            <div className="about-layout">

                {/* ── Left column ── */}
                <FadeIn delay={0.1} className="about-left">
                    <img src={myPicture} alt="Matheus" className="about-photo" />

                    <div className="about-meta">
                        {[
                            { label: language == 'US' ? 'location' : 'localização', value: data.contact.location },
                            { label: 'email',    value: data.contact.email, href: `mailto:${data.contact.email}` },
                            { label: language == 'US' ? 'phone' : 'telefone',    value: data.contact.phone[language] },
                            { label: 'status',   value: data.availability[language] },
                        ].map(({ label, value, href }) => (
                            <div key={label} className="meta-group">
                                <span className="meta-label">{label}</span>
                                {href
                                    ? <a className="meta-value meta-link" href={href}>{value}</a>
                                    : <span className="meta-value">{value}</span>
                                }
                            </div>
                        ))}
                    </div>

                    <div className="about-section-block">
                        <span className="block-label">{language == 'US' ? 'languages' : 'línguas'}</span>
                        <div className="chip-row">
                            {data.languages[language].map(l => <span key={l} className="chip">{l}</span>)}
                        </div>
                    </div>

                    <div className="about-section-block">
                        <span className="block-label">{language == 'US' ? 'interests' : 'interesses'}</span>
                        <div className="chip-row">
                            {data.interests[language].map(i => <span key={i} className="chip">{i}</span>)}
                        </div>
                    </div>
                </FadeIn>

                {/* ── Right column ── */}
                <FadeIn delay={0.2} className="about-right">
                    <div className="about-heading">
                        <h1 className="about-name">{data.name}</h1>
                        <span className="about-title">{data.title[language]}</span>
                    </div>

                    <hr className="about-divider" />

                    <p className="about-summary">{data.summary[language]}</p>

                    <hr className="about-divider" />

                    <div className="about-section">
                        <span className="section-label">{language == 'US' ? 'education' : 'educação'}</span>
                        {data.education.map((edu, i) => (
                            <div key={i} className="entry-block">
                                <span className="entry-period">{edu.period} · {edu.location}</span>
                                <span className="entry-title">{edu.degree[language]}</span>
                                <span className="entry-sub">{edu.school}</span>
                            </div>
                        ))}
                    </div>

                    <hr className="about-divider" />

                    <div className="about-section">
                        <span className="section-label">{language == 'US' ? "experience" : "experiência"}</span>
                        {data.experience.map((exp, i) => (
                            <div key={i} className="entry-block">
                                <div className="entry-period-row">
                                    <span className="entry-period">{exp.period[language]}</span>
                                </div>
                                <span className="entry-title">{exp.company}</span>
                                <span className="entry-sub">{exp.title[language]}</span>
                                <p className="entry-desc">{exp.description[language]}</p>
                                {exp.current && <span className="current-badge">{language == 'US' ? 'current':'presente'}</span>}
                            </div>
                        ))}
                    </div>
                </FadeIn>

            </div>
        </>
    );
}

export default AboutMe;
