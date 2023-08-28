import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReservations } from '../../redux/features/resortReserveSlice';
import { fetchresorts } from '../../redux/features/resortsSlice';
import ResortCard from './ResortCard';

const MyReservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
    dispatch(fetchresorts());
  }, [dispatch]);

  const { resorts: { resorts }, reservation: { reserve } } = useSelector((store) => store);

  const resortData = reserve.map((res) => {
    const reserveResorts = resorts.find((resort) => resort.id === res.resort_id);
    if (reserveResorts) {
      return {
        ...reserveResorts,
        resId: res.id,
        reservationDate: res.reservation_date,
        returningDate: res.returning_date,
        city: res.selected_city,
      };
    }
    return reserveResorts || [];
  });

  const reserveComponents = resortData.map((resort) => (
    <ResortCard
      resort={resort}
      reservation={reserve}
      key={resort.id}
    />
  ));
  if (!resortData.length) {
    return (
      <div className="card w-50 no-reserve m-auto mt-5">
        <div className="card-body">
          <h5 className="card-title">No Reservations At The Moment</h5>
          <p className="card-text">Please make Reservations by Filling Out the Form</p>
          <div className="card-footer d-flex justify-content-between">
            <Link to="/add-reservation">
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
        {reserveComponents}
      </div>
    </div>
  );
};

export default MyReservations;
