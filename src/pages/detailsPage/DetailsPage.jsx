import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function DetailsPage({imdbid}) {
    const {id} = useParams();
    const [activeMovie, setActiveMovie] = useState({});

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=1a195302&i=${id}&plot=full`)
        .then(response => {
            setActiveMovie(response.data);
            console.log(response.data)
        });

    }, [])

    return (
        <>
        <h1>DetailsPage</h1>
                <article className="detail-info">
                    <h2>{activeMovie.Title}</h2>
                    <p>{activeMovie.imdbRating}</p>
                    <p>{activeMovie.Actors}</p>
                    <p>{activeMovie.Director}</p>
                    <p>{activeMovie.Plot}</p>
                    <p>{activeMovie.Genre}</p>
                    <img src={activeMovie.Poster} alt={`Poster of the movie ${activeMovie.Title}`} />
                </article>  
        </>
    )
}

export default DetailsPage;