import { create } from "zustand";

const useWatchlistStore = create((set) => ({

    watchlist: [],

    setWatchlist: (newWatchlist) => set({ watchlist: newWatchlist }),

    handleFilmToWatch: (filmToWatch, event) => set((state) => {

        event.stopPropagation();
        event.preventDefault();

        const convertKeysToLowerCase = (obj) => {
            const newObj = {};
            for (let key in obj) {
                newObj[key.toLowerCase()] = obj[key];
            }
            return newObj;
        };

        const filmToWatchLowercased = convertKeysToLowerCase(filmToWatch);

        const existingFavoriteIndex = state.watchlist.findIndex(item => item.imdbid.toLowerCase() === filmToWatchLowercased.imdbid.toLowerCase());
        let updatedWatchlist;

        if (existingFavoriteIndex !== -1) {
            updatedWatchlist = state.watchlist.filter(favorite => favorite.imdbid.toLowerCase() !== filmToWatchLowercased.imdbid.toLowerCase());
        } else {
            updatedWatchlist = [...state.watchlist, { ...filmToWatchLowercased }];
        }

        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        return { watchlist: updatedWatchlist };

    }),

}));

export default useWatchlistStore;

