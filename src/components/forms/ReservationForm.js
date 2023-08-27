import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postReservation } from '../../redux/features/resortReserveSlice';

const ReservationForm = () => {
  const navigate = useNavigate();
  const {
    reservation: { isLoading },
    resorts: { resorts, resortSelected },
  } = useSelector((store) => store);
  const user = JSON.parse(localStorage.getItem('data'));
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [returningDate, setReturningDate] = useState('');
  const [resortId, setResortId] = useState(resortSelected ? resortSelected.id : '');
  const [error, setError] = useState('');
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
  ];
  const handleReservation = async (event) => {
    event.preventDefault();
    const today = new Date();
    const selectedReservationDate = new Date(reservationDate);

    if (selectedReservationDate < today) {
      setError('Reservation date cannot be in the past.');
      return;
    }
    const selectedReturningDate = new Date(returningDate);
    if (selectedReturningDate <= today || selectedReturningDate <= selectedReservationDate) {
      setError('Returning date must be in the future and after the reservation date.');
      return;
    }
    setError('');
    await dispatch(postReservation({
      user_id: user.id,
      resort_id: resortId,
      reservation_date: reservationDate,
      returning_date: returningDate,
      selected_city: selectedCity,
    }));
    navigate('/reservations');
  };

  return (
    <div className="form-wrap">
      <h3>Reserve A Resort</h3>
      <form onSubmit={handleReservation}>
        {error && <small className="fs-5, text-danger">{error}</small>}
        <label className="form-label" htmlFor="city">
          Select your city
          <select
            className="form-control"
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">City of reservation</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label" htmlFor="date">
          Reservation Date
          <input
            className="form-control"
            type="date"
            id="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </label>
        <label className="form-label" htmlFor="date-return">
          Date of Return
          <input
            className="form-control"
            type="date"
            id="date-return"
            value={returningDate}
            onChange={(e) => setReturningDate(e.target.value)}
          />
        </label>
        <label className="form-label" htmlFor="resort">
          Select your resort
          <select
            className="form-control"
            id="resort"
            value={resortId}
            onChange={(e) => setResortId(parseInt(e.target.value, 10))}
          >
            {!resortSelected ? <option value="">Select a resort</option> : <option value={resortSelected.id}>{resortSelected.name}</option>}
            {resorts.map((resort) => (
              <option key={resort.id} value={resort.id}>
                {resort.name}
              </option>
            ))}
          </select>
        </label>

        <div className="link mt-2 d-flex justify-content-between w-100">
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Reserving...' : 'Reserve'}
          </button>
          <Link to="/reservations" className="btn btn-secondary">Reservations</Link>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
