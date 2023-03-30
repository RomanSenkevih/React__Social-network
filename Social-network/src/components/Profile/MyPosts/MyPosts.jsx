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
               <Post />
               <Post />
               <Post />
            </div>
        </>
    )
}

export default MyPosts;