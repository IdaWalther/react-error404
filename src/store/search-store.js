import { create } from "zustand";

const useSearchStore = create((set) => ({
    movies: [],
    setMovies: (newMovies) => {
        const transformedMovies = newMovies.map((movie) => {
            const lowerCasedMovie = {};
            for (const key in movie) {
                lowerCasedMovie[key.toLowerCase()] = movie[key];
            }
            return lowerCasedMovie;
        });
        set({ movies: transformedMovies });
    },
}));
export default useSearchStore;