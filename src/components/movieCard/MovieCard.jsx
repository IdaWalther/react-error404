import "./movieCard.css"
import useFavoriteStore from "../../store/favorites-store";
import { Link } from 'react-router-dom';
import useWatchlistStore from "../../store/watchlist-store";
import { useState } from "react";

function MovieCard({ poster, title, filmToHandle, imdbid }) {
    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);
    const handleFilmToWatch = useWatchlistStore((state) => state.handleFilmToWatch);
    const { favorites } = useFavoriteStore();
    const { watchlist } = useWatchlistStore();

    const alreadyFavorite = favorites.some(favorite=> favorite.imdbid === imdbid);
    const alreadyInWatchlist = watchlist.some(watchlistItem=> watchlistItem.imdbid === imdbid);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const imageSrc = poster === "N/A" ? "/src/assets/no-picture-found.jpg" : poster;
    const favoriteTitle = alreadyFavorite ? `Remove ${title} from favorites.` : `Add ${title} to favorites.`;
    const watchlistTitle = alreadyInWatchlist ? `Remove ${title} from watchlist.` : `Add ${title} to watchlist.`;
    
    return (
        <Link to={`/detailspage/${imdbid}`}>
            <figure className="movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <figcaption className="movie-card__title">{title}</figcaption>
                <button title={favoriteTitle} aria-label={favoriteTitle} className={`movie-card__icon ${isHovered ? "" : "d-none"} ${alreadyFavorite ? "movie-card__icon--in-favorites" : "movie-card__icon--add-to-favorites"}`} onClick={(event) => handleFavorite(filmToHandle, event)}></button>
                <button title={watchlistTitle} aria-label={watchlistTitle} className={`movie-card__icon ${isHovered ? "" : "d-none"} ${alreadyInWatchlist ? "movie-card__icon--in-watchlist" : "movie-card__icon--add-to-watchlist"}`} onClick={(event) => handleFilmToWatch(filmToHandle, event)}></button>
                <img src={imageSrc} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
            </figure>
        </Link>
    )
}

export default MovieCard;