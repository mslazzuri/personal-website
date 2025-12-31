import { useState } from 'react';
import '../styles/AppBar.css'

function AppBar () {
    return (
        <>
            <div className='appbar-container'>
                <div className='msl-logo'>MSL</div>
                <nav className='links'>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#">about:me</a>
                    </li>
                    <li>
                        <a href="#">projects</a>
                    </li>
                    <li>
                        <a href="#">contact:me</a>
                    </li>
                </nav>
            </div>
            
        </>
    );
}

export default AppBar