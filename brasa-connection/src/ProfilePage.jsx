import './profilepage.css'

function ProfilePage(){
    return (
        <>
        <body id="background">
        <div id="all">
            <div id="box">
                    <div id="picture">
                        <img src="images/ProfessionalPic.jpg" id="profile-pic2"/>
                    </div>
                    <div id="intro">
                        <a id="name">Amanda C. Braz</a>
                        <br/>
                        <div id="buttons">
                            <a href="https://linkedin.com"><img src="images/in.png" class="logo-button"/></a>
                            <button id="message-button">Message</button>
                        </div>
                        
                    </div>
        
            </div>
            <div id="info">
                <div id="education">
                    <a class="label">Education</a>
                    <br/>
                    <a class="words">Major:</a>
                    <br/>
                    <a class="words">Industrial Engineering</a>
                    <br/>
                    <a class="words">Georgia Institue of Technology</a>
                </div>   
                <div id="information">
                    <a class="label">Contact Information</a>
                    <br/>
                    <a class="words">Email: </a>
                    <br/>
                    <a class="words">vchang34@gatech.edu</a>
                </div>   
            </div>
        </div>
        </body>
        </>
        
      )

}
export default ProfilePage
