import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import avatar from "../navBarImages/avatar.png"
function User() {
  return (
    <div id='user'>
        <img src={avatar}/>
        <span>Behzad</span>
        <IoIosArrowDown/>
    </div>
  )
}

export default User