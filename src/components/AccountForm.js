import React, { useState } from "react";


const AccountForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    return (
        <form className="ui form">
            <h1>Form Title</h1>
            <div className="feild"> Account Login Form
                <label>Username</label>
                <input type="text" value={username} placeholder="username" required/>
            </div> 
        </form>
    )
}

export default AccountForm;