import MovieCard from "../movieCard/MovieCard"
import "./mainSection.css"

// Dekonstruerar props och tar emot array och en mainTitle.
function MainSection({array, mainTitle}) {


  return (
    <main className="card-section">
      {/* mainTitle skrivs ut i h1-an och görs om till versaler */}
    <h1 className="card-section__title">{mainTitle.toUpperCase()}</h1>
    {/* Den array vi tar emot loopas igenom och varje item i arrayen returnerar ett MovieCard. Information skickas med som props. */}
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