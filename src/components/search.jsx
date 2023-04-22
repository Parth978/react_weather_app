import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import axios from "axios";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleChange = (updatedSearch) => {
        setSearch(updatedSearch);
        onSearchChange(updatedSearch);
    }

    const loadOptions = (inputValue) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fb763afeb3msha7c01f76c8c96b2p133015jsnaf3e094d6cc0',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        
        return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`, options)
            .then(response => response.json())
            .then((response) => {
                return {
                  options: response.data.map((city) => {
                    return {
                      value: `${city.latitude} ${city.longitude}`,
                      label: `${city.name}, ${city.countryCode}`,
                    };
                  }),
                };
              })
            .catch(err => console.error(err));
    }
    return (
        <>
            <AsyncPaginate
                placeholder="Enter your City"
                debounceTimeout={600}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
        </>
    )
}

export default Search;