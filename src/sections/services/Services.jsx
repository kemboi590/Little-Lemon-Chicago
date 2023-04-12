import React from 'react'
import './service.css'
import GreekSalad from '../../assets/images/Greek salad.jpeg'
import Bruchetta from '../../assets/images/bruschetta.jpeg'
import LemmonDessert from '../../assets/images/lemon Dessert.jpeg'
function Services() {
  return (
      <div className='services-page'>
      <h1>Weekly Specials</h1>
      <div className="holdSpecials">
      <div className="singleSpecial"> 
        <div className="image">
          <img src={GreekSalad} alt="Greek Salad"   height='250px' width='300px'/>
        </div>
        <h3>Greek Salad</h3>
        <h4>$12</h4>
        <p className='foodDescription'>The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
      </div>


      <div className="singleSpecial"> 
        <div className="image">
          <img src={Bruchetta} alt="Bruchetta"  height='250px' width='300px' />
        </div>
        <h3>Bruchetta</h3>
        <h4>$22</h4>
        <p className='foodDescription'>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
      </div>


      <div className="singleSpecial"> 
        <div className="image">
          <img src={LemmonDessert} alt="Lemmon Dessert" height='250px' width='300px' />
        </div>
        <h3>Lemmon Dessert</h3>
        <h4>$15</h4>
        <p className='foodDescription'>This comes straight from grandma's secret recipe  book. Every last ingredient has been sourced and is authentic as can be imagined.</p>
        </div>
        
        </div>
    </div>
  )
}

export default Services