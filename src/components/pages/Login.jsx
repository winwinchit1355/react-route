import React from 'react'
import { useLoginContext } from '../utils/LoginContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {loggedIn,setLoggedIn} = useLoginContext();
    const userLogin = () =>{
        setLoggedIn(true);
        navigate('/category');
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={userLogin}>Login</button>
    </div>
  )
}

export default Login