import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import MainSection from '../../components/mainSection/MainSection';
import useFavoriteStore from "../../store/favorites-store";

function FavoritesPage() {
    //Importerar nyckeln favorites från useFavoriteStore.
    const { favorites } = useFavoriteStore();

    return (
        <>
            <Header />
            {/* Skickar med en array som prop till MainSection. I det här fallet är arrayen favorites. Skickar också med en sträng för att sätta h1-elementet */}
            <MainSection
                array={favorites}
                mainTitle={"YOUR FAVORITES:"}
            />
            <Footer />
        </>
    )
}

export default FavoritesPage
