import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ResortCard = ({
  resort: {
    name, image, description, reservationDate, returningDate, city, resId,
  },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" height="200px" width="100%" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Reservations Date:
            {' '}
            {reservationDate}
          </li>
          <li className="list-group-item">
            Returning Date:
            {' '}
            {returningDate}
          </li>
          <li className="list-group-item">
            City of Reservations:
            {' '}
            {city}
          </li>
        </ul>
      </div>
    </div>
  );
};

ResortCard.propTypes = {
  resort: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ResortCard;