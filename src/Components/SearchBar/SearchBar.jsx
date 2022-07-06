import React from "react";
import "./SearchBar.css"

const SearchBar = () => {
    return (
       <form className="search">
            <input type="text" placeholder="Search" className="searchBar"/>
            <button className="searchButton"><span class="material-symbols-outlined">search</span></button>
            <div className="searchSuggestions">
            </div>
       </form> 
    )
}

export default SearchBar