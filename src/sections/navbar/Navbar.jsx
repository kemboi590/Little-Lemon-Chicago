import React, {useState}from 'react'
import './navbar.css'
import Logo from '../../assets/images/littleLemon.png'
import { FaBars } from 'react-icons/fa';

import data from './data'



function Navbar() {
  const [isOpen, setisOpen] =useState(false)
  return (
    <nav>
      <div className='Container__Nav'>
     
        <a href="index.html" className='logo'>
          <img src={Logo} alt="logo" />
        </a>
        <ul className={`navlist ${isOpen ?'show': '' }`}>
          {
            data.map(item => <li id={item.id}><a href="item.link">{item.title }</a></li>) 
          }
        </ul>
        <FaBars className="nav_humburger" onClick={()=> setisOpen(!isOpen)} />

      </div>
      </nav>
  )
}

export default Navbar