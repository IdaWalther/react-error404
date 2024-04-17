import Trailer from '../../components/trailer/Trailer';
import backArrow from '../../assets/back-arrow.svg';
import nextArrow from '../../assets/next-arrow.svg';
import MovieCard from '../../components/movieCard/MovieCard';

import './frontPage.css';
import useTop20Store from '../../store/top20-store';
import { useEffect, useState } from 'react';
import axios from 'axios';

const shuffleArray= (array) => {
    for(let i = array.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let movieIndex = array[i];
        array[i] = array[randomNumber];
        array[randomNumber] = movieIndex;
    }
    return array.slice(0, 5);
}

const getTop20 = (addTop20, addFiveMovies) => {
    axios.get('https://santosnr6.github.io/Data/movies.json')
    .then(response => {
        addTop20(response.data)
        addFiveMovies(shuffleArray(response.data))
    })
}


function FrontPage() {
    const {top20, addTop20, fiveMovies, addFiveMovies} = useTop20Store(state =>({
        top20: state.top20,
        addTop20: state.addTop20,
        fiveMovies: state.fiveMovies,
        addFiveMovies: state.addFiveMovies
    }));

    useEffect(() => {
        getTop20(addTop20, addFiveMovies);
    }, [])
    
    const [activeSlide, setActivSlide] = useState(0);
    
    const nextSlide = () => {
        setActivSlide((activeSlide + 1) % fiveMovies.length);
    }

    const prevSlide = () => {
        setActivSlide((activeSlide - 1 + fiveMovies.length) % fiveMovies.length);
    }

    return (
        <div className="frontPage">
            <section className="carousel"> 
                {
                    fiveMovies.map((movie, index) => (
                        index === activeSlide ? (
                        <Trailer 
                            movie={movie}
                            trailer={movie.trailer_link}
                            key={index}
                            index={index}
                        />
                        ) : null
                    ))
                }  
                <button className="btnNext" onClick={nextSlide}>
                    <img src={nextArrow} alt="Next arrow"/>
                </button>
                <button className="btnPrev" onClick={prevSlide}>
                    <img src={backArrow} alt="previous arrow"/> 
                </button> 
            </section>
            <h2>Top 20 suggestions</h2>
            <section className="frontPageTopWrapper">
                {
                    top20.map(movie => {
                        return <MovieCard 
                            poster={movie.poster}
                            title = {movie.title}
                            key= {movie.imdbid}
                            favoriteToHandle={movie}
                        />
                    }) 
                }
            </section>
        </div>
    );
}

export default FrontPage;