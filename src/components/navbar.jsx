// filepath: d:\webdev\web3\portfolio\My_portfolio\src\components\navbar.jsx
import './navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';


export const Navbar = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' && location.hash === '#projects') {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <nav className="navbar">
            <ul className='Navbar-links'>
                <li><Link to="/">Home</Link></li>
                <li>
                {location.pathname === '/' ? (
                        <ScrollLink to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                            Projects
                        </ScrollLink>
                    ) : (
                        <Link to="/#projects" style={{ cursor: 'pointer' }}>
                            Projects
                        </Link>
                    )}
                </li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
            <div className='nav-title'>Portfolio</div>
            <ul className='Navbar-links'>
                <li><a href="https://github.com/Shivamsingh7478" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/shivam-singh-b5b298279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz1QIuqLaRDSRuwy8Ai9gtw%3D%3D" target="_blank">LinkedIn</a></li>
                <li><a href="Instagram">Instagram</a></li>
            </ul>
        </nav>
    );
}