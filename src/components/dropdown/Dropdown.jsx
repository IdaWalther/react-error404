import React from 'react'

function Dropdown({ movies, handleMovieSelect }) {
    return (
        <div className="dropdown">
            {movies.map((movie, index) => (
                <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleMovieSelect(movie)}
                >
                    <span>{movie.Title}</span>
                    {movie.Poster && <img className='dropdown-moviePoster' src={movie.Poster} alt="movie-poster" />}
                </div>
            ))}
        </div>
    );
}

export default Dropdown
