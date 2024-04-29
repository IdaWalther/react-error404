import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './detailsPage.css';
import useFavoriteStore from '../../store/favorites-store';
import useWatchlistStore from '../../store/watchlist-store';

function DetailsPage() {
    // useParams-hook används för att navigera sidan. I detailspage är ID imdbid från MovieCard
    const { id } = useParams();
    const [activeMovie, setActiveMovie] = useState({});
    const imageSrc = activeMovie.Poster === "N/A" ? "/src/assets/no-picture-found.jpg" : activeMovie.Poster;


    //Ladda ner API med ID till setActiveMovie
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=1a195302&i=${id}&plot=full`)
            .then(response => {
                setActiveMovie(response.data);
            });
    }, [id])
    // Samma kod som i MovieCard-component för att skapa funktionalitet för knapparna (till rad 45).
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

    const favoriteTitle = alreadyFavorite ? `Remove ${activeMovie.Title} from favorites` : `Add ${activeMovie.Title} to favorites`;
    const watchlistTitle = alreadyInWatchlist ? `Remove ${activeMovie.Title} from watchlist` : `Add ${activeMovie.Title} to watchlist`;

    return (
        <>
            <article className="detail-info">
                <section className="detail-topinfo">
                    <h1 className="headerDetailpage">{activeMovie.Title}</h1>
                    <h2>Imdb Rating: {activeMovie.imdbRating}</h2>
                </section>
                <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="poster-wrapper">
                        <img className="poster" src={imageSrc} alt={`Poster of the movie ${activeMovie.Title}`} />
                        {/* Knapparna för favoriter och watchlist */}
                        <button
                            title={favoriteTitle}
                            aria-label={favoriteTitle}
                            className={`poster-button ${isHovered ? "" : "d-none"} ${alreadyFavorite ? "poster-button--in-favorites" : "poster-button--add-to-favorites"}`}
                            onClick={(event) => handleFavorite(activeMovie, event)}>
                        </button>
                        <button
                            title={watchlistTitle}
                            aria-label={watchlistTitle}
                            className={`poster-button ${isHovered ? "" : "d-none"} ${alreadyInWatchlist ? "poster-button--in-watchlist" : "poster-button--add-to-watchlist"}`}
                            onClick={(event) => handleFilmToWatch(activeMovie, event)}>
                        </button>
                    </div>
                    <p>{activeMovie.Plot}</p>
                </section>
                <h2 className="sub-title">Actors:</h2>
                <p>{activeMovie.Actors}</p>
                <h2 className="sub-title">Director:</h2>
                <p>{activeMovie.Director}</p>
                <h2 className="sub-title">Genres:</h2>
                <p>{activeMovie.Genre}</p>
            </article>
        </>
    )
}

export default DetailsPage;