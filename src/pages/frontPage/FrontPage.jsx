import Trailer from '../../components/trailer/Trailer';
//import MovieCard from '../../components/movieCard/MovieCard';

import './frontPage.css';
import useTop20Store from '../../store/top20-store';
import { useEffect } from 'react';
import axios from 'axios';

const getTop20 = (addTop20) => {
    axios.get('https://santosnr6.github.io/Data/movies.json')
    .then(response => {
        addTop20(response.data)
    })
}
function FrontPage() {
    const {top20, addTop20} = useTop20Store(state =>({
        top20: state.top20,
        addTop20: state.addTop20,
    }));

    useEffect(() => {
        getTop20(addTop20);
    }, [])

    return (
        <div className="frontPage">
            <Trailer />
            <h2>Top 20 suggestions</h2>
            <section className="frontPageTopWrapper">
                {
                    /*top20.map(movie => {
                        return <MovieCard 
                            poster={movie.poster}
                            title = {movie.title}
                            key= {movie.imdbid}  
                        />
                    }) */
                }
            </section>
        </div>
    );
}

export default FrontPage;