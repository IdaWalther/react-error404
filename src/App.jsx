import FrontPage from "./pages/frontPage/FrontPage"

import './App.css'
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import WatchListPage from './pages/watchListPage/WatchListPage';

function App() {
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
