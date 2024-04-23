import { create } from "zustand";

const useSearchStore = create((set) => ({
    // Fungerar som en vanlig tillståndsvariabel men setMovies gör om nycklarna i objekten till gemener.
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
    }
}));
export default useSearchStore;