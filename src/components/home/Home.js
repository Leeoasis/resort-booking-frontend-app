import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import Card1 from './Card1';
import { fetchresorts } from '../reducers/resortsSlice';

function Home() {
  const dispatch = useDispatch();
  const { resorts, loading } = useSelector((store) => store.resorts);
  console.log(resorts)

  useEffect(() => {
    if (resorts.length === 0) {
      dispatch(fetchresorts());
    }
  }, [dispatch, resorts]);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      if (loading === 'loading') {
        return (
          <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
        );
      }

  return (
    <>
        <div className="header"><br/><br/><br/><br/>
            <h1 className="title">LATEST RESORTS</h1>
            <p className="title-info">Please choose your fav Resort</p>
        </div><br/><br/>
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {resorts.map((item) => (
              <div>
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  flickrImages={item.image}
                />
              </div>
            ))}
        </Carousel>
    </>
  )
}

export default Home