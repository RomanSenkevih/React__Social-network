import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <> 
           <img src="data:image/jpeg;base64,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" alt="картинка заставки" className={s.picture} />
           <ProfileInfo/>
           <MyPosts />
        </>
    )
}

export default Profile;