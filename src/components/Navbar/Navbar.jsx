import React from 'react';
import cNav from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cNav.nav}>
            <div className={`${cNav.item}`}>
                <NavLink to="/profile" activeClassName={cNav.active}>Profile</NavLink>
            </div>
            <div className={cNav.item}>
                <NavLink to="/dialogs" activeClassName={cNav.active}>Messages</NavLink>
            </div>
            <div className={cNav.item}>
                <NavLink to="/news" activeClassName={cNav.active}>News</NavLink>
            </div>
            <div className={cNav.item}>
                <NavLink to="/music" activeClassName={cNav.active}>Music</NavLink>
            </div>
            <div className={cNav.item}>
                <NavLink to="/settings" activeClassName={cNav.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;