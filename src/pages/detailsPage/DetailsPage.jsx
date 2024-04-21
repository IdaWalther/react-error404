import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './detailsPage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useFavoriteStore from '../../store/favorites-store';
import useWatchlistStore from '../../store/watchlist-store';

function DetailsPage() {
    const { id } = useParams();
    const [activeMovie, setActiveMovie] = useState({});
    const imageSrc = activeMovie.Poster === "N/A" ? "/src/assets/no-picture-found.jpg" : activeMovie.Poster;

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=1a195302&i=${id}&plot=full`)
            .then(response => {
                setActiveMovie(response.data);
            });

    }, [])

    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);
    const handleFilmToWatch = useWatchlistStore((state) => state.handleFilmToWatch);
    const { favorites } = useFavoriteStore();
    const { watchlist } = useWatchlistStore();

    const alreadyFavorite = favorites.some(favorite => favorite.imdbid === activeMovie.imdbID);
    const alreadyInWatchlist = watchlist.some(watchlistItem => watchlistItem.imdbid === activeMovie.imdbID);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const favoriteTitle = alreadyFavorite ? `Remove ${activeMovie.Title} from favorites.` : `Add ${activeMovie.Title} to favorites.`;
    const watchlistTitle = alreadyInWatchlist ? `Remove ${activeMovie.Title} from watchlist.` : `Add ${activeMovie.Title} to watchlist.`;

    return (
        <>
            <Header />
            <article className="detail-info">
                <section>
                    <p className="bold">{activeMovie.Title}</p>
                    <p className="bold">Imdb Rating: {activeMovie.imdbRating}</p>
                </section>
                <section className="poster-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img className="poster" src={imageSrc} alt={`Poster of the movie ${activeMovie.Title}`} />
                    <button title={favoriteTitle} aria-label={favoriteTitle} className={`poster-button ${isHovered ? "" : "d-none"} ${alreadyFavorite ? "poster-button--in-favorites" : "poster-button--add-to-favorites"}`} onClick={(event) => handleFavorite(activeMovie, event)}></button>
                    <button title={watchlistTitle} aria-label={watchlistTitle} className={`poster-button ${isHovered ? "" : "d-none"} ${alreadyInWatchlist ? "poster-button--in-watchlist" : "poster-button--add-to-watchlist"}`} onClick={(event) => handleFilmToWatch(activeMovie, event)}></button>
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