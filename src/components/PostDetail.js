import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "./PostItem";
import { addMessage } from "../api/api";



const PostDetail = ( props ) => { 
    const { token, posts, setPosts } = props;
    const { postId } = useParams();
    const [message, setMessage] = useState('');

    console.log(message)

    const singlePost = posts.find((onePost) => {
            const foundPost = onePost._id == postId;
            return foundPost;
        });
    if(!singlePost) {
            return (
                <p>One moment...</p>
            );
        }

const onClickCreateMessage = (event) => {
    setMessage(event.target.value)
}


return(
        <>
            <PostItem posts={singlePost}/>
            <form>
                <div>
                  <input 
                    type="text" 
                    placeholder="New Message"
                    value={message}
                    onChange={onClickCreateMessage}
                    />
                </div>
                <button type="submit" className="ui olive button">Send</button>
            </form>
        </>   
    );
      
};





export default PostDetail;