import '../styles/ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({title, imgPath, description, tools, gitLink, liveLink, ...props}) {
    
    function mapTool(tool) {
        return new URL(`../assets/icons/${tool}.png`, import.meta.url).href;
    }

    function formalize(tool) {
        let formalized = tool[0].toUpperCase();
        formalized += tool.slice(1);
        return formalized.replace(/[-_]/g, ' ');
    }
    
    return(
        <div className="project-card" {...props}>
            <img src={imgPath} alt="project-img" className="project-img"/>
            <div className='project-title'>
                {title}
                <div className='links-button'>
                    {gitLink && (
                        <a className="github" href={gitLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                    {liveLink && (
                        <a className="livelink" href={liveLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                    )}
                </div>
            </div>
            <p className="description">{description}</p>
            <div className='tools-used'>
                {tools.map((tool) => (
                    <div className='skills-row' key={tool}>
                        <img src={mapTool(tool)} className='tool' alt={tool} />
                        <p style={{fontWeight: "500"}}>{formalize(tool)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard