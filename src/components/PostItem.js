import React from "react";
import { Link } from "react-router-dom";



const PostItem = ({ posts, headerElement, children }) => {


return (   
<div className="ui card">
        <div className="content">
            <div className="center aligned header" >{posts.title}</div>
                <div className="center aligned header">
                <span>{posts.location}</span>
                <br></br>
                <span>{posts.author.username}</span>
                </div>
                {headerElement}        
                <div className="center aligned description">
                    <p>{posts.description}</p>
                    <p>Price: {posts.price}</p>
                <div className="extra content">  
                <div className="center aligned ui olive button">
                <Link to={`/posts/${posts._id}`}>View Location</Link>
                </div>
            </div> 
                {children}
            <div
                role="list"
                className="ui divided relaxed list"
                style={{ color: "#444", clear: "both" }} >
                {posts.messages.map((message) => {
                return (
                    <div key={message._id} role="listitem" className="item">
                    <b>{message.username}</b>
                    <p className="content">{message.content}</p>
                    </div>
                    )
                })}
            </div>       
            </div>
        </div>
    </div>
    );
}



export default PostItem;