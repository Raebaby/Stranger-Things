import React from "react";
import { Link } from "react-router-dom";
import { deletePosts } from "../api/api";


const PostItem = ({ posts, children }) => {
 //const [searchTerm, setSearchTerm] = useState('')
// const onClickDelete = async ( postId ) => { 
//     await deletePosts(token, postId);
 
//       setPosts((prevPost) => 
//         prevPost.filter(
//             (posts) => posts._id !== postId
//         )
//     );  
// }


return (
    
    <div className="ui card">
        <div className="content">
        <div className="center aligned header">{posts.title}</div>
            <div className="center aligned header">{posts.location}</div>   
                  
            <div className="center aligned description">
                <p>{posts.description}</p>
                <p>Price: {posts.price}</p>
                <p>{posts.willDeliver}</p>
                <div className="extra content">
                    {children}
                    {/* {posts.isAuthor? 
                        <span>
                            <button className="ui orange button left floated" onClick={() => onClickDelete(posts._id, token)}>Delete</button>
                        </span>: null
                    } */}
                    {/* {posts.isAuthor? 
                                <span className="center aligned tiny header">{posts.author.username}'s post</span>
                                : null
                     }  */}
                    <span className="center aligned ui olive button">
                        <Link to="">View Location</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}



export default PostItem;