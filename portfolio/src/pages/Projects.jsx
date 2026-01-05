import { useRef, useEffect, useState } from 'react';
import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';

function Projects() {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply for faster scrolling
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        scrollRef.current.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            scrollRef.current.style.cursor = 'grab';
        }
    };

    return (
        <>
            <h3>projects</h3>

            <div 
                className="project-cards-row" 
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'grab' }}
            >
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