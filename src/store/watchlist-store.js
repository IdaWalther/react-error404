import { create } from "zustand";

// Fungerar precis som favorite-store. Enbart bytt ut favorite till watchlist.
const useWatchlistStore = create((set) => ({

    watchlist: [],

    setWatchlist: (newWatchlist) => set({ watchlist: newWatchlist }),

    handleFilmToWatch: (filmToWatch, event) => set((state) => {

        event.preventDefault();

        const convertKeysToLowerCase = (obj) => {
            const newObj = {};
            for (let key in obj) {
                newObj[key.toLowerCase()] = obj[key];
            }
            return newObj;
        };

        const filmToWatchLowercased = convertKeysToLowerCase(filmToWatch);

        const itemToWatchExists = state.watchlist.some(item => item.imdbid.toLowerCase() === filmToWatchLowercased.imdbid.toLowerCase());
        let updatedWatchlist;

        if (itemToWatchExists) {
            updatedWatchlist = state.watchlist.filter(watchlistItem => watchlistItem.imdbid.toLowerCase() !== filmToWatchLowercased.imdbid.toLowerCase());
        } else {
            updatedWatchlist = [...state.watchlist, { ...filmToWatchLowercased }];
        }

        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        return { watchlist: updatedWatchlist };

    }),

}));

export default useWatchlistStore;

