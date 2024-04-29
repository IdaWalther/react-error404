import useWatchlistStore from "../../store/watchlist-store";
import MainSection from '../../components/mainSection/MainSection';

function WatchListPage() {
    const { watchlist } = useWatchlistStore();

    return (
        <>
            <MainSection
                array={watchlist}
                mainTitle={"your watchlist:"}
            />
        </>
    )
}

export default WatchListPage;