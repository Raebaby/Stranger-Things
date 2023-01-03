import React from "react";
import { Link } from "react-router-dom";



const PostItem = ({ posts, children }) => {



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
                    {posts.messages.map((message) => {
                        console.log("message",message)
                        return (
                            <div key={message._id} role="listitem" className="item">
                                <b>{message.username}</b>
                                <div className="content">{message.content}</div>
                            </div>
                        )
                    })
                    }
                    <span className="center aligned ui olive button">
                        <Link to={`/posts/${posts._id}`}>View Location</Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}



export default PostItem;