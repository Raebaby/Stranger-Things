import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import PostItem from "./PostItem";
import { deletePosts } from "../api/api";

const Posts = ({ posts, setPosts, token }) => {
    // console.log("posts", posts);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);


useEffect(() => {
    
    if (searchTerm) {

      const searchTerms = searchTerm.toLowerCase().trim().split(' ');
      const filtered = posts.filter((postsObject) => {
        const filterableValues = [
            postsObject.title,
            postsObject.description,
            postsObject.price,
            postsObject.location,
            postsObject.author.username,
        ];
    for (let value of filterableValues) {
        const valueLower = value.toLowerCase().trim();
    for (let term of searchTerms) {
        if (valueLower.length > 0 && term.length > 0 && valueLower.includes(term)) {
              return true;
            }
          }
        }
        return false;
        });
        setFilteredPosts(filtered);
        } else {
        setFilteredPosts(posts);
    }
  }, 
  [searchTerm, posts]);
  
    



const onClickDelete = async ( postId ) => { 
    await deletePosts(token, postId);
    setPosts((prevPost) => 
    prevPost.filter(
        (posts) => posts._id !== postId
    ));   
}

return (
    <div >
        <h1 className="theupsidedown">You're In The Upside Down!</h1>
        <img className="postpic" src="https://i.pinimg.com/originals/37/7c/87/377c8732c8b7d6db35272e29a7c02062.jpg"  width="1100" height="500"></img>
        <h1 className="scroll" >&#8595; Scroll Down for Posts &#8595;</h1>
        <div className="postcontainer">
        <input type="text" placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} 
            />
        <i className="search icon"></i>
            {posts.map((item) => {
            return(
                    <PostItem  
                        key={item._id} 
                        posts={item} 
                        headerElement={
                            item.isAuthor ? (
                            <div className="center aligned tiny header">
                            My Post
                            </div>
                            ) : null}>    
                        {item.isAuthor? 
                        <div>
                            <br></br>
                            <button className="ui orange button center aligned" 
                            onClick={() => onClickDelete(item._id, token)}>
                            Delete
                            </button>
                        </div>: null}
                    </PostItem>
                )}
            )}
            <div>
                <Link to="/posts/create" className="ui button">
                New Post
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Posts;