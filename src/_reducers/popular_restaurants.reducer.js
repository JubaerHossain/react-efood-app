import { restaurantConstants } from '../_constants';

export function popular_restaurants(state = {}, action) {
    switch (action.type) {
        case restaurantConstants.POPULAR_RESTAURANT_LIST_REQUEST:
            return {
                loading: true
            };
        case restaurantConstants.POPULAR_RESTAURANT_LIST_SUCCESS:
            return {
                loading: false, 
                popular_restaurants: action.popular_restaurants,
            };
        case restaurantConstants.POPULAR_RESTAURANT_LIST_FAIL:
            return {
                error: action.error
            }
        default:
            return state
    }
}