import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults'
import './style.css'
// import data from '../../data/users.json';

export default function Search() {
    const [estaArriba, setEstaArriba] = useState(false);
    const [userData, setUserData] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                console.error(err);
            }
        };

        getUsers().catch(null);
    }, []);

    const handleCloseClick = () => {
        setEstaArriba(false);
        setResults([]);
    }

    const handleSearchClick = (search) => {
        setEstaArriba(true);
        // el signo de interrogacion valida si existe el metodo .lenght
        if (userData?.length) {
            const searchMin = search.toLocaleLowerCase();
            const filteredData = userData.filter((value) => {
                return (
                    value.name.toLocaleLowerCase().includes(searchMin) ||
                    value.phone.toLocaleLowerCase().includes(searchMin) ||
                    value.email.toLocaleLowerCase().includes(searchMin) ||
                    value.username.toLocaleLowerCase().includes(searchMin)
                );
            })
            console.log(filteredData);
            setResults(filteredData);
        }
    }




    return (
        <div className={`search ${estaArriba ? 'search-top' : 'search-center'}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={estaArriba} />
            <SearchResults results={results} isSearching={estaArriba} />
        </div>

    );
}
