"use client"
import React, { Component } from 'react';

class Navigation_login extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <a href="/"><img src="/sm-logo.svg" alt="logo"/></a>
                    </div>
                    <ul className="navbar-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/discover">Discover</a></li>
                        <li><a href="/about">About</a></li>
                        {/*
                        {
                            typeof window !== "undefined" ? (localStorage.getItem("token") ? <li><a href="/account"><img src="loggedin-icon.svg" alt="Login"/></a></li>
                                : <li><a href="/login"><img src="loggedin-icon.svg" alt="Login"/></a></li>)
                            : null
                        }
                        */}
                        <li><a href="/login"><img src="/loggedin-icon.svg" alt="Login"/></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation_login;