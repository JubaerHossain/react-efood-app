import React, { Fragment, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../_actions';
export default function Trending() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const dispatch = useDispatch();
  const { loading, error, products} =useSelector(state => state.products);
  useEffect(() => {
      dispatch(productActions.getproductAll('limit=15&trending=week'));
      
  }, []);
  return (
          <Fragment>
              <div className="pt-4 pb-2 title d-flex align-items-center">
                  <h5 className="m-0">Trending this week</h5>
                  <a className="font-weight-bold ml-auto" href="trending.html">View all <i className="feather-chevrons-right" /></a>
              </div>
              <div className="trending-slider"> 
                 <Slider {...settings}>
                 {products && products.map((product, index) => 
                   <div className="osahan-slider-item" key={product.id}>
                         <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                            <div className="star position-absolute">
                                <span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                                <a href="#"><i className="feather-heart" /></a>
                            </div>
                            {/* <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div> */}
                            <a href="restaurant.html">
                                <img alt="#" src={ product.media[0] &&  product.media[0].url  } className="img-fluid item-img w-100 h-200" />
                            </a>
                            </div>
                            <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">{product.name} </a></h6>
                                <p className="text-gray mb-3">{product.restaurant.name}</p>
                                <p className="text-gray mb-3 time">
                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–30 min</span> <span className="float-right text-black-50"> ${product.price}</span>
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