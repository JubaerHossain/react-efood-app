import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { restaurantActions } from '../_actions';

export default function Mostsales () {

    const dispatch = useDispatch();
    const { loading, error, restaurants} =useSelector(state => state.restaurants);
    useEffect(() => {
        dispatch(restaurantActions.getrestaurantAll('limit=8&popular=all'));
        
    }, []);
    return (
        <>
            <div className="py-3 title d-flex align-items-center">
                <h5 className="m-0">Most popular</h5>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div> 
            <div className="most_popular">
            <div className="row">
            {restaurants && restaurants.map((restaurant, index) => 
                <div className="col-md-3 pb-3" key={restaurant.id}>
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                        <div className="star position-absolute">
                        <span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                        <a href="#"><i className="feather-heart" /></a>
                        </div>
                        <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                        <a href="restaurant.html">
                        <img alt="#" src={restaurant.media[0] && restaurant.media[0].thumb } className="img-fluid item-img w-100" />
                        </a>
                    </div>
                    <div className="p-3 position-relative">
                        <div className="list-card-body">
                        <h6 className="mb-1"><a href="restaurant.html" className="text-black">{ restaurant.name } </a></h6>
                        <p className="text-gray mb-1 small">• North • Hamburgers</p>
                        <p className="text-gray mb-1 rating" />
                        <ul className="rating-stars list-unstyled">
                            <li>
                            <i className="feather-star star_active" />
                            <i className="feather-star star_active" />
                            <i className="feather-star star_active" />
                            <i className="feather-star star_active" />
                            <i className="feather-star" />
                            </li>
                        </ul>
                        <p />
                        </div>
                        <div className="list-card-badge"><span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small></div>
                    </div>
                    </div>
                </div>
            )}
             </div>
                
            </div>
        </>
    );
};