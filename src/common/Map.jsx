import React, { useEffect, useRef, useState } from 'react';
import {
  LoadScript,
  GoogleMap,
  StandaloneSearchBox,
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

const libs = ['drawing', 'visualization', 'places'];
const defaultLocation = { 
    lat: 23.8103,
    lng: 90.4125
 };
export const Map  = (props) => {
  
//  console.log(props.address);
  const dispatch = useDispatch();

  const [googleApiKey, setGoogleApiKey] = useState('');
  const [center, setCenter] = useState(defaultLocation);
  const [location, setLocation] = useState(center);

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);
  const { loading, error, settings} =useSelector(state => state.settings);
    useEffect(() => {
         setGoogleApiKey(settings && settings.google_maps_key);
         getUserCurrentLocation();
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
  const onPlacesChanged = () => {
    const place = placeRef.current.getPlaces()[0].geometry.location;
    setCenter({ lat: place.lat(), lng: place.lng() });
    setLocation({ lat: place.lat(), lng: place.lng() });
  };
  const onConfirm = () => {
    const places = placeRef.current.getPlaces();
    if (places && places.length === 1) {
      // dispatch select action
      // dispatch({
      //   type: USER_ADDRESS_MAP_CONFIRM,
      //   payload: {
      //     lat: location.lat,
      //     lng: location.lng,
      //     address: places[0].formatted_address,
      //     name: places[0].name,
      //     vicinity: places[0].vicinity,
      //     googleAddressId: places[0].id,
      //   },
      // });
      alert('location selected successfully.');
    } else {
      alert('Please enter your address');
    }
  };

  const getUserCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation os not supported by this browser');
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
      });
    }
  };
    return googleApiKey ? (
      <>
        <LoadScript 
              libraries={libs}
              googleMapsApiKey={googleApiKey}
              preventGoogleFontsLoading
              region='EN'
              >
        <StandaloneSearchBox
            onLoad={onLoadPlaces}
            onPlacesChanged={onPlacesChanged}
            region='EN'
          >
            <div className="map-input-box mb-2">
              <input 
                 type="text"
                 placeholder="Enter your address" 
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
                  borderRadius: ".25rem",
                  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                  position: "relative",
                  }}
               />
            </div>
          </StandaloneSearchBox>
        <GoogleMap
          id="smaple-map"
          region='EN'
          mapContainerStyle={{ height: '310px', width: '100%' }}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onIdle={onIdle}
        >
          
          <Marker position={location} onLoad={onMarkerLoad}></Marker>
        </GoogleMap>
        <p></p>
        <Button variant="primary w-100">Find Restaurant</Button>
      </LoadScript>
      </>
    ): (
      <LoadingBox></LoadingBox>
    );
}
