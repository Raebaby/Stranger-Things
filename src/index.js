import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPost, fetchGuest } from "./api/api";
import { Home, Posts, Profile, AccountForm, CreatePost, PostItem, PostDetail } from "./components"; 
import "./App.css";



const App = () => {


//Variables
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [username, setUsername] = useState("");
  const history = useHistory();



//UseEffect Functions
// useEffect(() => {
//   const getPosts = async () =>{
//     const { error, posts } = await fetchPost(token);
//     if(error) {
//       console.error(error)
//     }
//     setPosts(posts)
//    }
//    getPosts();
// }, [token])



const getPosts = async () => {
  const { error, posts } = await fetchPost(token);
  if (error) {
    console.error(error);
  }
  setPosts(posts);
};

useEffect(() => {
  getPosts();
}, [token]);





useEffect(() => {
    if (token){
       const getUsername = async () => {
         const { username } = await fetchGuest(token);
         setUsername(username);
      };
       getUsername();
     }
}, [token])

useEffect(() => {
  if(token){
    window.localStorage.setItem("token", token);
  } else{
    window.localStorage.removeItem("token");
  } 
}, [token])



const logOut = () => {
    setToken("");
    setUsername(null);
    history.push("/");
  }


//RETURN
return (
<div  className="page" >
        <nav className="sidebar">
          <ul className="nav">
          <li><Link className="item" to="/">Home</Link></li> 
          <li><Link className="item" to="/Posts">Posts</Link></li>
            <li><Link className="item" to="/Profile">Profile</Link></li>
              {
                token ? (
                <li><button onClick={logOut} >Log Out</button></li>
                ): (
                    <>
                <li><Link className="item" to="/Account/login">Log In</Link></li>
                <li><Link className="item" to="/Account/register">Sign Up</Link></li>
                    </>
                )}
          </ul>      
        </nav>

  <Switch>
    <Route className="item" exact path="/">
      <Home token={token} username={username}/>
    </Route>

    <Route className="item" path='/posts/create'>
      <CreatePost token={token}  setPosts={setPosts}/>
    </Route>

    <Route className='item' exact path="/posts/:postId">
        <PostDetail token={token} posts={posts} setPosts={setPosts} getPosts={getPosts}/>
    </Route>

    <Route className='item' exact path="/posts">
      <Posts token={token} posts={posts} setPosts={setPosts} username={username}/>
    </Route>

    <Route className='item' exact path="/posts">
            <PostItem token={token} posts={posts} setPosts={setPosts} username={username}/>
    </Route>

    <Route className="item" exact path="/profile">
      <Profile token={token} username={username}/>
    </Route>

    <Route className="item" exact path="/account/:action">
      <AccountForm setToken={setToken}/>
    </Route>
  </Switch>

</div>
);
};


const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <Router>
    <App/>
    </Router>
)

