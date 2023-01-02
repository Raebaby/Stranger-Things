import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPost, fetchGuest } from "./api/api";
import { Home, Posts, Profile, AccountForm, CreatePost, PostItem } from "./components"; 
import "./App.css";



const App = () => {


//Variables
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [username, setUsername] = useState("");
  const history = useHistory();



//UseEffect Functions
useEffect(() => {
  const getPosts = async () =>{
    const { error, posts } = await fetchPost(token);
    if(error) {
      console.error(error)
    }
    setPosts(posts)
   }
   getPosts();
}, [token])

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
    //localStorage.removeItem("token");
  }


//RETURN
return (
<div className="container">
    <nav className="ui secondary menu">
      <h1>Stranger Things</h1>
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/Posts">Posts</Link>
        <Link className="item" to="/Profile">Profile</Link>
        <div className="right menu">
          {
            token ? (
            <button onClick={logOut} className="item">Log Out</button>
            ): (
                <>
            <Link className="item" to="/Account/login">Log In</Link>
            <Link className="item" to="/Account/register">Sign Up</Link>
                </>
            )}
        </div> 
    </nav>
    <nav className="sidebar">
    </nav>
    <Switch>
      <Route className="item" exact path="/">
        <Home token={token} username={username}/>
      </Route>

      <Route className="item" path='/posts/create'>
        <CreatePost token={token}  setPosts={setPosts}/>
      </Route>

      <Route className='item' exact path="/posts">
        <Posts token={token} posts={posts} setPosts={setPosts} username={username}/>
      </Route>

      <Route className='item' exact path="/posts">
              <PostItem token={token} posts={posts} setPosts={setPosts} username={username}/>
      </Route>

      <Route className="item" exact path="/profile">
        <Profile />
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

