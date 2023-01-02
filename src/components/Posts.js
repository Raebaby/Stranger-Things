import React from "react";
import { Link } from "react-router-dom"
import PostItem from "./PostItem";
import { deletePosts } from "../api/api";

const Posts = ({ posts, setPosts, token }) => {


const onClickDelete = async ( postId ) => { 
    await deletePosts(token, postId);
    setPosts((prevPost) => 
        prevPost.filter(
            (posts) => posts._id !== postId
        )
    );  
}

return (
        <div className="Post_page">
             <h2>Posts</h2>
                {posts.map((item) => {
                return(
                    <PostItem  
                        key={item._id} 
                        posts={item} 
                        > 
                        {item.isAuthor? 
                        <span>
                            <button className="ui orange button left floated" 
                                onClick={() => onClickDelete(item._id, token)}>
                                    Delete
                            </button>
                        </span>: null
                        }
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