import { restaurantConstants } from '../_constants';

export function restaurants(state = {}, action) {
    switch (action.type) {
        case restaurantConstants.RESTAURANT_LIST_REQUEST:
            return {
                loading: true
            };
        case restaurantConstants.RESTAURANT_LIST_SUCCESS:
            return {
                loading: false, 
                restaurants: action.restaurants,
            };
        case restaurantConstants.RESTAURANT_LIST_FAIL:
            return {
                error: action.error
            }
        default:
            return state
    }
}