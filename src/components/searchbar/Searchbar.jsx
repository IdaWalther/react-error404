import './searchbar.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Searchbar() {

    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const getMovies = () => {
            axios.get(`http://www.omdbapi.com/?apikey=16ca3eb4&s=${searchInput}`)
                .then(response => {
                    console.log('Movies data:', response.data);
                    // Uppdaterar State med de hämtade filmerna
                    setMovies(response.data.Search || []);
                })
                .catch(error => {
                    console.error('Error fetching movies:', error);
                });
        };

        //Om searchInput är tom - getMovie annars setMovies (visa respons.data.search)
        if (searchInput !== '') {
            getMovies();
        } else {
            setMovies([]);
        }
    }, [searchInput]);

    // Uppdaterar SearchInput när "value" förändras + öppnar dropdownMenyn
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        setDropdownOpen(true);
    };

    // vid vald film - lägger in den valda filmen i inputfältet samt stänger dropdown
    const handleMovieSelect = (movieTitle) => {
        setSearchInput(movieTitle);
        setDropdownOpen(false);
    };

    return (
        <form className='searchbar-container'>
            <div className="dropdown-container">
                {/* Om dropdown är open, movies fungerar och längden större än 0 görs detta:*/}
                {dropdownOpen && movies && movies.length > 0 && (
                    <div className="dropdown">
                        {/* Mappar igenom movies i dropdown och kallar på handleMovieSelect vid klick */}
                        {movies.map((movie, index) => (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleMovieSelect(movie.Title)}
                            >
                                {/* Vad som visas i dropdown */}
                                <span>{movie.Title}</span>
                                {movie.Poster && <img className='dropdown-moviePoster' src={movie.Poster} alt="movie-poster" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Input Searchbar och onChange  */}
            <input
                className='searchbar'
                // id="searchInput"
                type="text"
                placeholder="search movie..."
                value={searchInput}
                onChange={handleInputChange}
            />
            {/* Input searchBtn */}
            <input className='searchbar-btn' type="submit" value="find movie" />
        </form>
    )
}

export default Searchbar
