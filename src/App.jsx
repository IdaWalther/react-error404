import FrontPage from "./pages/frontPage/FrontPage"
import { useEffect } from "react"
import useFavoriteStore from "./store/favorites-store";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import WatchListPage from './pages/watchListPage/WatchListPage';

function App() {

  const {setFavorites} = useFavoriteStore();

  useEffect(() => {
    
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites) {

      setFavorites(JSON.parse(savedFavorites));

    }

}, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
        <Route path="/WatchList" element={<WatchListPage />} />
      </Routes>
    </>
  )
}

export default App
