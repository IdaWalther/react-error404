

function MovieCard({poster, title, key}) {
  return (
    <figure className="movie-card" key={key}>
        <img src={poster} alt={`Poster of the movie ${title}`} className="movie-card__poster" />
        <figcaption className="movie-card__title">{title}</figcaption>
    </figure>
  )
}

export default MovieCard