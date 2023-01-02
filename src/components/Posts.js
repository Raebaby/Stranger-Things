import { Link } from "react-router-dom"
import PostItem from "./PostItem";

const Posts = ({ posts, setPosts, token }) => {

        

return (
        <div className="Post_page">
             <h2>Posts</h2>
                {posts.map((item) => {
                return(
                    <PostItem  
                        key={item._id} 
                        posts={item} 
                        setPosts={setPosts}
                        token={token}> 
                    </PostItem>
                )
            }
        )
    }
            <div>
                <Link to="/posts/create" className="ui button">
                    New Post
                </Link>
            </div>
         </div>
    );
}

export default Posts;