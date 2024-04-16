import { create } from "zustand";

const useFavoriteStore = create((set) => ({

    favorite: [],

    setFavorite: (newFavorite) => set({ favorite: newFavorite}),
    

}))

export default useFavoriteStore;