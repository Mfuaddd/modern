import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./index.scss"

function Nav() {
  return (
    <nav className='nav'>
        <ul className="nav__bar">
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
            <li><a href="/#">Pricing</a></li>
            <li><a href="/#">FAQ</a></li>
            <li><a href="/#">Blog <FontAwesomeIcon icon={ faCaretDown } /></a></li>
            <li><a href="/#">Portfolio</a></li>
        </ul>
    </nav>
  )
}

export default Nav