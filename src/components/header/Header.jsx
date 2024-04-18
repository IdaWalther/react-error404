import React from 'react'
import "./header.css"
import Searchbar from '../searchbar/Searchbar'
import Nav from '../nav/Nav'



function Header() {

    return (
        <header className='header-container' id="header">
            <a href="/">
                <img className='logo' src='../src/assets/logo.png' alt="logo" />
            </a>
            <Searchbar />
            <Nav />
        </header>
    )
}

export default Header
