import Header from '../../components/header/Header'
import MainSection from '../../components/mainSection/MainSection';
import useFavoriteStore from "../../store/favorites-store";
import "./favoritesPage.css";

function FavoritesPage() {
    const { favorites } = useFavoriteStore();

    return (
        <>
            <Header />
            <MainSection
                array={favorites}
                mainTitle={"YOUR FAVORITES:"}
            />
        </>
    )
}

export default FavoritesPage
