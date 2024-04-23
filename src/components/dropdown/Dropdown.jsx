import React from 'react'
import './dropdown.css'


function Dropdown({ movies, handleMovieSelect }) {
 // movies är värdet av nyckeln movies i searchStore. handleMovieSelect är funktion från komponenten Searchbar.
    return (
        <div className="dropdown">
            {/* För varje film i movies-array så returneras en div, med en span och img */}
            {movies.map((movie, index) => {
                const imageSrc = movie.poster === "N/A" ? "/src/assets/no-picture-found.jpg" : movie.poster;
                return (
                    <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleMovieSelect(movie)}
                    >
                        <span>{movie.title}</span>
                        <img className="dropdown-moviePoster" src={imageSrc} alt={`${movie.title} poster`} />
                    </div>
                )
    })}
        </div>
    );
}

export default Dropdown
