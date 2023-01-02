import React from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../api/api";

const PostItem = ({ token, setPosts, posts }) => {




    return <div className="ui card">
        <div className="content">
            <div className="center aligned header">{posts.location}Location</div>
            <div className="center aligned description">
                <p>{posts.description}</p>
                <div className="extra content">
                    <div className="center aligned header">
                        <Link to="">View Location</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}


export default PostItem;