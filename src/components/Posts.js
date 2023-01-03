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
    <div className="Post_page">
        <h2>Posts</h2>
        <input type="text" placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} 
            />
        <i className="search icon"></i>
            {filteredPosts.map((item) => {
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
    )
}

export default Posts;