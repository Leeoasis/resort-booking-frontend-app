import React from 'react'
import resort from '../images/resorts/resort1.jpg';

function Card({id, name, description, flickrImages}) {
  return (
    <div className='card-container' id={id}>
        <img className="card-img" src={flickrImages} width={500} alt="Resort one" />
        <h4 className='card-title'>{name}</h4>
        <hr/>
        <p className='card-description'>{description}</p>
        <br />
        <div className='social-group'>
          <span className='social-icon'><i className="fa-brands fa-x-twitter" /></span>
          <span className='social-icon'><i className="fa-brands fa-linkedin-in" /></span>
          <span className='social-icon'><i className="fa-brands fa-github" /></span>
        </div><br />
    </div>
  )
}

export default Card