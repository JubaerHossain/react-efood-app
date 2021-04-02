import { categoryConstants } from '../_constants';

export function categories(state = {}, action) {
    switch (action.type) {
        case categoryConstants.CATEGORY_LIST_REQUEST:
            return {
                loading: true
            };
        case categoryConstants.CATEGORY_LIST_SUCCESS:
            return {
                loading: false, 
                categories: action.categories,
            };
        case categoryConstants.CATEGORY_LIST_FAIL:
            return {
                error: action.error
            }
        default:
            return state
    }
}