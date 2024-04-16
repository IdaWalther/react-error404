import { useEffect } from "react"
import useFavoriteStore from "./store/favorites-store";

function App() {

  const {setFavorites} = useFavoriteStore();

  useEffect(() => {

    const savedFavorites = localStorage.getItem('favorites');

    if (savedFavorites) {

      setFavorites(JSON.parse(savedFavorites));

    }


}, []);


  return (
    <>

    </>
  )
}

export default App
