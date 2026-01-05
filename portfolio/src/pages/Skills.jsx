import "../styles/Skills.css";
import skills from '../skills.json';
import { p } from "framer-motion/client";

function Skills() {
    const skillsData = skills[0];
    const history = skills[1];

    function formalize(text) {
        let formalized = text[0].toUpperCase();
        formalized += text.slice(1);
        return formalized.replace(/[-_]/g, ' ');
    }

    return (
        <>
            <h3>skills</h3>
            
            <div className="skills-page-divided-pannel">
                <div className="left-side">
                    <div className="skills-sections">
                        {Object.entries(skillsData).map(([sectionTitle, sectionSkills]) => (
                            <div key={sectionTitle} className="skill-section">
                                <div className='section-title'>{formalize(sectionTitle)}</div>
                                <div 
                                    className="skills-list"
                                    style={{gridTemplateColumns: `repeat(${sectionSkills.length % 10}, 1fr)`}}
                                >
                                    {sectionSkills.map((skill, index) => (
                                        skill && <p key={index} className="skill-item">{skill}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-side">
                    {
                        Object.entries(history).map(([paragraph, text]) => (
                            <p>{text}</p>
                        ))}
                </div>
            </div> 
        </>
    );
}

export default Skills