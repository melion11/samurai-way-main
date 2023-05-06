import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.nav__item}>
                    <NavLink to={'/profile'} activeClassName={s.activeLink} className={s.nav__link}>
                        Profile</NavLink>
                </li>

                <li className={s.nav__item}>
                    <NavLink to={'/dialogs'} activeClassName={s.activeLink} className={s.nav__link}>
                        Messages</NavLink>
                </li>

                <li className={s.nav__item}>
                    <NavLink to={'/news'} activeClassName={s.activeLink} className={s.nav__link}>
                        News</NavLink>
                </li>

                <li className={s.nav__item}>
                    <NavLink to={'/music'} activeClassName={s.activeLink} className={s.nav__link}>
                        Music</NavLink>
                </li>

                <li className={s.nav__item}>
                    <NavLink to={'/settings'} activeClassName={s.activeLink} className={s.nav__link}>
                        Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}