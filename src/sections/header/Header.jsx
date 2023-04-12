import React from 'react'
import './header.css'
import Potrait from '../../assets/images/foodpotrait.jpg'
function Header() {
  return (
      <div>
      <header>
        <div className='contain__header'>
          <div className='intropage'>
            <h2>Little lemmon <br/> Chicago</h2>
            <p>We are a family owned Mediterranean restorant, located on Maldove street in <br />
              Chicago, illionsis. We focus on traditional recipes served with modern twists</p>
            <button className='btn'>Reserve Table</button>
          </div>

          <div className='img_potarit'>
            <img src={Potrait} alt="potrait" />
          </div>
          

     
        </div>
          </header>
    </div>
  )
}

export default Header