import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
    const { language } = useLanguage();
    return (
        <>
            <FadeIn><h3>{language == 'US' ? "projects" : "projetos"}</h3></FadeIn>
            <FadeIn delay={0.1}>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            id={project.id}
                            title={project.name[language]}
                            imgPath={project.imgPath}
                            description={project.description[language]}
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
