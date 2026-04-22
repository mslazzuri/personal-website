import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';
import FadeIn from '../components/FadeIn';

function Projects() {
    return (
        <>
            <FadeIn><h3>projects</h3></FadeIn>
            <FadeIn delay={0.1}>
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
            </FadeIn>
        </>
    );
}

export default Projects;
