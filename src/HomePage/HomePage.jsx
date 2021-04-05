import React, { Fragment, useEffect } from 'react';

import Catnav from '../common/Catnav'
import Trending from '../common/Trending'
import Popular from '../common/Popular'
import Mostsales from '../common/Mostsales'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../product/list'
import { Footer } from '../common/footer';
import { useDispatch } from 'react-redux';
function HomePage (props) { 
    const dispatch = useDispatch();
        useEffect(() => {
            // props.history.push(location.pathname);
        },[] );

    return (
        <Fragment>          

            <div className="osahan-home-page">
                       <Catnav/>  
                <div className="container">                             
                       <Trending/>
                       <Popular/>
                </div>
            </div>
            <Footer/>
            
        </Fragment>
    );
}

export { HomePage };