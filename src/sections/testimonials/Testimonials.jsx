import React from 'react'
import './testimonials.css'
import testimonies from './testimonies'


function Testimonials() {
  return (
    <div className="Testimony-page">
      <h1 className="page-header">Testimonies</h1>
  
  
    <div className="all-testimonies">
  {testimonies.map(({ id, review, image, userName, comment }) => {
      return (
        <div className='testimonial-card' key={id}>
    
          <div className="review-rate"> 
            <h4 className='rating'>Rating: <h4 className='rate-icons'>{review} {review} {review} {review} {review} </h4>  </h4>
            
            </div>
            <div className="reviewer-image">
              <img src={image} alt="" />
              <h3>{ userName}</h3>
            </div>
            <div className="comment">  {comment} </div>
          
        </div>
   )
  })}
    </div>
      
      </div>
 ) 
    
}

export default Testimonials