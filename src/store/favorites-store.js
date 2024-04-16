import { create } from "zustand";

const useFavoriteStore = create((set) => ({

    favorites: [],

    setFavorites: (newFavorites) => set({ favorites: newFavorites})
    

}));

export default useFavoriteStore;