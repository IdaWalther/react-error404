import "./movieCard.css"
import useFavoriteStore from "../../store/favorites-store";
import { Link } from 'react-router-dom';
import useWatchlistStore from "../../store/watchlist-store";
import { useState } from "react";


// Vi tar emot dekonstruerade props.
function MovieCard({ poster, title, filmToHandle, imdbid }) {
    // handleFavorite och handleFilmToWatch är funktioner och behöver importeras på sitt speciella sätt.
    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);
    const handleFilmToWatch = useWatchlistStore((state) => state.handleFilmToWatch);
    // favorites och watchlist är inte funktioner och kan importeras såhär.
    const { favorites } = useFavoriteStore();
    const { watchlist } = useWatchlistStore();

    // Beroende på om vi har filmen i vår favorite eller watchlist array så vill vi visa olika ikoner. Används också för att uppdatera informationen i aria-label och title.
    const alreadyFavorite = favorites.some(favorite => favorite.imdbid === imdbid);
    const alreadyInWatchlist = watchlist.some(watchlistItem => watchlistItem.imdbid === imdbid);

    // Används för att visa eller dölja favorit/watchlist-knapparna. 
    const [isHovered, setIsHovered] = useState(false);

    // Funktionerna för att toggla om man hovrar figure.
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // För att göra koden mer läsbar så skapar vi variabler.
    const imageSrc = poster === "N/A" ? "/src/assets/no-picture-found.jpg" : poster;
    const favoriteTitle = alreadyFavorite ? `Remove ${title} from favorites.` : `Add ${title} to favorites.`;
    const watchlistTitle = alreadyInWatchlist ? `Remove ${title} from watchlist.` : `Add ${title} to watchlist.`;

    return (
        <Link to={`/detailspage/${imdbid}`}>
            <figure className="movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <figcaption className="movie-card__title">{title}</figcaption>

                <button
                    title={favoriteTitle}
                    aria-label={favoriteTitle}
                    className={`movie-card__icon ${isHovered ? "" : "d-none"} ${alreadyFavorite ? "movie-card__icon--in-favorites" : "movie-card__icon--add-to-favorites"}`}
                    onClick={(event) => handleFavorite(filmToHandle, event)}>
                </button>

                <button
                    title={watchlistTitle}
                    aria-label={watchlistTitle}
                    className={`movie-card__icon ${isHovered ? "" : "d-none"} ${alreadyInWatchlist ? "movie-card__icon--in-watchlist" : "movie-card__icon--add-to-watchlist"}`}
                    onClick={(event) => handleFilmToWatch(filmToHandle, event)}>
                </button>

                <img src={imageSrc} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
            </figure>
        </Link>
    )
}

export default MovieCard;