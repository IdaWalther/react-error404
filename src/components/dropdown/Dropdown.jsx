import React from 'react'
import './dropdown.css'


function Dropdown({ movies, handleMovieSelect }) {
    console.log(movies);
    return (
        <div className="dropdown">
            {movies.map((movie, index) => (
                <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleMovieSelect(movie)}
                >
                    <span>{movie.title}</span>
                    {movie.poster && <img className='dropdown-moviePoster' src={movie.poster} alt="movie-poster" />}
                </div>
            ))}
        </div>
    );
}

export default Dropdown
