import React from 'react'
import "./componentsStyle/NavBar.css"
import logo from "../img/Marvel_Logo.svg.png"

export default function NavBar() {
  return (
    <header>
        <nav>
          <a href='/'>
            <img src={logo} alt=""  className='navbar'/>
          </a>
        </nav>
    </header>
  )
}
