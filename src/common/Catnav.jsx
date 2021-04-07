import React, { Fragment, useEffect  } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../_actions';

export default function Catnav() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const dispatch = useDispatch();
  const { loading, error, categories} =useSelector(state => state.categories);
  useEffect(() => {
      dispatch(categoryActions.getcategoryAll());
      
  }, []);
  
  return (
    <Fragment>
          <div className="container">
              <div className="cat-slider">
              <Slider {...settings}>
                {categories && categories.map((category, index) =>
                  <div  key={category.id} className="cat-item px-1 py-3">
                  <a className="bg-white rounded d-block p-2 text-center shadow-sm" href="trending.html">
                      <img alt="#" src={ category.media[0].url } className="img-fluid mb-2" />
                      <p className="m-0 small">{category.name}</p>
                  </a>
                </div>
                )}
              </Slider>
            </div>
          </div>
    </Fragment>
  );
}