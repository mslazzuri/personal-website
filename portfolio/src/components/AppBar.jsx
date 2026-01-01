import { useState } from 'react';
import '../styles/AppBar.css'

function AppBar () {
    return (
        <>
            <div className='appbar-container'>
                <div className='msl-logo'>MSL</div>
                <nav className='links'>
                    <li>
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">about:me</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#contact">contact:me</a>
                    </li>
                </nav>
            </div>
            
        </>
    );
}

export default AppBar