import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import MainSection from '../../components/mainSection/MainSection';
import useFavoriteStore from "../../store/favorites-store";

function FavoritesPage() {
    const { favorites } = useFavoriteStore();

    return (
        <>
            <Header />
            <MainSection
                array={favorites}
                mainTitle={"YOUR FAVORITES:"}
            />
            <Footer />
        </>
    )
}

export default FavoritesPage
