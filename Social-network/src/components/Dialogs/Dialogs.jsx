import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <>
            <div className={s.dialogs}>
                <div className={s.messageAuthors}>
                   <div className={s.author}>Vasa</div>
                   <div className={s.author}>Kata</div>
                   <div className={s.author}>Dima</div>
                   <div className={s.author}>Lena</div>
                   <div className={s.author}>Misha</div>
                   <div className={s.author}>Andry</div>
                   <div className={s.author}>Vova</div>
                   <div className={s.author}>Sveta</div>
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