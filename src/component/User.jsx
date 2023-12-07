import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import avatar from "../navBarImages/avatar.png"
function User() {
  return (
    <div id='user'>
        <img alt="avatar" src={avatar} id='avatar'/>
        <span id='user-name'>Behzad</span>
        <IoIosArrowDown id='arrow-down'/>
    </div>
  )
}

export default User