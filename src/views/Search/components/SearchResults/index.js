import React from 'react';
import SearchResultItem from './SearchResultsItem';

const SearchResults = ({ results, isSearching }) => {
    return (
        <div className="container-results">
            {/* {!results?.lenght && isSearching && <p>No existen resultados</p>} */}
            {results?.map((value) => {
                return <SearchResultItem key={value.id} {...value} />
            }
            )}
        </div>
    );
}

export default SearchResults;