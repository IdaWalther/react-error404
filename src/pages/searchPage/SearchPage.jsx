import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/mainSection/MainSection'
import useSearchStore from '../../store/search-store';
import Footer from '../../components/footer/Footer';

function SearchPage() {
    const { movies } = useSearchStore();

    return (
        <>
            <Header />
            <MainSection
                array={movies}
                mainTitle={"Search results:"}
            />
            <Footer />
        </>
    )
}

export default SearchPage
