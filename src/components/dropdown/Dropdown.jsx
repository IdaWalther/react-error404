import React from 'react'
import './dropdown.css'


function Dropdown({ movies, handleMovieSelect }) {
    // movies är värdet av nyckeln movies i searchStore. handleMovieSelect är funktion från komponenten Searchbar.
    return (
        <ul className="dropdown">
            {/* För varje film i movies-array så returneras en li, med en h3 och img */}
            {movies.map((movie, index) => {
                const imageSrc = movie.poster === "N/A" ? "/src/assets/no-picture-found.jpg" : movie.poster;
                return (
                    <li
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleMovieSelect(movie)}
                    >
                        <h3 className="dropdown-title">{movie.title}</h3>
                        <img className="dropdown-moviePoster" src={imageSrc} alt={`${movie.title} poster`} />
                    </li>
                )
            })}
        </ul>
    );
}

export default Dropdown
