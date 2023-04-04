import s from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.container}>
            <div>
                <label for="xxx"><h2>My posts</h2></label>
                <textarea id='xxx' className={s.input} ></textarea>
                <div className={s.buttonLeft}>
                <button>Add post</button>
                <button>Remove</button>
                </div>
            </div>
            <div>
               <Post messeg=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, odio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere neque quas, reiciendis accusantium qui velit vel cumque deleniti modi eius.' like='197'/>
               <Post messeg='сообщение 2 привет мир' like='55'/>
               <Post messeg='сообщение 3  tetur adipisicing elit. Facere neque quas, reiciendis accusantium qui velit vel cumque deleniti modi eius.' like='88'/>
            </div>
        </div>
    )
}

export default MyPosts;