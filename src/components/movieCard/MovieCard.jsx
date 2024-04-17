import "./movieCard.css"
import useFavoriteStore from "../../store/favorites-store";
import {Link} from 'react-router-dom'; 

function MovieCard({ poster, title, favoriteToHandle, imdbid}) {
    const handleFavorite = useFavoriteStore((state) => state.handleFavorite);

    return (
        <Link to={`/details/${imdbid}`}>
            <figure className="movie-card">
                <figcaption className="movie-card__title">{title}</figcaption>
                <button className="movie-card__favorite-icon" onClick={(event) => handleFavorite(favoriteToHandle, event)}></button>
                <img src={poster} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
            </figure>
        </Link>
    )
}

export default MovieCard;