import { restaurantConstants } from '../_constants';

export function trending_restaurants(state = {}, action) {
    switch (action.type) {
        case restaurantConstants.TRENDING_RESTAURANT_LIST_REQUEST:
            return {
                loading: true
            };
        case restaurantConstants.TRENDING_RESTAURANT_LIST_SUCCESS:
            return {
                loading: false, 
                trending_restaurants: action.trending_restaurants,
            };
        case restaurantConstants.TRENDING_RESTAURANT_LIST_FAIL:
            return {
                error: action.error
            }
        default:
            return state
    }
}