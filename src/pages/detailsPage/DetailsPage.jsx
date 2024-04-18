import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './detailsPage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

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
                <Header />
                <article className="detail-info">
                    <section>
                        <p className="bold">{activeMovie.Title}</p>
                        <p className="bold">Imdb Rating: {activeMovie.imdbRating}</p>
                    </section>
                    <section>
                        <img src={activeMovie.Poster} alt={`Poster of the movie ${activeMovie.Title}`} />
                        <p>{activeMovie.Plot}</p>
                    </section>
                    <p className="bold">Actors:</p>
                    <p>{activeMovie.Actors}</p>
                    <p className="bold">Director:</p>
                    <p>{activeMovie.Director}</p> 
                    <p className="bold">Genres:</p>                   
                    <p>{activeMovie.Genre}</p>
                </article>  
                <Footer />
            </>
    )
}

export default DetailsPage;