import { create } from "zustand";

const useFavoriteStore = create((set) => ({

    favorites: [],

    setFavorites: (newFavorites) => set({ favorites: newFavorites }),

    handleFavorite: (favoriteToHandle, event) => set((state) => {

        event.stopPropagation();
        event.preventDefault();
        
        const convertKeysToLowerCase = (obj) => {
            const newObj = {};
            for (let key in obj) {
                newObj[key.toLowerCase()] = obj[key];
            }
            return newObj;
        };

        const favoriteToHandleLowercased = convertKeysToLowerCase(favoriteToHandle);

        const existingFavoriteIndex = state.favorites.findIndex(favorite => favorite.imdbid.toLowerCase() === favoriteToHandleLowercased.imdbid.toLowerCase());
        let updatedFavorites;

        if (existingFavoriteIndex !== -1) {
            updatedFavorites = state.favorites.filter(favorite => favorite.imdbid.toLowerCase() !== favoriteToHandleLowercased.imdbid.toLowerCase());
        } else {
            updatedFavorites = [...state.favorites, { ...favoriteToHandleLowercased }];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };

    }),

}));

export default useFavoriteStore;