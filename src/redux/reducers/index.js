import { combineReducers } from 'redux';
import themeReducer from './theme-reducer';
import cartReducer from './cart-reducer';
import { createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';


const allReducers = {
    theme: themeReducer,
    shoppingCart: cartReducer
};

export const rootReducer = combineReducers(allReducers);
export const store = createStore(rootReducer, applyMiddleware(thunk));
