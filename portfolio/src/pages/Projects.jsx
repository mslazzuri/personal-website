import { useRef, useEffect, useState } from 'react';
import ProjectCard from "../components/ProjectCards";
import projects from '../projects.json';
import '../styles/Projects.css';

import { motion, useTransform, useScroll } from 'framer-motion';

function Projects() {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => {
            const first = el.querySelector('.project-card');
            if (!first) return;
            const gap = 15;
            const cardWidth = Math.round(first.getBoundingClientRect().width + gap);
            const idx = Math.round(el.scrollLeft / cardWidth);
            setActive(Math.max(0, Math.min(projects.length - 1, idx)));
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => el.removeEventListener('scroll', onScroll);
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

            {/* Desktop marquee — duplicated items for seamless loop */}
            <div className="project-cards-marquee" aria-hidden="false">
                <div className="marquee-track">
                    {projects.concat(projects).map((project, idx) => (
                        <ProjectCard
                            key={`${project.id}-marquee-${idx}`}
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
            </div>
        
            {/* MOBILE */}
            <div className="project-cards-row mobile-scroll" ref={scrollRef}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
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
            <div className="mobile-dots" role="tablist" aria-label="Projects navigation">
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