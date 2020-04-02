import React from 'react';
import cNav from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={cNav.nav}>
            <div className={`${cNav.item} ${cNav.active}`}><a href="#">Profile</a></div>
            <div className={cNav.item}><a href="#">Messages</a></div>
            <div className={cNav.item}><a href="#">News</a></div>
            <div className={cNav.item}><a href="#">Music</a></div>
            <div className={cNav.item}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar