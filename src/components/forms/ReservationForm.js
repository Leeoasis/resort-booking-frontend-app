import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/forms.css';
import { postReservation } from '../../redux/features/resortReserveSlice';
import { fetchresorts } from '../../redux/features/resortsSlice';

const ReservationForm = () => {
  const navigate = useNavigate();
  const {
    reservation: { isLoading },
    resorts: { resortSelected },
  } = useSelector((store) => store);
  const user = JSON.parse(localStorage.getItem('data'));
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [returningDate, setReturningDate] = useState('');
  const [resortId, setResortId] = useState(resortSelected ? resortSelected.id : '');
  const [error, setError] = useState('');
  const { resorts } = useSelector((store) => store.resorts);

  useEffect(() => {
    dispatch(fetchresorts());
  },
  [dispatch]);
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
    <>
      <h3 className="text-center m-5">Reserve A Resort</h3>
      <div className="form-container">
        <form onSubmit={handleReservation}>
          {error && <small className="d-flex, fs-5, text-danger">{error}</small>}
          <div className="mb-3 row">
            <label className="form-label mb-3 col-sm-12" htmlFor="city">
              Select your city
              <select
                className="form-select select-input mb-3"
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option className="form-control mb-3" value="">City of reservation</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mb-3 row">
            <label className="form-label" htmlFor="date">
              Reservation Date
              <input
                className="form-control date-input col-sm-12"
                type="date"
                id="date"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3 row">
            <label className="form-label col-sm-12" htmlFor="date-return">
              Date of Return
              <input
                className="form-control"
                type="date"
                id="date-return"
                value={returningDate}
                onChange={(e) => setReturningDate(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3 row">
            <label className="form-label col-sm-12" htmlFor="resort">
              Select your resort
              <select
                className="form-control form-select"
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
          </div>

          <div className="link">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Reserving...' : 'Reserve'}
            </button>
            <button type="button" className="btn btn-success">
              <Link to="/reservations">Reservations</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
