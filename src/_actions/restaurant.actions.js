import { restaurantConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import axios from 'axios';
import config from 'config';
import { authHeader } from '../_helpers';
export const restaurantActions = {
    getrestaurantAll,
    getrestaurantTending,
    getrestaurantPopular,
    getrestaurantNew
};

function getrestaurantAll(data) {
    return dispatch => {
        dispatch(request());
        try {
            const  response  =  axios.get(`${config.apiUrl}/restaurants?${data}`).then((response) => {
                dispatch(success(response.data.data));
                dispatch(alertActions.success('Operation successful'));
                // history.push('/');
               }, (error) => {
                dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
                dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message)); 
            });
        } catch (error) {
            dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
            dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message));            
        }
    };
    function request() { return { type: restaurantConstants.RESTAURANT_LIST_REQUEST } }
    function success(restaurants) { return { type: restaurantConstants.RESTAURANT_LIST_SUCCESS, restaurants } }
    function failure(error) { return { type: restaurantConstants.RESTAURANT_LIST_FAIL, error } }
}
function getrestaurantTending(data) {
    return dispatch => {
        dispatch(request());
        try {
            const  response  =  axios.get(`${config.apiUrl}/restaurants?${data}`).then((response) => {
                dispatch(success(response.data.data));
                dispatch(alertActions.success('Operation successful'));
                // history.push('/');
               }, (error) => {
                dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
                dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message)); 
            });
        } catch (error) {
            dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
            dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message));            
        }
    };
    function request() { return { type: restaurantConstants.TRENDING_RESTAURANT_LIST_REQUEST } }
    function success(trending_restaurants) { return { type: restaurantConstants.TRENDING_RESTAURANT_LIST_SUCCESS, trending_restaurants } }
    function failure(error) { return { type: restaurantConstants.TRENDING_RESTAURANT_LIST_FAIL, error } }
}
function getrestaurantPopular(data) {
    return dispatch => {
        dispatch(request());
        try {
            console.log(data);
            const  response  =  axios.get(`${config.apiUrl}/restaurants?${data}`).then((response) => {
                dispatch(success(response.data.data));
                dispatch(alertActions.success('Operation successful'));
                // history.push('/');
               }, (error) => {
                dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
                dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message)); 
            });
        } catch (error) {
            dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
            dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message));            
        }
    };
    function request() { return { type: restaurantConstants.POPULAR_RESTAURANT_LIST_REQUEST } }
    function success(popular_restaurants) { return { type: restaurantConstants.POPULAR_RESTAURANT_LIST_SUCCESS, popular_restaurants } }
    function failure(error) { return { type: restaurantConstants.POPULAR_RESTAURANT_LIST_FAIL, error } }
}
function getrestaurantNew(data) {
    return dispatch => {
        dispatch(request());
        try {
            axios.get(`${config.apiUrl}/restaurants?${data}`).then((response) => {
                dispatch(success(response.data.data));
                dispatch(alertActions.success('Operation successful'));
                // history.push('/');
               }, (error) => {
                dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
                dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message)); 
            });
        } catch (error) {
            dispatch(failure(error.response && error.response.data && error.response.data.data ? error.response.data.data : ''));
            dispatch(alertActions.error( error.response && error.response.data.message
                ? error.response.data.message
                : error.message));            
        }
    };
    function request() { return { type: restaurantConstants.NEW_RESTAURANT_LIST_REQUEST } }
    function success(new_restaurants) { return { type: restaurantConstants.NEW_RESTAURANT_LIST_SUCCESS, new_restaurants } }
    function failure(error) { return { type: restaurantConstants.NEW_RESTAURANT_LIST_FAIL, error } }
}
