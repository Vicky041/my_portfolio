import React from 'react'
import './header.css'
import CTA from './CTA'
import My from '../../assets/my-picture.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Osemeke C. Victor</h1>
      <h5 className='text-light'>FrontEnd Developer</h5>
      <CTA/>
      <HeaderSocials/>

        <div >
          <img src={My} alt='Portrait of Osemeke C. Victor' className='me'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>

      
      
    </header>
  )
}

export default Header