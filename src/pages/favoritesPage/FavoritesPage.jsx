import MainSection from '../../components/mainSection/MainSection';
import useFavoriteStore from "../../store/favorites-store";

function FavoritesPage() {
    //Importerar nyckeln favorites från useFavoriteStore.
    const { favorites } = useFavoriteStore();

    return (
        <>
            {/* Skickar med en array som prop till MainSection. I det här fallet är arrayen favorites. Skickar också med en sträng för att sätta h1-elementet */}
            <MainSection
                array={favorites}
                mainTitle={"YOUR FAVORITES:"}
            />
        </>
    )
}

export default FavoritesPage
