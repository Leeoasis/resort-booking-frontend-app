import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchResort } from '../../redux/features/resortSlice';
import { update } from '../../redux/sessions/auth';

const ResortDetails = () => {
  const { resortId } = useParams();
  const dispatch = useDispatch();
  const resort = useSelector((state) => state.resorts.resort);

  useEffect(() => {
    dispatch(update());
    dispatch(fetchResort(resortId));
  }, [dispatch, resortId]);

  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={resort.image} alt={resort.name} />
        </div>
        <div className="details-container">
          <h1>{resort.name}</h1>
          <p>{resort.description}</p>
          <div className="rooms-details">
            <div className="rooms">
              <h3>Rooms</h3>
              <ul>
                <li>Classic Room</li>
                <li>Deluxe Room</li>
                <li>Suite/Family Room</li>
              </ul>
            </div>
            <div className="details">
              <h3>Details</h3>
              <ul>
                <li>
                  Rooms Available:
                  {' '}
                  <span>{resort.available_rooms}</span>
                </li>
                <li>
                  Max Occupancy:
                  {' '}
                  <span>{resort.max_occupancy}</span>
                </li>
                <li>
                  Price:
                  {' '}
                  <span>{resort.base_price}</span>
                </li>
              </ul>
            </div>
          </div>
          <Link to={`/bookings/new/${resort.id}`}>
            <button type="button" className="btn btn-primary">
              Reserve
              {' '}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResortDetails;
