import MovieCard from "./components/movieCard/MovieCard"
import axios from "axios"

function App() {


  return (
    <>
  <MovieCard 
    poster={"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}
    title={"Jaws"}
    key={"tt0073195"}
  />
    </>
  )
}

export default App
