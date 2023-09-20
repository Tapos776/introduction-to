import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts =useLoaderData()
    return (
        <div >
            <h1>Post Here:{posts.length}</h1>
            <div className="users">
                {
                    posts.map((posts,indx)=> <Post key={indx} posts={posts}></Post> )
                }
            </div>
        </div>
    );
};

export default Posts;