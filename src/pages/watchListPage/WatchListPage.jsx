import Header from '../../components/header/Header'
import useWatchlistStore from "../../store/watchlist-store";
import MovieCard from '../../components/movieCard/MovieCard';
import "./watchListPage.css";

function WatchListPage() {
    const { watchlist } = useWatchlistStore();

    return (
        <>
            <Header />
            <main className="watchlist">
                <h1 className="watchlist__headtitle">YOUR WATCHLIST:</h1>
                {watchlist.map(filmToWatch => {
                    return (
                        <MovieCard
                            title={filmToWatch.title}
                            poster={filmToWatch.poster}
                            filmToHandle={filmToWatch}
                            key={filmToWatch.imdbid}
                            imdbid={filmToWatch.imdbid}
                        />)
                })}

            </main>
        </>
    )
}

export default WatchListPage;