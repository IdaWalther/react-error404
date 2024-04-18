import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/mainSection/MainSection'
import useSearchStore from '../../store/search-store';

function SearchPage() {
    const { movies } = useSearchStore();

    return (
        <>
            <Header />
            <MainSection
                array={movies}
                mainTitle={"Search results:"}
            />
        </>
    )
}

export default SearchPage
