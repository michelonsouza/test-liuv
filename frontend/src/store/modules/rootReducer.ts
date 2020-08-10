import { combineReducers } from 'redux';

import cart from './cart/reducer';
import categories from './categories/reducer';

export default combineReducers({ cart, categories });
