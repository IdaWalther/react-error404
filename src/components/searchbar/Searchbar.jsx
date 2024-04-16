import React from 'react'
import './searchbar.css'

function Searchbar() {
    return (
        <form className='searchbar-container'>
            <input className='searchbar' type="text" placeholder="search movie..." />
            <input className='searchbar-btn' type="submit" value="find movie" />
        </form>
    )
}

export default Searchbar
