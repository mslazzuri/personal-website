import { useState } from 'react';
import '../styles/AppBar.css'
import { useEffect } from 'react';

// AppBar
function AppBar () {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('.padding-section[id]'));
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {root: null, rootMargin: '-40% 0% -40% 0%', threshold: 0});

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <div className='appbar-container'>
            <div className='msl-logo'>MSL</div>
            <nav className='links'>
                <li><a href="#home" className={activeId === 'home' ? 'active' : ''} aria-current={activeId === 'home' ? 'true' : 'false'}>home</a></li>
                <li><a href="#about" className={activeId === 'about' ? 'active' : ''} aria-current={activeId === 'about' ? 'true' : 'false'}>about:me</a></li>
                <li><a href="#projects" className={activeId === 'projects' ? 'active' : ''} aria-current={activeId === 'projects' ? 'true' : 'false'}>projects</a></li>
                <li><a href="#skills" className={activeId === 'skills' ? 'active' : ''} aria-current={activeId === 'skills' ? 'true' : 'false'}>skills</a></li>
                <li><a href="#contact" className={activeId === 'contact' ? 'active' : ''} aria-current={activeId === 'contact' ? 'true' : 'false'}>contact:me</a></li>
            </nav>
        </div>
    );
}

export default AppBar