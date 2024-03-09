import React from 'react'
import './register.css'
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Register() {
  return(
  <div className= 'wrapper'>
    <form action="">
      <h1>Register</h1>
      <div className="input-box">
        <input type="text" placeholder='Name:'required/>
        <FaUser className= 'icon' />
      </div>
      <div className="input-box">
        <input type="text" placeholder='Email:'required/>
        <MdOutlineAlternateEmail className='icon2'/>
      </div>
      <div className="input-box">
        <input type="text" placeholder='Major:'required/>
        <IoIosSchool className= 'icon2'/>
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password:'required/>
        <FaLock className= 'icon'/>
      </div>
      <div className="input-box">
        <input type="password" placeholder='Confirm password:'required/>
        <FaLock className= 'icon'/>
      </div>
      <button type= "submit">Sign up</button>
      <div className="register-link">
        <p>
          Already have an account? <a href="/login">Sign in</a>
        </p>

      </div>
    </form>
  </div>
  );
}

export default Register;