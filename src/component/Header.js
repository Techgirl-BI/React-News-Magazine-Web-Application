import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Bookmark from './Bookmark'
import User from './User'
import '../component/header.css'
function Header() {
  return (
    <div id="header">
        <Navbar/>
        <SearchBar/>
        <User/>
        <Bookmark/>
    </div>
  )
}

export default Header