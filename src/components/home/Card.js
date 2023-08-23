import React from 'react'
import resort from '../images/resorts/resort1.jpg';

function Card() {
  return (
    <div className='card-container'>
        <img className="card-img" src={resort} width={500} alt="Resort one" />
        <h2 className='card-title'>Lux Hotel</h2>
        <hr/>
        <p className='card-description'>This resort is for you if you need a quite place to relax </p>
        <div className='social-group'>
          <span className='social-icon'><i className="fa-brands fa-x-twitter" /></span>
          <span className='social-icon'><i className="fa-brands fa-linkedin-in" /></span>
          <span className='social-icon'><i className="fa-brands fa-github" /></span>
        </div>
    </div>
  )
}

export default Card