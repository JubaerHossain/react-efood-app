import React, { Fragment, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { restaurantActions } from '../_actions';
import { localAddres } from "../_helpers/localAddres";
import parse from 'html-react-parser';

export default function Trending(props) {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
          <Fragment>
              <div className="pt-4 pb-2 title d-flex align-items-center">
                  <h5 className="m-0">{ props.title }</h5>
                  <a className="font-weight-bold ml-auto" href="trending.html">View all <i className="feather-chevrons-right" /></a>
              </div>
              <div className="trending-slider"> 
                 <Slider {...settings}>
                 {props.restaurants && props.restaurants.map((data, index) => 
                   <div className="osahan-slider-item" key={data.id}>
                         <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                            <div className="star position-absolute">
                                <span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute bg-white p-2">
                                <span>15 min</span>
                            </div>
                            {/* <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div> */}
                            <a href="restaurant.html">
                                <img alt="#" src={ data.media[0] &&  data.media[0].url  } className="img-fluid item-img w-100 h-200" />
                            </a>
                            </div>
                            <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">{data.name} </a></h6>
                                <p className="text-gray mb-3">{data.description}</p>
                                <p className="text-gray mb-3 time">
                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">Delivery fee</span> <span className="float-right text-black-50"> {data.delivery_fee}</span>
                                </p>
                            </div>
                            {/* <div className="list-card-badge"><span className="badge badge-danger">OFFER</span> <small> Use Coupon OSAHAN50</small></div> */}
                            </div>
                        </div>
                    </div>
                    )}
            </Slider> 
              </div>
          </Fragment>
            
  );
}