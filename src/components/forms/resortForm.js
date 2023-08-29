import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postResorts } from '../../redux/forms/resortFormSlice';
import { fetchresorts } from '../../redux/features/resortsSlice';

const ResortForm = () => {
  const user = JSON.parse(localStorage.getItem('data'));
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.resortForm);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [availableRooms, setAvailableRooms] = useState('');
  const [maxOccupancy, setMaxOccupancy] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleResort = async (event) => {
    event.preventDefault();
    try {
      await dispatch(postResorts({
        user_id: user.id,
        name,
        address,
        image,
        description,
        phoneNumber,
        email,
        city,
        country,
        availableRooms,
        maxOccupancy,
        basePrice,
      }));
      navigate('/');
      dispatch(fetchresorts());
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h3 className="text-center m-5">Add A Resort</h3>
      <div className="container form-container form-wrap">
        <form onSubmit={handleResort}>
          {error && <p>{error}</p>}
          <div className="row mb-3">
            <div className="col-6 mb-3">
              <label htmlFor="name" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Resort Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Resort E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="phoneNumber" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(parseInt(e.target.value, 10))}
                  required
                />
              </label>
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="address" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="image" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Image Link"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="basePrice" className="form-label">
                <input
                  type="number"
                  className="form-control"
                  id="basePrice"
                  placeholder="Base Price"
                  value={basePrice}
                  onChange={(e) => setBasePrice(parseInt(e.target.value, 10))}
                  required
                />
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="city" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="country" className="form-label">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="availableRooms" className="form-label">
                <input
                  type="number"
                  className="form-control"
                  id="availableRooms"
                  placeholder="Rooms"
                  value={availableRooms}
                  onChange={(e) => setAvailableRooms(parseInt(e.target.value, 10))}
                  required
                />
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="maxOccupancy" className="form-label">
                <input
                  type="number"
                  className="form-control"
                  id="maxOccupancy"
                  placeholder="Occupancy"
                  value={maxOccupancy}
                  onChange={(e) => setMaxOccupancy(parseInt(e.target.value, 10))}
                  required
                />
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="form-label col-sm-12">
              <textarea
                type="text"
                className="form-control"
                id="description"
                placeholder="Resort Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="link">
            <button type="submit" className="btn btn-success" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add Resort'}
            </button>
            <button type="button" className="btn text-light btn-primary"><Link to="/">See Resorts</Link></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResortForm;
