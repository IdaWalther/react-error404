import Trailer from '../../components/trailer/Trailer';
import backArrow from '../../assets/back-arrow.svg';
import nextArrow from '../../assets/next-arrow.svg';
import './frontPage.css';
import useTop20Store from '../../store/top20-store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import MainSection from '../../components/mainSection/MainSection';
import Footer from '../../components/footer/Footer';

//Fischer-yates shuffle: https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f
//Tar emot datan från api genom parametern array
//Loopar igenom hela arrayen och plockar ut den sista filmen i arrayen. 
//Tar ut en ny film genom randomNumber.
//Byter plats på den båda filmerna i listan. Gör sedan samma sak med alla filmerna.
//Returnernar sedan de 5 första filmerna i den blandade arrayen. 
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let movieIndex = array[i];
        array[i] = array[randomNumber];
        array[randomNumber] = movieIndex;
    }
    return array.slice(0, 5);
}

//Hämtar API - skickar till addTop20 samt skickar datan till shuffleArray och resultatet därifrån skickar till addFiveMovie (store)
const getTop20 = (addTop20, addFiveMovies) => {
    axios.get('https://santosnr6.github.io/Data/movies.json')
        .then(response => {
            addTop20(response.data)
            addFiveMovies(shuffleArray(response.data))
        })
}


function FrontPage() {
    //Dekonstruerar useTop20Store för att använda som variabler i vår page.
    const { top20, addTop20, fiveMovies, addFiveMovies } = useTop20Store(state => ({
        top20: state.top20,
        addTop20: state.addTop20,
        fiveMovies: state.fiveMovies,
        addFiveMovies: state.addFiveMovies
    }));

    //När sidan laddas så hämtar vi top 20 samt 5 trailers
    useEffect(() => {
        getTop20(addTop20, addFiveMovies);
    }, [])

    //Kod till trailerns-slides. 
    const [activeSlide, setActivSlide] = useState(0);

    // % (modulus/remainder) används för att trailarna ska "gå runt".
    // (Om activeslide + 1 är 5 och du trycker next slide så hamnar du på 0. (Då 5 % 5 = 0))
    const nextSlide = () => {
        setActivSlide((activeSlide + 1) % fiveMovies.length);
    }

    const prevSlide = () => {
        setActivSlide((activeSlide - 1 + fiveMovies.length) % fiveMovies.length);
    }

    return (
        <div className="frontPage">
            <Header />
            <section className="carousel">
                {
                    fiveMovies.map((movie, index) => (
                        index === activeSlide ? (
                            <Trailer
                                movie={movie}
                                trailer={movie.trailer_link}
                                key={index}
                            />
                        ) : null
                    ))
                }
                <button className="btnNext" onClick={nextSlide}>
                    <img src={nextArrow} alt="Next arrow" />
                </button>
                <button className="btnPrev" onClick={prevSlide}>
                    <img src={backArrow} alt="previous arrow" />
                </button>
            </section>
            <MainSection
                array={top20}
                mainTitle={"TOP 20 LIST:"}
            />
            <Footer />
        </div>
    );
}

export default FrontPage;