import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/api"




const CreatePost = ({ token, setPosts }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [deliver, setDeliver] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();


useEffect(() => { token ? null : history.push('/Account/login')
})


const onCreateFormSubmitHandler = async(event) => {
    event.preventDefault();
    const { error, post }  = await createPost(
            token, 
            title,
            description,
            price,
            deliver
        );
    if(post) {
            setPosts((prevPost) => [post, ...prevPost]);
            post.isAuthor = true;
            setTitle("");
            setDescription("");
            setPrice(0);
            setDeliver(false);
            history.push('/posts');  
    } else { 
        setErrorMessage(error);
    }  
};

return(

<div className="createform-container">
    <form  onSubmit={onCreateFormSubmitHandler} className="ui form">

    <div className="field">
        <label>Create Title</label>
            <input 
            className="post-title"
            value={title} 
            onChange={(event) => setTitle(event.target.value)} 
            placeholder="Create a Title">
            </input>
    </div>

    <div className="field">
        <label>Description</label>
            <textarea 
            className="post-message"
            value={description} 
            onChange={(event) => setDescription(event.target.value)} 
            placeholder="Create a Message">
            </textarea>
    </div>

    <div className="field">
        <label>Price</label>
            <input 
            className="post-title"
            value={price} 
            placeholder="Price" 
            onChange={(event) => setPrice(event.target.value)}>
        </input>
    </div>

   
    <div className="field">
            <label>Will Deliver?</label>
            <input 
            className="ui checkbox"
            value={deliver} 
            onChange={(event) => setDeliver(event.target.checked)} 
            tabIndex="0" 
            type="checkbox">
            </input>  
    </div>
  
    {errorMessage ? (<p className="ui negative message">{errorMessage}</p>) : null}

    <button  className="ui button" type="submit">Create Post</button>
     </form>
</div> 
)

}


export default CreatePost;