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
import { settingActions } from '../_actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../_components/LoadingBox';
import Geocode from "react-geocode";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
// import { history } from '../_helpers';
import { userConstants } from '../_constants';

const libs = ['drawing', 'visualization', 'places'];

export const Map  = (props) => {
  const local = props.center;
  const dispatch = useDispatch();
  const [googleApiKey, setGoogleApiKey] = useState('');
  const [center, setCenter] = useState(local);
  const [location, setLocation] = useState(center);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState(null);

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);
  const { loading, error, settings} =useSelector(state => state.settings);
    useEffect(() => {
         setGoogleApiKey(settings && settings.google_maps_key);
         Geocode.setApiKey( settings && settings.google_maps_key );
         Geocode.enableDebug();
         props.localAddress ?  getUserTrack() : getUserCurrentLocation();
          // getUserCurrentLocation();
         
    }, []);
  const onLoad = (map) => {
    mapRef.current = map;
  };
  const onMarkerLoad = (marker) => {
    markerRef.current = marker;
  };
  const onLoadPlaces = (place) => {
    placeRef.current = place;
  };
  const onIdle = () => {
    setLocation({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };
  const onPlaceChanged = () => {
    try {
      const place = placeRef.current.getPlace().geometry.location;
      setCenter({ lat: place.lat(), lng: place.lng() });
      setLocation({ lat: place.lat(), lng: place.lng() });
    } catch (error) {
      toast.error('Location not found! try again', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
    
  };
 const onMarkerDragEnd = (event ) => {
    let newLat = event.latLng.lat(),
		    newLng = event.latLng.lng();
        setCenter({ lat: newLat, lng: newLng });
        setLocation({ lat: newLat, lng: newLng });
        getAddrinfo(newLat,newLng);
  }

  const getAddrinfo = ( lat,lang ) => {
    Geocode.fromLatLng(lat, lang).then(
      (response) => {
        // setAddress('');
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
      },
      (error) => {
        toast.error('Location not found! try again', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    )
  }
  const history = useHistory();
  const onConfirm = () => {
    //  getAddrinfo(center.lat,center.lng);
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
      props.closeModal()
      history.push(`/restaurants`);
    } else {
      toast.error('Please enter your address', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  const getUserTrack = () => {
    setCenter(local);
    setLocation(local);
    getAddrinfo(center.lat,center.lng)
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
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        getAddrinfo(position.coords.latitude,position.coords.longitude);
      });
    }
  };

    return googleApiKey ? (
      <>
        <Autocomplete
            onLoad={onLoadPlaces}
            onPlaceChanged={onPlaceChanged}
            region='BD'
          >
            <div className="map-input-box mb-2">
            {/* <div className="mb-2 input-group" style ={{ flexWrap: "nowrap" }}> */}
              
              <input
               className="shadow-none form-control w-100" 
                 type="text"
                 placeholder="Enter your address"
                 defaultValue={address}
                 style={{
                  display: "block",
                  width: "100%",
                  padding: ".475rem .75rem",
                  fontSize: "1rem",
                  lineHeight: "2",
                  color: "#495057",
                  backgroundColor:" #fff",
                  backgroundClip: "padding-box",
                  border: "1px solid #ced4da",
                  borderColor: "1px solid #ced4da",
                  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                  position: "relative",
                  }}
               />
               {/* <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              </div> */}
              <span  className="locate-me">
                  <i className="feather-map-pin rounded-pill p-2 icofont-size" onClick={getUserCurrentLocation} />
              </span>
               
            </div>
          </Autocomplete>
        <GoogleMap
          id="smaple-map"
          mapContainerStyle={{ height: '310px', width: '100%' }}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onIdle={onIdle}
          region='BD'
        >
          
          <Marker 
                  position={location} 
                  onLoad={onMarkerLoad}
                  onDragEnd={ onMarkerDragEnd }
                  clickable={true}
                  draggable={true}
                  icon="../../public/assets/g_pin.png"
                  >

          </Marker>
        </GoogleMap>
        
        <p></p>
        <Button variant="primary w-100" onClick={onConfirm}>Find Restaurant</Button>
      </>
    ): (
      <LoadingBox></LoadingBox>
    );
}
