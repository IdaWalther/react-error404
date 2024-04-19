import { Link } from 'react-router-dom';
import useFavoriteStore from "../../store/favorites-store";
import useWatchlistStore from "../../store/watchlist-store";
import './nav.css'

function Nav() {
    const { favorites } = useFavoriteStore();
    const { watchlist } = useWatchlistStore();
    console.log(favorites);
    return (
        <>
            <nav>
                <Link className='nav-item' to="/FavoritesPage">
                <p className="nav-item__counter nav-item__counter--favorites">{favorites.length}</p>
                    <svg width="40" height="40" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.512 18.35L9.06196 17.03C3.91196 12.36 0.511963 9.27 0.511963 5.5C0.511963 2.41 2.93196 0 6.01196 0C7.75196 0 9.42196 0.81 10.512 2.08C11.602 0.81 13.272 0 15.012 0C18.092 0 20.512 2.41 20.512 5.5C20.512 9.27 17.112 12.36 11.962 17.03L10.512 18.35Z" fill="yellow" />
                </svg></Link>
                <Link className='nav-item' to="/WatchList">
                <p className="nav-item__counter nav-item__counter--watchlist">{watchlist.length}</p>
                    <svg width="40" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.84 0.180054L15.91 0.960054L18.65 4.50005L20.62 4.10005L19.84 0.180054ZM12.97 1.54005L11 1.93005L13.75 5.46005L15.71 5.07005L12.97 1.54005ZM8.06995 2.50005L6.09995 2.91005L8.84995 6.44005L10.81 6.05005L8.06995 2.50005ZM3.15995 3.50005L2.17995 3.69005C1.92235 3.74085 1.67731 3.842 1.45888 3.9877C1.24045 4.1334 1.05293 4.32078 0.907069 4.53911C0.761211 4.75743 0.659883 5.0024 0.608898 5.25996C0.557912 5.51753 0.55827 5.78263 0.609953 6.04005L0.999953 8.00005L5.89995 7.03005L3.15995 3.50005ZM19 10.0001V18.0001H2.99995V10.0001H19ZM21 8.00005H0.999953V18.0001C0.999953 18.5305 1.21067 19.0392 1.58574 19.4143C1.96081 19.7893 2.46952 20.0001 2.99995 20.0001H19C20.11 20.0001 21 19.1101 21 18.0001V8.00005Z" fill="yellow" />
                </svg></Link>
            </nav>
        </>
    )
}

export default Nav
