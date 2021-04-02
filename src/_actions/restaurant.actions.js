import { restaurantConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import axios from 'axios';
import config from 'config';
import { authHeader } from '../_helpers';
export const restaurantActions = {
    getrestaurantAll,
};

function getrestaurantAll(data) {
    return dispatch => {
        dispatch(request());

        console.log(`${config.apiUrl}/restaurants?${data}`);
        try {
            const  response  =  axios.get(`${config.apiUrl}/restaurants?${data}`).then((response) => {
                console.log(response);
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
