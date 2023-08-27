import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postResorts } from '../../redux/forms/resortFormSlice';
import { fetchResorts } from '../../redux/features/resortSlice';

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
      dispatch(fetchResorts());
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-wrap">
      <h3>Add A Resort</h3>
      <form onSubmit={handleResort}>
        {error && <p>{error}</p>}
        <label htmlFor="name" className="form-label">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter the resort name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="address" className="form-label">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter the resort address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label htmlFor="image" className="form-label">
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter the resort image link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label htmlFor="phoneNumber" className="form-label">
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter the resort phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(parseInt(e.target.value, 10))}
          />
        </label>
        <label htmlFor="email" className="form-label">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter the resort email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="city" className="form-label">
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter the resort city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label htmlFor="country" className="form-label">
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter the resort country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label htmlFor="availableRooms" className="form-label">
          <input
            type="number"
            className="form-control"
            id="availableRooms"
            placeholder="Enter the available rooms"
            value={availableRooms}
            onChange={(e) => setAvailableRooms(parseInt(e.target.value, 10))}
          />
        </label>
        <label htmlFor="maxOccupancy" className="form-label">
          <input
            type="number"
            className="form-control"
            id="maxOccupancy"
            placeholder="Enter the maximum occupancy"
            value={maxOccupancy}
            onChange={(e) => setMaxOccupancy(parseInt(e.target.value, 10))}
          />
        </label>
        <label htmlFor="basePrice" className="form-label">
          <input
            type="number"
            className="form-control"
            id="basePrice"
            placeholder="Enter the base price"
            value={basePrice}
            onChange={(e) => setBasePrice(parseInt(e.target.value, 10))}
          />
        </label>
        <label htmlFor="description" className="form-label">
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter the resort description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="link mt-2 d-flex justify-content-between w-100">
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Resort'}
          </button>
          <Link to="/" className="btn text-light btn-secondary">See Resorts</Link>
        </div>
      </form>
    </div>
  );
};

export default ResortForm;
