import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import { fetchresorts } from '../../redux/features/resortsSlice';

function Home() {
  const dispatch = useDispatch();
  const { resorts, loading } = useSelector((store) => store.resorts);

  useEffect(() => {
    dispatch(fetchresorts());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  if (loading === 'loading') {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  return (
    <>
      <div className="header">
        <br />
        <br />
        <br />
        <br />
        <h1 className="title">LATEST RESORTS</h1>
        <p className="title-info">Please choose your fav Resort</p>
      </div>
      <br />
      <br />
      <Carousel
        swipeable
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {resorts.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
              name={item.name}
              description={item.description}
              flickrImages={item.image}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Home;
