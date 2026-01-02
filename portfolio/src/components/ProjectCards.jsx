import '../styles/ProjectCard.css';

function ProjectCard({title, imgPath, description}) {
    return(
        <>
        <div className="project-card">
            <img src={imgPath} alt="project-img" className="project-img"/>
            <div className='project-title'>{title}</div>
            <p className="description">{description}</p>
        </div>
        </>
    );
}

export default ProjectCard