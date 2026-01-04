import '../styles/ProjectCard.css';

function ProjectCard({title, imgPath, description, tools}) {
    
    function mapTool(tool) {
        return new URL(`../assets/icons/${tool}.png`, import.meta.url).href;
    }

    function formalize(tool) {
        let formalized = tool[0].toUpperCase();
        formalized += tool.slice(1);
        return formalized.replace(/[-_]/g, ' ');
    }
    
    return(
        <>
        <div className="project-card">
            <img src={imgPath} alt="project-img" className="project-img"/>
            <div className='project-title'>{title}</div>
            <p className="description">{description}</p>
            <div className='tools-used'>
                {tools.map((tool) => (
                    <>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            padding: "5px",
                            gap: "5px",
                            fontSize: "8pt"

                        }}>
                        <img src={mapTool(tool)} className='tool' />
                        <p>{formalize(tool)}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
        </>
    );
}

export default ProjectCard