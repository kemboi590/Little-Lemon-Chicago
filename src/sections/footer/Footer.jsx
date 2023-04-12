import React from 'react'

import './footer.css'
function Footer() {
  return (

      <div className="my-footer">
        <div className="footer-logo">
          
        </div>
        <div className="footer-navigation">
          <h2>Welcome</h2>
          <ul>
            <li> <a href="/">Home </a></li>
            <li> <a href="/">About </a></li>
            <li> <a href="/">Menu </a></li>
            <li> <a href="/">Reservation </a></li>
            <li> <a href="/">Log in </a></li>
          </ul>
        </div>
        <div className="footer-contacts">
        <h2>Contact us</h2>
        <ul>
            <li>Address : 22 Chicago Way, IL, Chicago</li>
            <li>Phone Number: +254768353360</li>
            <li>Email: bkemboi590@gmail.com</li>
          </ul>
        </div>
        <div className="footer-social-links">
          <h2>Social Media Links</h2>
          <ul>
            <li> <a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">LinkedIn</a></li>
            <li><a href="/">Website</a></li>
          </ul>
        </div>
          </div>
    
  )
}

export default Footer