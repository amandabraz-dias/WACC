import React from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return(
  <div className= 'wrapper'>
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder='Email:'required/>
        <FaUser className= 'icon' />
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password:'required/>
        <FaLock className= 'icon'/>
      </div>
      <button type= "submit">Sign in</button>
      <div className="register-link">
        <p>
          Don't have an account? <a href="/register">Sign up</a>
        </p>

      </div>
    </form>
  </div>
  );
}

export default Login;