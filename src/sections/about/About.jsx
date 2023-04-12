import React from 'react'
import AboutImage from '../../assets/images/About image.jpg'
import './about.css'
function About() {
  return (
      <div>
      <h1>About Us</h1>
      <div className="contain-about">
        <div className="about-text">
          <p>
            Based in Chicago, Illinois, Little Lemon is a family owned <br /> Mediterranean restaurant, focused traditional recipes served a modern twist.
            <br />
            The chefs draw inspiration from Italian, Greek, and Turkish <br /> culture and have a menu of 12-15 items that they rotate <br /> seasonally.
            <br />
            The restaurant has a rustic and relaxed atmosphere with  <br /> moderate prices, making it a popular place for a meal any time <br /> of the day.
            <br />
            Little Lemon is owned by two Italian brothers, Mario and Adrian, <br /> who moved to the United States to pursue their shared dream of <br /> owning a restaurant.
            <br />
            To craft the menu, Mario relies on family recipes and his <br /> experience as a chef in Italy.
            <br />
            Adrian does all the marketing for the restaurant and led the <br /> effort to expand the menu beyond classic Italian to incorporate <br /> additional cuisines from the mediterranean region.
          </p>
        </div>

        <div className="about-image">
          <img src={AboutImage} alt="about little lemon" height='400px' width='470px' />
          <p>Little Lemon owners Mario and Adrian.</p>
        </div>
      </div>
    </div>
  )
}

export default About