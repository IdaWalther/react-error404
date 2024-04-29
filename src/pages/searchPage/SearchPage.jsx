import React from 'react'
import MainSection from '../../components/mainSection/MainSection'
import useSearchStore from '../../store/search-store';

function SearchPage() {
    const { movies } = useSearchStore();

    return (
        <>
            <MainSection
                array={movies}
                mainTitle={"Search results:"}
            />
        </>
    )
}

export default SearchPage
