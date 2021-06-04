import { CART_ADD_ITEM } from "../constants/Cart";

export const cartReducer = (state = { cartItems: [] }, action: any) => {

    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem: any = state.cartItems.find((x: any) => x.productId === item.productId);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x: any) => x.productId === existItem.productId ? item : x)
                }
            } else {
                return { ...state, cartItems: [...state.cartItems, item] }
            }
        default:
            return state;
    }
}