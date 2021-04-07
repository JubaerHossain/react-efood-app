import { categoryConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import axios from 'axios';
import config from 'config';
import { authHeader } from '../_helpers';
export const categoryActions = {
    getcategoryAll,
    addProduct,
    getproduct,
    updateProduct,
    productdelete
};

function getcategoryAll() {
    return dispatch => {
        dispatch(request());
        try {
            
            const  response  =  axios.get(`${config.apiUrl}/categories`).then((response) => {
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
    function request() { return { type: categoryConstants.CATEGORY_LIST_REQUEST } }
    function success(categories) { return { type: categoryConstants.CATEGORY_LIST_SUCCESS, categories } }
    function failure(error) { return { type: categoryConstants.CATEGORY_LIST_FAIL, error } }
}

 function addProduct(payload) {
    return   dispatch => {
        dispatch(request(payload));

        try {
            const requestOptions = {
                headers: { ...authHeader(), 'Content-Type': 'multipart/form-data', },
            };
            const  response  =  axios.post(`${config.apiUrl}/products`, payload,  requestOptions).then((response) => {
                    dispatch(success(response.data.data));
                    dispatch(alertActions.success('Operation successful'));
                    history.push('/');
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

    function request(product) { return { type: productConstants.PRODUCT_CREATE_REQUEST, product } }
    function success(product) { return { type: productConstants.PRODUCT_CREATE_SUCCESS,product } }
    function failure(error) { return { type: productConstants.PRODUCT_CREATE_FAIL, error } }
}

 function updateProduct(payload,id) {
    return   dispatch => {
        dispatch(request(payload));

        try {
            console.log(id);
            const requestOptions = {
                headers: { ...authHeader(), 'Content-Type': 'multipart/form-data', },
            };
            const  response  =  axios.post(`${config.apiUrl}/products/${id}?_method=PUT`, payload,  requestOptions).then((response) => {
                dispatch(success(response.data.data));
                    dispatch(alertActions.success('Operation successful'));
                    history.push('/');
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

    function request(product) { return { type: productConstants.PRODUCT_CREATE_REQUEST, product } }
    function success(product) { return { type: productConstants.PRODUCT_CREATE_SUCCESS,product } }
    function failure(error) { return { type: productConstants.PRODUCT_CREATE_FAIL, error } }
}

function getproduct(id) {
    return dispatch => {
        dispatch(request());

        productService.getProduct(id)
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error.toString()))
            );
    };
    function request() { return { type: productConstants.PRODUCT_DETAILS_REQUEST } }
    function success(product) { return { type: productConstants.PRODUCT_DETAILS_SUCCESS, product } }
    function failure(error) { return { type: productConstants.PRODUCT_DETAILS_FAIL, error } }
}

function productdelete(id) {
    return   dispatch => {
        // dispatch(request(id));

        try {
            console.log('lol');
            console.log(id);
            const requestOptions = {
                headers: { ...authHeader(), },
            };
            const  response  =  axios.delete(`${config.apiUrl}/products/${id}`,  requestOptions).then((response) => {
                console.log(response);
                // dispatch(success(response.data.data));
                    dispatch(alertActions.success('Operation successful'));
                    history.push('/');
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

    function request(product) { return { type: productConstants.PRODUCT_DELETE_REQUEST, product } }
    function success(product) { return { type: productConstants.PRODUCT_DELETE_SUCCESS,product } }
    function failure(error) { return { type: productConstants.PRODUCT_DELETE_FAIL, error } }
}