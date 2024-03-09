import './NavBarLogin.css'

function NavBarLogin() {
    return (
        <nav class="navbar fixed-top" id="nav">
        <div class="container-fluid">
            <img id="logo" src="../images/logoWhite.webp" alt="BRASA logo" />
            <div id="horizontal">
                <a class="nav-item" href="/" id="navPages">Home</a>
                <a class="navbar-item" id="navPages">|</a>
                <a class="navbar-item" href="/login" id="navPages">Login</a>
            </div>
        </div>
        </nav>
    );
}

export default NavBarLogin;