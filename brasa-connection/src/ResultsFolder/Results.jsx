// import 'bootstrap/dist/css/bootstrap.css'
import NavBar from '../NavBar';
import React from 'react'
import './Results.css'

function Results() {
    return(
        <>        <div className='card' onClick={()=>window.location="/profilepage"}>
            <img className='cardImage' src ="images/valenPic.jpg" alt="profile picture"></img>
            <h2>Valentina Garcia</h2>
            <p>Computer Science</p>
        </div>
        <div className='card' onClick={()=>window.location="/profilepage"}>
            <img className='cardImage' src ="images/ProfessionalPic.jpg" alt="profile picture"></img>
            <h2>Amanda Dias</h2>
            <p>Computer Science</p>
        </div>
        <div className='card' onClick={()=>window.location="/profilepage"}>
            <img className='cardImage' src ="images/valenPic.jpg" alt="profile picture"></img>
            <h2>Valentina Garcia</h2>
            <p>Computer Science</p>
        </div>
        <div className='card' onClick={()=>window.location="/profilepage"}>
            <img className='cardImage' src ="images/valenPic.jpg" alt="profile picture"></img>
            <h2>Valentina Garcia</h2>
            <p>Computer Science</p>
        </div>
        </> 
        );

}

export default Results;