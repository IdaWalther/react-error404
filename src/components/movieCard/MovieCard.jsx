import "./movieCard.css"
import useFavoriteStore from "../../store/favorites-store";

function MovieCard({ poster, title, favoriteToHandle}) {
    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);

    return (
        <figure className="movie-card">
            <figcaption className="movie-card__title">{title}</figcaption>
            <button className="movie-card__favorite-icon" onClick={(event) => handleFavorite(favoriteToHandle, event)}></button>
            <img src={poster} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
        </figure>
    )
}

export default MovieCard;