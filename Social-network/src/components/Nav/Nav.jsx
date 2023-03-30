import s from'./Nav.module.css'

const Nav = () => {
    return (
        <>
            <nav className={s.nav}>
            <ul>
                <li className={`${s.link} ${s.active}`}><a href="#s"> Profile</a></li>
                <li className={s.link}><a href="#s">Message</a></li>
                <li className={s.link}><a href="#s">News</a></li>
                <li className={s.link}><a href="#s">Music</a></li>
                <li className={s.link}><a href="#s">Settings</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;