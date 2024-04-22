import { create } from "zustand";

// Create är en funktion som vi importerar från zustand och med hjälp av den skapar vi en store.
// Create tar en funktion som argument, ofta kallad set, som tillåter dig att ändra värden i din store.

const useFavoriteStore = create((set) => ({

    favorites: [],

    setFavorites: (newFavorites) => set({ favorites: newFavorites }),

    handleFavorite: (favoriteToHandle, event) => set((state) => {

        event.preventDefault(); // För att inte link elementet ska skicka dig vidare till details-sidan när du trycker på ikon.
        
        // Då nycklarna i ena apiet har stor bokstav och i andra har liten bokstav så gör vi om alla nycklar till små bokstäver så funktionen kan köras oberoende av vilket api.
        const convertKeysToLowerCase = (obj) => {
            const newObj = {};
            for (let key in obj) {
                newObj[key.toLowerCase()] = obj[key];
            }
            return newObj;
        };
        // Här anropas convertKeysToLowerCase och skickar med favoriteToHandle objektet.
        const favoriteToHandleLowercased = convertKeysToLowerCase(favoriteToHandle);

        // Vi kollar om en favorite redan existerar i favorites. Some() returnerar antingen true eller false. 
        const favoriteExists = state.favorites.some(favorite => favorite.imdbid.toLowerCase() === favoriteToHandleLowercased.imdbid.toLowerCase());

        let updatedFavorites;

        // Om filmen redan existerar i favorites så returneras allt utom den redan existerande filmen.
        if (favoriteExists) {
            updatedFavorites = state.favorites.filter(favorite => favorite.imdbid.toLowerCase() !== favoriteToHandleLowercased.imdbid.toLowerCase());
        } else {
            // Annars läggs den till.
            updatedFavorites = [...state.favorites, { ...favoriteToHandleLowercased }];
        }               
        // Då vi behöver ha minne om sidan laddas om så behöver också vår localStorage att få samma uppdatering.
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        // Värdet av favorites skrivs över och får värdet av updatedFavorites.
        return { favorites: updatedFavorites };

    }),

}));

export default useFavoriteStore;