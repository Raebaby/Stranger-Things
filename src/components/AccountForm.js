import React, { useState } from "react";
import { registerUser, loginUser } from "../api/api";
import { useParams, useHistory } from "react-router-dom";



const AccountForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { action } = useParams();
    const history = useHistory();



const onSubmitHandler = async(event) => {
        event.preventDefault();
        const authFn = action === "register" ? registerUser : loginUser
        const { token } = await authFn(username, password)
                setToken(token);
                history.push("/")
        if(token){history.push('/')}
    }


const title = action === "login" ? "Log In" : "Sign Up"

return (
<div>
    <div>   
        <form className="uiform" onSubmit={onSubmitHandler}>
        <h1 className="logintitle">&nbsp; &nbsp; &nbsp; &nbsp;{title}</h1> 
            <div>
            <div className="feild"> 
                <label>Username</label>
                &nbsp; &nbsp; &nbsp;&nbsp;
                    <input 
                    type="text"
                    value={username} 
                    placeholder="username" 
                    required
                    onChange={(event) => setUsername(event.target.value)}
                    />
            </div>  
            <br></br>
            <div className="feild">
                <label>Password</label>
                &nbsp; &nbsp; &nbsp; &nbsp;
                    <input 
                    type="password" 
                    value={password} 
                    placeholder="password" 
                    minLength="8"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    />
            </div></div>
                <br></br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button className="ui button" type="submit">{title}</button>    
        </form>
    </div>
</div>        
    )
}

export default AccountForm;