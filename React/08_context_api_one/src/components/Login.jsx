import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username, setUsername]=useState("")
    const [Password, setPassword]=useState("")
    const {setUser} = useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username, password});


    }
    return (
        <>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Username' />
            <input type="text" 
            value={Password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
