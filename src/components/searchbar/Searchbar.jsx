import './searchbar.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../../store/search-store';


function Searchbar() {

    const [searchInput, setSearchInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { movies } = useSearchStore();
    const setMovies = useSearchStore((state) => state.setMovies);

    useEffect(() => {
        const getMovies = () => {
            axios.get(`http://www.omdbapi.com/?apikey=16ca3eb4&s=${searchInput}`)
                .then(response => {
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
        }
    }, [searchInput]);

    // Uppdaterar SearchInput när "value" förändras + öppnar dropdownMenyn
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        setDropdownOpen(true);
    };

    // vid vald film - lägger in den valda filmen i inputfältet samt stänger dropdown
    const handleMovieSelect = (movie) => {
        setSearchInput(movie.Title);
        setDropdownOpen(false);
        navigate(`/detailsPage/${movie.imdbid}`);
    };

    const handleSearchButtonClick = (event) => {
        event.preventDefault()
        setDropdownOpen(false);
        navigate("/SearchPage/");
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
                                onClick={() => handleMovieSelect(movie)}
                            >
                                {/* Vad som visas i dropdown */}
                                <span>{movie.title}</span>
                                {movie.poster && <img className='dropdown-moviePoster' src={movie.poster} alt="movie-poster" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Input Searchbar och onChange  */}
            <input
                className='searchbar'
                type="text"
                placeholder="search movie..."
                value={searchInput}
                onChange={handleInputChange}
            />
            {/* Input searchBtn */}
            <input className='searchbar-btn'
                type="submit"
                value="find movie"
                onClick={handleSearchButtonClick}
            />
        </form>
    )
}

export default Searchbar
