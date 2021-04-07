import { restaurantConstants } from '../_constants';

export function new_restaurants(state = {}, action) {
    switch (action.type) {
        case restaurantConstants.NEW_RESTAURANT_LIST_REQUEST:
            return {
                loading: true
            };
        case restaurantConstants.NEW_RESTAURANT_LIST_SUCCESS:
            return {
                loading: false, 
                new_restaurants: action.new_restaurants,
            };
        case restaurantConstants.NEW_RESTAURANT_LIST_FAIL:
            return {
                error: action.error
            }
        default:
            return state
    }
}