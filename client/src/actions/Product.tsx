import { productData } from "../api";
import {
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
