import './searchbar.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../../store/search-store';
import Dropdown from '../dropdown/Dropdown';


function Searchbar() {
    // Vanliga tillståndsvariabler.
    const [searchInput, setSearchInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // useNavigate är en hook från react-router-dom. Ersätter useHistory men kan endast användas i nya versioner av react.
    const navigate = useNavigate();
    // Importerar variabler från useSearchStore
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

        //Om searchInput är inte är tom - getMovie (annars setMovies (visar respons.data.search))
        if (searchInput.length > 2) {
            getMovies();
        }
        if (searchInput.length < 3) {
            setMovies([]);
        }
    }, [searchInput]);

    // Uppdaterar SearchInput när "value" förändras + öppnar dropdownMenyn
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        setDropdownOpen(true);
    };

    // vid vald film - lägger in den valda filmen i inputfältet samt stänger dropdown. Argumentet movie kommer från komponenten Dropdown.
    const handleMovieSelect = (movie) => {
        setSearchInput(movie.title);
        setDropdownOpen(false);
        navigate(`/detailsPage/${movie.imdbid}`);
    };

    // Funktion för sökknappen. Event är klicket på knappen. preventDefault förhindrar att sidan laddas om.
    const handleSearchButtonClick = (event) => {
        event.preventDefault();
        setDropdownOpen(false);
        // Api kräver 3 tecken för att få resultat.
        if (searchInput.length > 2) {
            navigate("/SearchPage/");
        }
    };

    return (
        <form className='searchbar-container'>
            <div className="dropdown-container">
                {/* && är som en if-sats. Dock följer ingen else. */}
                {/* Om dropdown är open, movies fungerar och längden större än 0 görs detta:*/}
                {dropdownOpen && movies && movies.length > 0 && (
                    <Dropdown movies={movies} handleMovieSelect={handleMovieSelect} />
                )}
            </div>
            {/* Input Searchbar och onChange  */}
            <input
                className='searchbar'
                type="text"
                placeholder="search movie..."
                value={searchInput}
                onChange={handleInputChange}
                aria-label='search bar'
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
