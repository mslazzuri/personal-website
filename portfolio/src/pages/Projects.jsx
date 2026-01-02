import React from 'react';
import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';

function Projects() {
    return (
        <>
            My projects
            <div className="project-cards-row">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.name}
                        imgPath={project.imgPath}
                        description={project.description}
                    />
                ))}
            </div>
        </>
    );
}

export default Projects