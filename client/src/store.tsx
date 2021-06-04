import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productDetailReducer, productListReducer } from './reducers/Product'
const initialState: any = {
};
export interface ProductListState {
    productList: {
        loading: false,
        error: string,
        products: []
    }
}
const reducer = combineReducers({ proudctList: productListReducer, productDetail : productDetailReducer });
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
// const store = createStore(reducer, initialState);

export default store;