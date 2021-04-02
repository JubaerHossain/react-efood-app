import { settingConstants } from '../_constants';
import { alertActions } from '.';
import { history } from '../_helpers';
import axios from 'axios';
import config from 'config';
import { authHeader } from '../_helpers';
export const settingActions = {
    getsettingAll,
};

function getsettingAll() {
    return dispatch => {
        dispatch(request());
        try {
            const  response  =  axios.get(`${config.apiUrl}/settings`).then((response) => {
                console.log(response.data.data);
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
    function request() { return { type: settingConstants.SETTING_LIST_REQUEST } }
    function success(settings) { return { type: settingConstants.SETTING_LIST_SUCCESS, settings } }
    function failure(error) { return { type: settingConstants.SETTING_LIST_FAIL, error } }
}
