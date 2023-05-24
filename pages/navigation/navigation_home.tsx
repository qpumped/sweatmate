import React, { Component } from 'react';

/*ToDo:
*  check if someone is logged in
*/

//***DETECT ACTIVE OBJECT***


//***CHECK IF LOGGED IN***
let directoryFileProfile = "";
let checkIfLoggedIn = false;

// Logged in --> Navbar-Icon will direct you to /profile
// Not logged in --> Navbar-Icon will direct you to /login
if (checkIfLoggedIn) {
    directoryFileProfile = "/profile";
} else {
    directoryFileProfile = "/login";
}

class Navigation_home extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <a href="/"><img src="sm-logo.svg" alt="Logo"/></a>
                    </div>
                    <ul className="navbar-links">
                        <li><a className="active" href="/">Home</a></li>
                        <li><a href="/discover">Discover</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href={directoryFileProfile}><img src="login-icon.svg" alt="Login"/></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation_home;