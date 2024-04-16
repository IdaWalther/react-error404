import "./movieCard.css"

function MovieCard({ poster, title }) {
    return (
        <figure className="movie-card">
            <figcaption className="movie-card__title">{title}</figcaption>
            <img src={poster} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
        </figure>
    )
}

export default MovieCard;