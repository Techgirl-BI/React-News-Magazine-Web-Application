import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div id='search-bar'>
    <HiDotsVertical/>
<input type='search' placeholder='search anything'/>
<FaSearch/>
    </div>
  )
}

export default SearchBar