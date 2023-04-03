import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <>
            <div className={s.dialogs}>
                <div className={s.messageAuthors}>
                   <NavLink to="/dialogs/1" className={s.author}>Vasa</NavLink>
                   <NavLink to="/dialogs/2" className={s.author}>Kata</NavLink>
                   <NavLink to="/dialogs/3" className={s.author}>Dima</NavLink>
                   <NavLink to="/dialogs/4" className={s.author}>Lena</NavLink>
                   <NavLink to="/dialogs/5" className={s.author}>Misha</NavLink>
                   <NavLink to="/dialogs/6" className={s.author}>Andry</NavLink>
                   <NavLink to="/dialogs/7" className={s.author}>Vova</NavLink>
                   <NavLink to="/dialogs/8" className={s.author}>Sveta</NavLink>
                </div>
                <div className={s.messages}>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder c</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public`</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `pu</div>
                   <div className={s.message}>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public`</div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;