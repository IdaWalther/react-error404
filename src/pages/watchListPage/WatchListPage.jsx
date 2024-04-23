import Header from '../../components/header/Header'
import useWatchlistStore from "../../store/watchlist-store";
import MainSection from '../../components/mainSection/MainSection';
import Footer from '../../components/footer/Footer';

function WatchListPage() {
    const { watchlist } = useWatchlistStore();

    return (
        <>
            <Header />
            <MainSection
                array={watchlist}
                mainTitle={"your watchlist:"}
            />
            <Footer />
        </>
    )
}

export default WatchListPage;