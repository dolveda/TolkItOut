import React from "react";

export default function Search() {

    function handleChange(e){

    }

    return (
        <form className="searchBar">
            <input 
                type="text" 
                className="searchBar"
                placeholder="Search for Books"
                onChange={handleChange}
            />
        </form>
    );
}