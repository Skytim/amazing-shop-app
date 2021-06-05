
import { cartDeail } from "../api";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/Cart";


export const addToCart = (productId: string, qty: number) => async (dispatch: any, getState: any) => {
    const { data } = await cartDeail(productId);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            productId: data._id,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId: string) => async (dispatch: any, getState: any) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

