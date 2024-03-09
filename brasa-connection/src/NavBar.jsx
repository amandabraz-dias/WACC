import './NavBar.css'

function NavBar() {
    return (
        <nav class="navbar fixed-top" id="nav">
        <div class="container-fluid">
            <img id="logo" src="../images/logoWhite.webp" alt="BRASA logo" />
            <div class="ms-auto">
                <a class="nav-item" href="/Home" id="navPages">Home</a>
                <a class="navbar-item" id="navPages">|</a>
                <a class="navbar-item" href="/MyProfile" id="navPages">My Profile</a>
                <img id="ProfilePic" src="../images/ProfessionalPic.jpg" alt="My Profile Picture" />
            </div>
        </div>
        </nav>
    );
}

export default NavBar;