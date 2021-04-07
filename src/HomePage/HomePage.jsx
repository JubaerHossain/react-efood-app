import React, { Fragment, useEffect } from 'react';

import Catnav from '../common/Catnav'
import Trending from '../common/Trending'
import Popular from '../common/Popular'
import Mostsales from '../common/Mostsales'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../product/list'
import { Footer } from '../common/footer';
import { useDispatch, useSelector } from 'react-redux';
import { RestaurantPage } from '../Pages/RestaurantPage';
function HomePage (props) { 
    const dispatch = useDispatch();
        useEffect(() => {
            // props.history.push(location.pathname);
        },[] );

    return (
        <Fragment> 
            
            <RestaurantPage></RestaurantPage>  
            
        </Fragment>
    );
}

export { HomePage };