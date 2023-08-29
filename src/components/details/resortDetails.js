import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import { fetchResort } from '../../redux/features/resortsSlice';
import '../../styles/resortDetails.css';

const ResortDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const resort = useSelector((store) => store.resorts.resort);

  useEffect(() => {
    dispatch(fetchResort(id));
  }, [dispatch, id]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container">
        <div className="rooms-container">
          <Carousel
            autoPlay
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr // means to render carousel on server-side.
            infinite
            autoPlaySpeed={3000}
            keyBoardControl
            showArrows={false}
            transitionDuration={500}
            containerClass="carousels"
          >
            {resort.photos.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt="All inclusive"
                  style={{ width: '100%', height: '60vh' }}
                />
              </div>
            ))}
          </Carousel>
          <div className="room-details">
            <div className="room-description">
              <div className="rooms">
                <h3>Rooms</h3>
                <p>
                  Most of these bedrooms have balconies with beautiful views.
                  Enjoy sitting outside, having your morning coffee and enjoying
                  the sunrise. As an additional feature, some of these bedrooms
                  are also inter-leading, for families requiring separate
                  bedrooms.
                </p>
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
                    Rooms Available
                    {' '}
                    <br />
                    <span>{resort.available_rooms}</span>
                  </li>
                  <li>
                    Max Occupancy
                    {' '}
                    <br />
                    <span>{resort.max_occupancy}</span>
                  </li>
                  <li>
                    Base Price
                    {' '}
                    <br />
                    <span>
                      $
                      {resort.base_price}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Link to={`/bookings/new/${resort.id}`} className="reserve-link">
              <button type="button" className="btn btn-primary">
                Reserve
                {' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResortDetails;
