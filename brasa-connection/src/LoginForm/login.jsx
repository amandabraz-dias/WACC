import React from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";
import NavBarLogin from '../NavBarLogin';

function Login() {
  return(
  <div className= 'wrapper'>
    <NavBarLogin></NavBarLogin>
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
      <button type= "submit"><a href="/" style={{color: 'black'}}>Sign in</a></button>
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