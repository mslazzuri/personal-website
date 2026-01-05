import { useRef, useEffect, useState } from 'react';
import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';

function Projects() {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const index = parseInt(entry.target.dataset.index);
                        setActive(index);
                    }
                });
            },
            {
                root: el,
                threshold: 0.5,
            }
        );

        const cards = el.querySelectorAll('.project-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const scrollToIndex = (i) => {
        const el = scrollRef.current;
        if (!el) return;
        const first = el.querySelector('.project-card');
        if (!first) return;
        const gap = 15;
        const cardWidth = first.getBoundingClientRect().width + gap;
        el.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
    };

    return (
        <>
            <h3>projects</h3>

            <div className="project-cards-row" ref={scrollRef}>
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
                        data-index={index}
                    />
                ))}
            </div>
            <div className="index-dots" role="tablist" aria-label="Projects navigation">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === active ? 'active' : ''}`}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to project ${i + 1}`}
                    />
                ))}
            </div>
        </>
    );
}

export default Projects