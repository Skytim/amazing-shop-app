import { productData, productDeail } from "../api";
import {
    PRODUCT_DETAIL_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/Product"

export const listProducts = () => async (dispatch: any) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await productData();
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}
export const detailProduct = (productId: string) => async (dispatch: any) => {
    dispatch({
        type: PRODUCT_DETAIL_REQUEST
    });
    try {
        const { data } = await productDeail(productId);
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.response 
            && error.response.data.message ? 
               error.response.data.message : 
               error.message });
    }
}