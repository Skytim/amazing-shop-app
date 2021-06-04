import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/Cart';
type RouteInfo = {
    id: string;
};

export default function CartPage({ match }: RouteComponentProps<RouteInfo>) {
    const dispatch = useDispatch();
    const location = useLocation();
    const proudctId = match.params.id;
    const qty = location.search.split('=')[1];
    useEffect(() => {
        if (proudctId) {
            dispatch(addToCart(proudctId, qty))
        }
    }, [dispatch, qty, proudctId])
    return (

        <div>
            <h1> Cart Screen</h1>
            <p>Add To Cart : PRODUCTID {proudctId}  Qty: {qty}</p>

        </div>
    )
}
