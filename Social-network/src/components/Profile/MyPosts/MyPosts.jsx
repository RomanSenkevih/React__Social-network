import s from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div>
                <label for="xxx"><h2>My posts</h2></label>
                <textarea id='xxx' className={s.input} ></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
               <Post messeg='сообщение 1' like='97656787654'/>
               <Post messeg='сообщение 2' like='55'/>
               <Post messeg='сообщение 3' like='88'/>
            </div>
        </>
    )
}

export default MyPosts;