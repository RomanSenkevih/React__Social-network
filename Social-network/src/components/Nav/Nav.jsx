import s from'./Nav.module.css'

const Nav = () => {
    return (
        <>
            <nav className={s.nav}>
            <ul>
                <li className={`${s.link} ${s.active}`}><a href="/Profile">Profile</a></li>
                <li className={s.link}><a href="/Dialogs">Message</a></li>
                <li className={s.link}><a href="/News">News</a></li>
                <li className={s.link}><a href="/Music">Music</a></li>
                <li className={s.link}><a href="/Settings">Settings</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;