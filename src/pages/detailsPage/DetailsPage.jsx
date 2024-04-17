import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function DetailsPage({movieData}) {
    const {id} = useParams();
    const [activeMovie, setActiveMovie] = useState({});

    useEffect(() => {
        const movide = movieData.find(movie => movie.id === parseInt(id));
        setActiveMovie(movie)
    }, [movieData, id])

    return (
        <h1>DetailsPage</h1>
        /*
            <article className="detail-info">
                <h2>{activeMovie.title}</h2>
                <img src={activeMovie.poster} alt={activeMovie.title} />
                <p>Director: {activeMovie.director}</p>
                <p>Genre: {activeMovie.genre}</p>
                <p>Year: {activeMovie.year}</p>
                <p>Rating: {activeMovie.rating}</p>
                <p>Plot: {activeMovie.plot}</p>
            </article> */
    )
}

export default DetailsPage;