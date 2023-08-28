import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ResortDetails from './resortDetails';
import { fetchResort } from '../../redux/resortsSlice';
import '../../styles/detailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const resort = useSelector((store) => store.resorts.resort);

  useEffect(() => {
    dispatch(fetchResort(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="resort-container">
        <h1>{resort.name}</h1>
        <div className="image-container">
          <img src={resort.image_url} alt="All inclusive" style={{ width: '100%', height: '65vh' }} />
        </div>
        <div className="details-container">
          <div className="resort-description">
            <p className="col-md-5">
              <span>Home</span>
              AWAY FROM HOME
            </p>
            <p className="col-md-6">{resort.description}</p>
          </div>
          <ResortDetails />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
