import React from "react";
import './Search.css';

export default function Search({ term, searchKeyword }) {

    function handleChange(e){
        searchKeyword(e.target.value);
    }

    return (
        <form className="searchBar">
            <input 
                type="text" 
                className="searchBar"
                placeholder="Search for Books"
                value={term}
                onChange={handleChange}
            />
        </form>
    );
}