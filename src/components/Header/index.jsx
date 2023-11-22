import React from 'react'
import Nav from './Nav'
import "./index.scss"

function Header() {
  return (
    <header className='header'>
        <div className="header__top">
            <div className="header__top__left">
                <a href="/#">Start Bootstrap</a>
            </div>
            <div className="header__top__right">
                <Nav></Nav>
            </div>
        </div>
        <div className="header__bottom">
            <div className="header__bottom__left">
                <h1>A Bootstrap 5 template <br/> for modern businesses</h1>
                <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                <div className="header__bottom__left__btns">
                    <a href="/#">Get Started</a>
                    <a href="/#">Learn More</a>
                </div>
            </div>
            <div className="header__bottom__right">
                <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header