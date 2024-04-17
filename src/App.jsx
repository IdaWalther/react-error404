import FrontPage from "./pages/frontPage/FrontPage";
import { useEffect } from "react";
import useFavoriteStore from "./store/favorites-store";
import useWatchlistStore from "./store/watchlist-store";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import WatchListPage from './pages/watchListPage/WatchListPage';
import DetailsPage from "./pages/detailsPage/DetailsPage";

function App() {

  const { setFavorites } = useFavoriteStore();
  const { setWatchlist } = useWatchlistStore();

  useEffect(() => {

    const savedFavorites = localStorage.getItem("favorites");
    const savedWatchlist = localStorage.getItem("watchlist");

    if (savedFavorites) {

      setFavorites(JSON.parse(savedFavorites));

    }
    if (savedWatchlist) {

      setWatchlist(JSON.parse(savedWatchlist));
    }

  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
        <Route path="/WatchList" element={<WatchListPage />} />
        <Route path="/detailspage/:id" element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App
