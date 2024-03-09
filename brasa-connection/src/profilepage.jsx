import './profilepage.css'

function ProfilePage(){
    return (
        <>
        <div id="all">
            <div id="box">
                    <div id="picture">
                        <img src="profilepic.png" id="profile-pic2"/>
                    </div>
                    <div id="intro">
                        <a id="name">Victoria Chang</a>
                        <br/>
                        <div id="buttons">
                            <a href="https://linkedin.com"><img src="images/in.png" class="logo-button"/></a>
                            <button id="message-button">Message</button>
                        </div>
                        
                    </div>
        
            </div>
            <div id="info">
                    <a>Major: Industrial Engineering</a>
                    <br/>
                    <a>Email: vchang34@gatech.edu</a>
                    <a></a>
            </div>
        </div>
        </>
        
      )

}
export default ProfilePage