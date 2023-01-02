import { Link } from "react-router-dom"
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
    return (
        <div>

             Posts

            {posts.map((item) => {
                return <PostItem key={item._id} posts={item}/>
            })}


            <div>
            <Link to="/posts/create" className="ui button">
                New Post
            </Link>
            </div>
        </div>
    );
}

export default Posts;