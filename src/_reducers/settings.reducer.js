import { settingConstants } from '../_constants';

export function settings(state = {}, action) {
    switch (action.type) {
        case settingConstants.SETTING_LIST_REQUEST:
            return {
                loading: true
            };
        case settingConstants.SETTING_LIST_SUCCESS:
            return {
                loading: false, 
                settings: action.settings,
            };
        case settingConstants.SETTING_LIST_FAIL:
            return {
                error: action.error
            }
        default:
            return state
    }
}