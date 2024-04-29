import FrontPage from "./pages/frontPage/FrontPage";
import { useEffect } from "react";
import useFavoriteStore from "./store/favorites-store";
import useWatchlistStore from "./store/watchlist-store";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import WatchListPage from './pages/watchListPage/WatchListPage';
import DetailsPage from "./pages/detailsPage/DetailsPage";
import SearchPage from "./pages/searchPage/SearchPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  // Importerar från både watchlistStore och favoriteStore. useFavoriteStore() returnera ett objekt.
  // Vi hämtar enbart nycklarna setFavorites och setWatchlist.
  const { setFavorites } = useFavoriteStore();
  const { setWatchlist } = useWatchlistStore();


  // useEffect kör sin kod enbart när det som är skrivet i dependancy array ändras. Om dependency-array lämnas tom så körs koden enbart när sidan laddas om.
  // Då useState variabler inte har minne om du laddar om sidan. Så hämtar vi informationen från localStorage.
  useEffect(() => {

    const savedFavorites = localStorage.getItem("favorites");
    const savedWatchlist = localStorage.getItem("watchlist");

    if (savedFavorites) {
      // session- och localStorage sparar sin information i strängform. Så för att kunna använda array-metoder behöver vi göra en parse.
      setFavorites(JSON.parse(savedFavorites));

    }
    if (savedWatchlist) {

      setWatchlist(JSON.parse(savedWatchlist));
    }

  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
        <Route path="/WatchList" element={<WatchListPage />} />
        <Route path="/detailspage/:id" element={<DetailsPage />} />
        <Route path="/SearchPage/" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
