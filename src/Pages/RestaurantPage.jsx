import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Catnav from '../common/Catnav'
import { Footer } from '../common/footer'
import Popular from '../common/Mostsales'
import Trending from '../common/Trending'
import { restaurantActions } from '../_actions'
import { localAddres } from '../_helpers/localAddres'

export const RestaurantPage = (props) => {
    const dispatch = useDispatch();
    const addressInfo = localAddres();
    const { loading, error, restaurants} =useSelector(state => state.restaurants);
    const { trending_restaurants} =useSelector(state => state.trending_restaurants);
    const { popular_restaurants} =useSelector(state => state.popular_restaurants);
    const { new_restaurants} =useSelector(state => state.new_restaurants);

    // const history = useHistory();
        useEffect(() => {
            //  history.push(location.pathname);
            dispatch(restaurantActions.getrestaurantTending(`limit=15&trending=all&myLon=${addressInfo.lng}&myLat=${addressInfo.lat}&areaLon=${addressInfo.lng}&areaLat=${addressInfo.lat}`));
            dispatch(restaurantActions.getrestaurantPopular(`limit=15&popular=all&myLon=${addressInfo.lng}&myLat=${addressInfo.lat}&areaLon=${addressInfo.lng}&areaLat=${addressInfo.lat}`));
            dispatch(restaurantActions.getrestaurantNew(`limit=15&new=all&myLon=${addressInfo.lng}&myLat=${addressInfo.lat}&areaLon=${addressInfo.lng}&areaLat=${addressInfo.lat}`));
            dispatch(restaurantActions.getrestaurantAll(`limit=15&myLon=${addressInfo.lng}&myLat=${addressInfo.lat}&areaLon=${addressInfo.lng}&areaLat=${addressInfo.lat}`));

        },[] );

    return (
        <>
            <div className="osahan-home-page">
                       <Catnav/>  
                <div className="container">                             
                       <Trending title='Trending This Week' restaurants={trending_restaurants}/>
                       <Trending title='Nearest For You' restaurants={restaurants}/>
                       <Trending title='Most Popular' restaurants={popular_restaurants}/>
                       <Trending title='New Restaurant' restaurants={new_restaurants}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

