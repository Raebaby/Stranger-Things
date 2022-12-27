import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import PostItem from "./PostItem";
import { fetchPost } from "../api/api";

const Posts = ({ posts }) => {
    console.log("posts", posts);
    return (
        <div>

             Posts

            {posts.map((item) => {
                return <PostItem key={item._id} posts={item}/>
            })}


            <div>
            <Link to="/vacations/create" className="ui button">
                New Post
            </Link>
            </div>
        </div>
    );
}

export default Posts;