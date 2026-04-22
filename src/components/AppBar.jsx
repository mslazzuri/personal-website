import { useState, useEffect } from 'react';
import '../styles/AppBar.css';

const navLinks = [
    { href: '#home',      label: 'home' },
    { href: '#storyline', label: 'storyline' },
    { href: '#projects',  label: 'projects' },
    { href: '#about',     label: 'about:me' },
    { href: '#skills',    label: 'skills' },
    { href: '#contact',   label: 'contact:me' },
];

function AppBar() {
    const [activeId, setActiveId]   = useState(null);
    const [drawerOpen, setDrawer]   = useState(false);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('.padding-section[id]'));
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveId(entry.target.id);
            });
        }, { root: null, rootMargin: '-40% 0% -40% 0%', threshold: 0 });

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [drawerOpen]);

    const closeDrawer = () => setDrawer(false);

    return (
        <>
            <div className='appbar-container'>
                <div className='msl-logo'>MSL</div>

                {/* Desktop nav */}
                <nav className='links desktop-nav'>
                    {navLinks.map(({ href, label }) => {
                        const id = href.slice(1);
                        return (
                            <li key={id}>
                                <a href={href} className={activeId === id ? 'active' : ''} aria-current={activeId === id ? 'true' : 'false'}>
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className='hamburger'
                    onClick={() => setDrawer(v => !v)}
                    aria-label="Open navigation"
                    aria-expanded={drawerOpen}
                >
                    <span className={`bar ${drawerOpen ? 'open' : ''}`} />
                    <span className={`bar ${drawerOpen ? 'open' : ''}`} />
                    <span className={`bar ${drawerOpen ? 'open' : ''}`} />
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={`drawer-backdrop ${drawerOpen ? 'visible' : ''}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* Left drawer */}
            <nav className={`drawer ${drawerOpen ? 'drawer-open' : ''}`} aria-label="Mobile navigation">
                <div className='drawer-logo'>MSL</div>
                <ul className='drawer-links'>
                    {navLinks.map(({ href, label }) => {
                        const id = href.slice(1);
                        return (
                            <li key={id}>
                                <a
                                    href={href}
                                    className={activeId === id ? 'active' : ''}
                                    onClick={closeDrawer}
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default AppBar;
