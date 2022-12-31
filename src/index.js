import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { fetchPost, fetchGuest } from "./api/api";
import { Home, Posts, LogOut, Profile, AccountForm } from "./components"; 
import "./App.css";



//1.start with account http://localhost:3000/account/login
//2. Then have them login http://localhost:3000/account/login
//3. Soon as they login give them access to the profile page http://localhost:3000/profile


const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [guest, setGuest] = useState(null);

  const history = useHistory()


  useEffect(() => {
    const getPosts = async() =>{
      try{
            const result = await fetchPost();
            setPosts(result)
            //console.log("Working function!")
      } catch(error){
        console.error("There was an error with our routes", error)
      }
    }
    getPosts();
  }, [])

  useEffect(() => {
      if (token){
        const getGuest = async () => {
          const {username} = await fetchGuest(token);
          console.log("username", username);
          setGuest(username);
        }
        getGuest();
      }
  }, [token])

  useEffect(() => {
    window.localStorage.setItem("token", token)
  }, [token])
  



  const logOut = () => {
    setToken("");
    setGuest(null);
    history.push ("/");
  }


  
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
        <Home guest = {guest}/>
      </Route>
      <Route className='item' exact path="/posts">
        <Posts posts={posts}/>
      </Route>
      <Route className="item" exact path="/logout">
        <LogOut />
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

