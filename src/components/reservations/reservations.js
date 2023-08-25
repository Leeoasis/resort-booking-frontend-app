import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReservations } from '../../redux/features/resortReserveSlice'; 
import ResortCard from './ResortCard';

const MyReservations = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  
  const { reserve } = useSelector((state) => state.reserve);
  
  if (!reserve.length) {
    return (
      <div className="card w-50 no-reserve m-auto mt-5">
        <div className="card-body">
          <h5 className="card-title">No Reservations At The Moment</h5>
          <p className="card-text">Please make reservations by filling out the form</p>
          <div className="card-footer d-flex justify-content-between">
            <Link to="/make-reservations">
              <button type="button" className="btn btn-primary">Fill Form</button>
            </Link>
            <Link to="/home">
              <button type="button" className="btn">See Resorts</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="wrap">
      <h3 className="text-center fs-1 mt-5">
        Your Reservations
      </h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 w-75 ms-auto me-5 mt-5">
        {reserve.map((reserve) => (
          <ResortCard
            key={reserve.resId}
            resort={reserve}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReservations;