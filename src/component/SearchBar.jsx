import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div id='search-bar'>
    <HiDotsVertical id='dots'/>
<input type='search' placeholder='Search Anything' id='search-bar'/>
<FaSearch id='search-icon'/>
    </div>
  )
}

export default SearchBar