import '../styles/ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function formalize(tool) {
    return (tool[0].toUpperCase() + tool.slice(1)).replace(/[-_]/g, ' ');
}

function ProjectCard({ title, imgPath, description, tools, gitLink, liveLink, ...props }) {
    return (
        <div className="project-card" {...props}>
            <img src={imgPath} alt={title} className="project-img" />

            <div className="project-body">
                <div className="project-header">
                    <span className="project-title">{title}</span>
                    <div className="project-links">
                        {gitLink && (
                            <a href={gitLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="project-description">{description}</p>

                <div className="project-tools">
                    {tools.map(tool => (
                        <span key={tool} className="tool-chip">{formalize(tool)}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
