import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/Cart';
import { productDetailReducer, productListReducer } from './reducers/Product'

const cartItems = localStorage.getItem('cartItems');

let tempCartItem = [];
if (typeof cartItems === 'string') {
    tempCartItem = JSON.parse(cartItems);
}

const initialState: any = {
    cart: {
        cartItems: tempCartItem
    }
};
export interface ProductListState {
    productList: {
        loading: false,
        error: string,
        products: []
    }
}
const reducer = combineReducers({
    proudctList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
});
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
// const store = createStore(reducer, initialState);

export default store;