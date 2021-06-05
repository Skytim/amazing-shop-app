import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/Cart";

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
        case CART_REMOVE_ITEM:
            console.log(state.cartItems);
            return { ...state, cartItems: state.cartItems.filter((x: any) => x.productId !== action.payload) }
        default:
            return state;
    }
}