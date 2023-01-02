import React from "react";
import { Link } from "react-router-dom";
import { deletePosts } from "../api/api";


const PostItem = ({ posts, token, setPosts }) => {
 //const [searchTerm, setSearchTerm] = useState('')



const onClickDelete = async ( postId ) => { 
    await deletePosts(token, postId);
      setPosts((prevPost) => 
        prevPost.filter(
            (posts) => posts._id !== postId
        )
    );  
}


return (
    
    <div className="ui card">
        <div className="content">
            <div className="center aligned header">{posts.location}Location</div>
            <div className="center aligned description">
                <p>{posts.description}</p>
                <div className="extra content">
                    {posts.isAuthor? 
                        <span>
                            <button className="ui orange button left floated" onClick={() => onClickDelete(posts._id, token)}>Delete</button>
                        </span>: null
                    }
                    <span className="ui olive button">
                        <Link to="">View Location</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}



//{post.isAuthor? <button className="delete-post" onClick={() => handleDelete(post._id, token)}>Delete</button>: null}

// const PostItem = ({ token, setPosts, posts }) => {
//     //const [searchTerm, setSearchTerm] = useState('')
//     console.log("posts", posts);
    
//     const onDeleteHandler = async (postId) => {
//             await deletePosts(token, postId); 
//                // fetchGuest(token);
//                 setPosts((prevPost) => prevPost.filter((post) => post._id !== postId));
    
//     };
//     return (
    
//         <div className="ui card">
//             <div className="content">
//             {post.isAuthor ? (<div className="right floated aligend tiny header">Mine</div>) : null}
//                 <div className="center aligned header">{posts.location}Location</div>
//                 <div className="center aligned description">
//                     <p>{posts.description}</p>
//                     <p>{posts.price}</p>
//                 </div>    
//                 <div className="extra content">
//                     <div className="center aligned header">
//                         <Link to="">View Location</Link>
//                     </div>
//                 </div>
//             {post.isAuthor ? (
//                 <button onClick={() => onDeleteHandler(post._id)} className="negative ui button right floated">
//                     Delete
//                 </button>
//             ) : null}
//              <div
//           role="list"
//           className="ui divided relaxed list"
//           style={{ color: "#444" }}
//         >
//           {/* {post.messages.map((message) => {
//             return (
//               <div role="listitem" className="item">
//                 <b>{message.fromUser}</b>
//                 <p className="content">{message.content}</p>
//               </div>
//             );
//           })} */}
//         </div>
//     </div>
//     </div>
//  )
// }



export default PostItem;