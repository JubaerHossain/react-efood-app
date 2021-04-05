import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Catnav from '../common/Catnav'
import { Footer } from '../common/footer'
import Popular from '../common/Mostsales'
import Trending from '../common/Trending'
import { history } from '../_helpers'
import { localAddres } from '../_helpers/localAddres'

export const RestaurantPage = (props) => {
    const dispatch = useDispatch();
    const addressInfo = localAddres();
    console.log(addressInfo);
        useEffect(() => {
            //  history.push(location.pathname);
        },[] );

    return (
        <>
            <div className="osahan-home-page">
                       <Catnav/>  
                <div className="container">                             
                       <Trending/>
                       {/* <Popular/> */}
                </div>
            </div>
            <Footer/>
        </>
    )
}

