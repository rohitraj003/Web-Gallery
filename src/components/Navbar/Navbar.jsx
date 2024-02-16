import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("about");

  return (
    <div className='navbar'>
    <div className="nav-logo">
        <p>Gallery</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/'>About</Link>{menu==="about"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("carousel")}}><Link style={{textDecoration:'none'}} to='/carousel'>Carousel</Link>{menu==="carousel"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("scroll")}}><Link style={{textDecoration:'none'}} to='/scroll'>Scroll</Link>{menu==="scroll"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("collage")}}><Link style={{textDecoration:'none'}} to='/collage'>Collage</Link>{menu==="collage"?<hr />:<></>}</li>
    </ul>
    </div>
  )
}

export default Navbar