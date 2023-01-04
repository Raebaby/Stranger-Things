

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "./PostItem";
import { addMessage } from "../api/api";


const PostDetail = ( props ) => { 
    const { token, posts, getPosts } = props;
    const { postId } = useParams();
    const [messageText, setMessageText] = useState('');
    const [errorMessage, seterrorMessage] = useState(null);



const singlePost = posts.find((onePost) => {
        const foundPost = onePost._id == postId;
        return foundPost;
    });


const onSubmitCreateMessage = async (event) => {
    event.preventDefault();
    const { success, error, message } = await addMessage(
        token, 
        postId, 
        messageText
    );

    if(success){
        setMessageText('')
      //  console.log(messageText)
        await getPosts();
    } else {
        seterrorMessage(error);
    }
}


if(!singlePost) {
            return (
                <p>One moment...</p>
            );
        }



return(
        <>
        <div className="createmessageform">
            <PostItem posts={singlePost}/>
                <form className="uiform" onSubmit={onSubmitCreateMessage}>
                    <div>
                    <input 
                        type="text" 
                        placeholder="New Message"
                        value={messageText}
                        onChange={(event) => {
                            setMessageText(event.target.value)
                        }}/>
                    </div>
                    <div>
                    <span>
                        <button type="submit" className="ui olive button">Send</button>
                        { errorMessage ? 
                        <p style={{ color: "white", backgroundColor: "red" }}>Operation Failed: {errorMessage}</p>
                        : null}
                    </span>  
                    </div>
                </form>
            </div>    
        </>   
    );
};





export default PostDetail;