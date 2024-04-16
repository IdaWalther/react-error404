import { create } from "zustand";

const useFavoriteStore = create((set) => ({

    favorites: [],

    setFavorites: (newFavorites) => set({ favorite: newFavorites})
    

}));

export default useFavoriteStore;