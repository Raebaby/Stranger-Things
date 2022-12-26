import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchPosts } from "./api/api";
import { Home, Posts, Login, Profile, AccountForm } from "./components"; 



//1.start with account http://localhost:3000/account/login
//2. Then have them login http://localhost:3000/account/login
//3. Soon as they login give them access to the profile page http://localhost:3000/profile

const App = () => {
  const[post, setPost] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || null);
  useEffect(() => {
    const getPosts = async () => {
    try {
      const result = await fetchPosts();
      setPost(result);
  } catch(error) {
        console.error(error)
        console.log("There is an error with the use effect function")
  }
};
getPosts();
  }, [])
  return (
  <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Profile">Profile</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
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



