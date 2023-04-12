import React from 'react'
import potrait from '../../assets/images/chicagostaff.jpg'

const MoreHeader = () => {
  return (
    <div>
      <header>
        <div className='contain__header'>
          <div className='intropage'>
            <h2>Little lemmon <br/> Chicago</h2>
                      <p>Little Lemon is a charming local bistro, that serves simple food and classic <br />
                          cocktails in a casual but lively environment. It was founded by brothers, Mario <br />
                          and Adrian who learnt the secrets of making a good meal from their grandma!</p>
          </div>

          <div className='img_potarit'>
            <img src={potrait} alt="potrait" />
          </div>
        </div>
          </header>
    </div>
  )
}

export default MoreHeader