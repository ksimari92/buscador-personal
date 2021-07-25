import React, {
    useState
} from 'react';
import './style.css';

const SearchBox = ({ onSearch, onClose, isSearching }) => {

    const [search, setSearch] = useState("");

    const onHanleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearchClick = () => {
        setSearch('');
        onClose();
    }

    return (<div className='search-box'>
        <h2 className='search-box-title' > Buscador de personal </h2>
        <div className='search-box-bottom' >
            <input value={search}
                onChange={onHanleChange}
                placeholder="Buscar..."
                className='search-box-input' />
            <button onClick={() => onSearch(search)} disabled={!search.length}> Buscar </button>
            {isSearching && <button onClick={handleSearchClick} > Cerrar </button>}
        </div>
    </div>

    );
}

export default SearchBox;