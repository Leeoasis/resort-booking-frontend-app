import React from 'react'
import resort from '../images/resorts/resort2.jpg';

function Card1() {
  return (
    <div className='card-container'>
        <img className="card-img" src={resort} width={500} alt="Resort one" />
        <h4 className='card-title'>Lux Hotel</h4>
        <hr/>
        <p className='card-description'>This resort is for you if you need a quite place to relax </p>
        <br />
        <div className='social-group'>
          <span className='social-icon'><i className="fa-brands fa-x-twitter" /></span>
          <span className='social-icon'><i className="fa-brands fa-linkedin-in" /></span>
          <span className='social-icon'><i className="fa-brands fa-github" /></span>
        </div><br />
    </div>
  )
}

export default Card1