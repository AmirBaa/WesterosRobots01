import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
        <input 
        className="pa3 ba b--brown bg-light-gray"
        type='search' 
        placeholder="search Robots of Westeros" 
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;