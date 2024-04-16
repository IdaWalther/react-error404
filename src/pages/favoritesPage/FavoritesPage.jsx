import React from 'react'
import Header from '../../components/header/Header'
import useFavoriteStore from "../../store/favorites-store";
import MovieCard from '../../components/movieCard/MovieCard';
import "./favoritesPage.css";

function FavoritesPage() {
    const { favorites } = useFavoriteStore();

    const mockFavorites = [
        {
            Title: "The Lord of the Rings: The Fellowship of the Ring",
            Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
            imdbID: "arsar"
        },
        {
            Title: "Jaws",
            Poster: "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            imdbID: "brsar"
        },
        {
            Title: "Gremlins",
            Poster: "https://m.media-amazon.com/images/M/MV5BZDNlZWYyNTctMDk0Ni00MGI2LWFlOTQtY2M0YWZkZDY4ZjJiXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
            imdbID: "crear"
        }
    ];
    localStorage.setItem("favorites", JSON.stringify(mockFavorites))

    return (
        <>
            <Header />
            <main className="favorites">
                <h1 className="favorites__headtitle">YOUR FAVORITES:</h1>
                {favorites.map(favorite => {
                    return (
                        <MovieCard
                            title={favorite.Title}
                            poster={favorite.Poster}
                            key={favorite.imdbID}
                        />)
                })}

            </main>
        </>
    )
}

export default FavoritesPage
