import s from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className={s.nav}>
            <ul>
                <li className={s.link}><NavLink to="/Profile">Profile</NavLink></li>
                <li className={s.link}><NavLink to="/Dialogs">Message</NavLink></li>
                <li className={s.link}><NavLink to="/News">News</NavLink></li>
                <li className={s.link}><NavLink to="/Music">Music</NavLink></li>
                <li className={s.link}><NavLink to="/Settings">Settings</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;