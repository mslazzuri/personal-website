import "../styles/Skills.css";
import skills from '../skills.json';
import FadeIn from '../components/FadeIn';

const skillsData = skills[0];

const iconMap = {
    'C':          'c',
    'C++':        'c++',
    'Python':     'python',
    'JavaScript': 'javascript',
    'React.JS':   'react',
    'Dart':       'dart',
    'Flutter':    'flutter',
    'HTML':       'html',
    'Firebase':   'firebase',
    'Git':        null,
    'GitHub':     null,
    'Three.JS':   'threejs',
    'CSS':        'css',
    'Supabase':   'supabase',
};

function getIcon(skill) {
    const key = iconMap[skill];
    if (!key) return null;
    return new URL(`../assets/icons/${key}.png`, import.meta.url).href;
}

const allSkills = Object.values(skillsData).flat().filter(Boolean);

function Skills() {
    return (
        <>
            <FadeIn><h3>skills</h3></FadeIn>
            <FadeIn delay={0.1}>
                <div className="skills-icon-grid">
                    {allSkills.map(skill => {
                        const icon = getIcon(skill);
                        return (
                            <div key={skill} className="skill-tile">
                                <div className="skill-icon-box">
                                    {icon
                                        ? <img src={icon} alt={skill} className="skill-icon-img" />
                                        : <span className="skill-icon-placeholder">{skill.slice(0, 2).toUpperCase()}</span>
                                    }
                                </div>
                                <span className="skill-name">{skill}</span>
                            </div>
                        );
                    })}
                </div>
            </FadeIn>
        </>
    );
}

export default Skills;
