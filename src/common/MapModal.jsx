// @flow 
import React, { useEffect, useRef, useState } from 'react';
import {
  LoadScript,
  GoogleMap,
  Autocomplete,
  Marker,
} from '@react-google-maps/api';
import { 
    Alert,Glyphicon,Button,Modal,
    FormGroup,FormControl,
    HelpBlock,ButtonToolbar
   } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Geocode from "react-geocode";
import { Map } from './Map';
import { toast } from 'react-toastify';
import { userConstants } from '../_constants';

const libs = ['drawing', 'visualization', 'places'];
const defaultLocation = { 
    lat: 23.8103,
    lng: 90.4125
 };

export  function MapModal () {
  const google_maps_key = process.env.GOOGLE_MAPS_KEY;
  const dispatch = useDispatch();

  const [googleApiKey, setGoogleApiKey] = useState('');
  const [center, setCenter] = useState(defaultLocation);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState(null);
  
  const placeRef = useRef(null);
    useEffect(() => {
        setGoogleApiKey(google_maps_key);
        Geocode.setApiKey( google_maps_key );
        Geocode.enableDebug();
        getUserCurrentLocation()
         
    }, []);
  const onLoadPlaces = (place) => {
    placeRef.current = place;
  };
  const onPlaceChanged = () => {
      try {
        const place = placeRef.current.getPlace().geometry.location;
        setCenter({ lat: place.lat(), lng: place.lng() }); 
      } catch (error) {
         toast.error('Location not found! try again', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
      }
    
  };

  const getAddrinfo = ( lat,lang ) => {
    Geocode.fromLatLng(lat, lang).then(
      (response) => {
        setAddress(response.results[0].formatted_address)
        for (let i = 0; i < response.results[0].address_components.length; i++) {
          for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                // setCity('')
                setCity(response.results[0].address_components[i].long_name)
                break;
            }
          }
        }

        if (address && address != '') {
          const data = {
            lat: center.lat,
            lng: center.lng,
            city: city,
            address: address,
          }
          dispatch({
            type: userConstants.USER_ADDRESS_MAP_CONFIRM,
            payload:data,
          });
          localStorage.setItem('address', JSON.stringify(data));
        }
      },
      (error) => {
        toast.error('Location not found! try again', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
         
      }
    )
  }
  const getUserCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation os not supported by this browser', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        getAddrinfo(position.coords.latitude,position.coords.longitude);
      });
    }
  };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        getAddrinfo(center.lat,center.lng)
        setShow(true)
    };

    return (
        <>
        
            <div className="col-sm-6 col-md-6 col-lg-6 d-flex align-items-center mob_search">
                <div className="text-dark  d-flex align-items-center py-3 w-100" >
                        <div className="search_location text-right w-100">
                            <div className="input-group rounded border-0  overflow-hidden">
                                <LoadScript 
                                    id="script-loaders"
                                    libraries={libs}
                                    googleMapsApiKey={googleApiKey}
                                    region='BD'
                                    >
                                        <Autocomplete
                                            onLoad={onLoadPlaces}
                                            onPlaceChanged={onPlaceChanged}
                                            region='BD'
                                           >
                                            <div className="map-input-box pb-50">
                                            
                                            <input
                                            className="shadow-none form-control w-100 map-input" 
                                                type="text"
                                                placeholder="Enter your address"
                                                defaultValue={address}
                                            />
                                            <span className="locate-me-button">
                                                <button className="border-0 btn bg-primary text-dark bg-white btn-block z-index-0" onClick={handleShow}><i className="feather-truck text-white" /></button>
                                            </span>
                                            
                                            </div>
                                        </Autocomplete>
                                </LoadScript>
                                
                            </div>
                        </div>
                    </div>
            </div> 

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                        <Modal.Title>Is this your exact location?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Map closeModal={() => handleClose()} center = {center} localAddress={address}/>
                </Modal.Body>
                <Modal.Footer>
                      
                </Modal.Footer>
            </Modal>
        </>
    );
};