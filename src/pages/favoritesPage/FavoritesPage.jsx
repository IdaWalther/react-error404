import Header from '../../components/header/Header'
import useFavoriteStore from "../../store/favorites-store";
import MovieCard from '../../components/movieCard/MovieCard';
import "./favoritesPage.css";

function FavoritesPage() {
    const { favorites } = useFavoriteStore();

    return (
        <>
            <Header />
            <main className="favorites">
                <h1 className="favorites__headtitle">YOUR FAVORITES:</h1>
                {favorites.map(favorite => {
                    return (
                        <MovieCard
                            title={favorite.title}
                            poster={favorite.poster}
                            filmToHandle={favorite}
                            key={favorite.imdbid}
                        />)
                })}

            </main>
        </>
    )
}

export default FavoritesPage
