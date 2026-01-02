import '../styles/ProjectCard.css';

function ProjectCard({title, imgPath, description}) {
    return(
        <>
        <div className="project-card">
            <h2>{title}</h2>
            <img src={imgPath} alt="project-img" className="project-img"/>
            <p className="description">{description}</p>
        </div>
        </>
    );
}

export default ProjectCard