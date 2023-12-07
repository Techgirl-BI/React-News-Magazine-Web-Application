import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/homepage'
import Aboutus from '../pages/aboutus'
import Contact from '../pages/contact'
import Errorpage from '../pages/errorpage'

function Routecomp() {
  return (
    <Routes>
        <Route path={'/'} element={<Homepage/>}/>
        <Route path={'/aboutus'} element={<Aboutus/>}/>
        <Route path={'/contactus'} element={<Contact/>}/>
        <Route path={'*'} element={<Errorpage/>}/>
    </Routes>
  )
}

export default Routecomp