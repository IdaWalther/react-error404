import MovieCard from "../movieCard/MovieCard"
import "./mainSection.css"

function MainSection({array, mainTitle}) {

  return (
    <main className="card-section">
    <h1 className="card-section__title">{mainTitle.toUpperCase()}</h1>
    {array.map(item => {
        return (
            <MovieCard
                title={item.title}
                poster={item.poster}
                filmToHandle={item}
                key={item.imdbid}
                imdbid={item.imdbid}
            />)
    })}

</main>
  )
}

export default MainSection