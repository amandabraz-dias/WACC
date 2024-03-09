// import 'bootstrap/dist/css/bootstrap.css'
import NavBar from '../NavBar';
import React from 'react'
import './Results.css'

function Results() {
    return(
        <>        <div className='card' onClick={()=>window.location="/profilepage?name=Valentina%20Garcia&image=valenPic&major=Computer%20Science&email=valetinaaag03%40gmail.com"}>
            <img className='cardImage' src ="images/valenPic.jpg" alt="profile picture"></img>
            <h2>Valentina Garcia</h2>
            <p>Computer Science</p>
        </div>
        <div className='card' onClick={()=>window.location="/profilepage?name=Amanda%20Dias&image=ProfessionalPic&major=Computer%20Science&email=amanda.dias%40gmail.com"}>
            <img className='cardImage' src ="images/ProfessionalPic.jpg" alt="profile picture"></img>
            <h2>Amanda Dias</h2>
            <p>Computer Science</p>
        </div>
        <div className='card' onClick={()=>window.location="/profilepage?name=Joao%20Amaral&image=joao&major=Computer%20Science&email=jp.bonchristiano%40gmail.com"}>
            <img className='cardImage' src ="images/joao.jpg" alt="profile picture"></img>
            <h2>Joao Amaral</h2>
            <p>Computer Science</p>
        </div>
        <div className='card' onClick={()=>window.location="/profilepage?name=Victoria%20Chang&image=victoria&major=Industrial%20Engineering&email=victoria.change%40gmail.com"}>
            <img className='cardImage' src ="images/victoria.jpg" alt="profile picture"></img>
            <h2>Victoria Chang</h2>
            <p>Industrial Engineering</p>
        </div>
        </> 
        );

}

export default Results;