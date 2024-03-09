import NavBar from './NavBar';
import NavBarLogin from './NavBarLogin';
import './profilepage.css'
import { useSearchParams } from 'react-router-dom'

function ProfilePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") ? searchParams.get("name") : "Amanda Braz"; 
    const image = searchParams.get("image") ? searchParams.get("image") : "ProfessionalPic"; 
    const imageString = "images/" + image + ".jpg";
    const major = searchParams.get("major") ? searchParams.get("major") : "Computer Science";
    const email = searchParams.get("email") ? searchParams.get("email") : "amanda.dias@gmail.com";
    return (
        <>
        <NavBar></NavBar>
        <body id="background">
        <div id="all">
            <div id="box">
                    <div id="picture">
                        <img src={imageString} id="profile-pic2"/>
                    </div>
                    <div id="intro">
                        <a id="name">{name}</a>
                        <br/>
                        <div id="buttons">
                            <a href="https://linkedin.com"><img src="images/in.png" class="logo-button"/></a>
                            <button id="message-button" href="mailto:amandabrazdias@gmail.com">Message</button>
                            <button id="upload-button">Upload Transcript</button>
                        </div>
                        
                    </div>
        
            </div>
            <div id="info">
                <div id="education">
                    <a class="label">Education</a>
                    <br/>
                    <a class="words">Major:</a>
                    <br/>
                    <a class="words">{major}</a>
                    <br/>
                    <a class="words">Georgia Institue of Technology</a>
                </div>   
                <div id="information">
                    <a class="label">Contact Information</a>
                    <br/>
                    <a class="words">Email: </a>
                    <br/>
                    <a class="words">{email}</a>
                </div>   
            </div>
        </div>
        </body>
        </>
        
      )

}
export default ProfilePage
