import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { products } from './products.reducer';
import { categories } from './categories.reducer';
import { product } from './product.reducer';
import { restaurants } from './restaurants.reducer';
import { settings } from './settings.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    products,
    categories,
    product,
    restaurants,
    settings,
    alert
});

export default rootReducer;