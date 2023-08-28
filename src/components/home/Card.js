import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({
  id, name, description, flickrImages,
}) {
  return (
    <div className="card-container" id={id}>
      <img className="card-img" src={flickrImages} width={500} alt="Resort one" />
      <Link to={`/resorts/${id}`}>
        <h4 className="card-title">{name}</h4>
      </Link>
      <hr />
      <p className="card-description">{description}</p>
      <br />
      <div className="social-group">
        <span className="social-icon"><i className="fa-brands fa-x-twitter" /></span>
        <span className="social-icon"><i className="fa-brands fa-linkedin-in" /></span>
        <span className="social-icon"><i className="fa-brands fa-github" /></span>
      </div>
      <br />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default Card;
