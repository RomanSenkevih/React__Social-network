import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

function MessageAuthors(props) {
   return  <NavLink to={"/dialogs/" + props.thePathToTheFile} className={s.author}>{props.name}</NavLink>
}

function Messages(props) {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <>
            <div className={s.dialogs}>
                <div className={s.messageAuthors}>
                    <MessageAuthors name="Vasa" thePathToTheFile="1" />
                    <MessageAuthors name="Vika" thePathToTheFile="2" />
                    <MessageAuthors name="Roma" thePathToTheFile="3" />
                    <MessageAuthors name="Dima" thePathToTheFile="4" />
                    <MessageAuthors name="Shura" thePathToTheFile="5" />
                </div>
                <div className={s.messages}>
                   <Messages message="Yo" />
                   <Messages message="You ma dog" />
                   <Messages message="hooy world" />
                   <Messages message="red xxx" />
                </div>
            </div>
        </>
    )
}

export default Dialogs;