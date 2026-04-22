import myPicture from "../assets/myPic.png";
import '../styles/AboutMe.css';
import data from '../aboutme.json';

function AboutMe() {
    return (
        <>
            {/* <h3>about:me</h3> */}
            <div className="about-layout">

                {/* ── Left column ── */}
                <div className="about-left">
                    <img src={myPicture} alt="Matheus" className="about-photo" />

                    <div className="about-meta">
                        {[
                            { label: 'location', value: data.contact.location },
                            { label: 'email',    value: data.contact.email, href: `mailto:${data.contact.email}` },
                            { label: 'phone',    value: data.contact.phone },
                            { label: 'status',   value: data.availability },
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
                        <span className="block-label">languages</span>
                        <div className="chip-row">
                            {data.languages.map(l => <span key={l} className="chip">{l}</span>)}
                        </div>
                    </div>

                    <div className="about-section-block">
                        <span className="block-label">interests</span>
                        <div className="chip-row">
                            {data.interests.map(i => <span key={i} className="chip">{i}</span>)}
                        </div>
                    </div>
                </div>

                {/* ── Right column ── */}
                <div className="about-right">
                    <div className="about-heading">
                        <h1 className="about-name">{data.name}</h1>
                        <span className="about-title">{data.title}</span>
                    </div>

                    <hr className="about-divider" />

                    <p className="about-summary">{data.summary}</p>

                    <hr className="about-divider" />

                    <div className="about-section">
                        <span className="section-label">education</span>
                        {data.education.map((edu, i) => (
                            <div key={i} className="entry-block">
                                <span className="entry-period">{edu.period} · {edu.location}</span>
                                <span className="entry-title">{edu.degree}</span>
                                <span className="entry-sub">{edu.school}</span>
                            </div>
                        ))}
                    </div>

                    <hr className="about-divider" />

                    <div className="about-section">
                        <span className="section-label">experience</span>
                        {data.experience.map((exp, i) => (
                            <div key={i} className="entry-block">
                                <div className="entry-period-row">
                                    <span className="entry-period">{exp.period}</span>
                                </div>
                                <span className="entry-title">{exp.company}</span>
                                <span className="entry-sub">{exp.title}</span>
                                <p className="entry-desc">{exp.description}</p>
                                {exp.current && <span className="current-badge">current</span>}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutMe;
