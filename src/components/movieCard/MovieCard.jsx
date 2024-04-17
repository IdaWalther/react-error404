import "./movieCard.css"
import useFavoriteStore from "../../store/favorites-store";
import {Link} from 'react-router-dom'; 
import useWatchlistStore from "../../store/watchlist-store";

function MovieCard({ poster, title, favoriteToHandle, imdbid}) {
    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);
    const handleFilmToWatch = useWatchlistStore((state) => state.handleFilmToWatch);

    return (
        <Link to={`/detailspage/${imdbid}`}>
            <figure className="movie-card">
                <figcaption className="movie-card__title">{title}</figcaption>
                <button className="movie-card__icon movie-card__icon--favorite" onClick={(event) => handleFavorite(filmToHandle, event)}></button>
                <button className="movie-card__icon movie-card__icon--watchlist" onClick={(event) => handleFilmToWatch(filmToHandle, event)}></button>
                <img src={poster} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
            </figure>
        </Link>
    )
}

export default MovieCard;