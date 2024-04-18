import Header from '../../components/header/Header'
import useWatchlistStore from "../../store/watchlist-store";
import "./watchListPage.css";
import MainSection from '../../components/mainSection/MainSection';

function WatchListPage() {
    const { watchlist } = useWatchlistStore();

    return (
        <>
            <Header />
            <MainSection
                array={watchlist}
                mainTitle={"your watchlist:"}
            />
        </>
    )
}

export default WatchListPage;