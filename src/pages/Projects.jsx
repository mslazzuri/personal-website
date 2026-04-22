import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';

function Projects() {
    return (
        <>
            <h3>projects</h3>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        id={project.id}
                        title={project.name}
                        imgPath={project.imgPath}
                        description={project.description}
                        tools={project.tools}
                        gitLink={project.gitLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </>
    );
}

export default Projects;
