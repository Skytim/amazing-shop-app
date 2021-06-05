import { useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/Cart';
import MessageBox from '../components/MessageBox';
type RouteInfo = {
    id: string;
};

export default function CartPage({ match }: RouteComponentProps<RouteInfo>) {
    const dispatch = useDispatch();
    const location = useLocation();
    const proudctId = match.params.id;
    const qty = Number(location.search.split('=')[1]);
    const cart = useSelector((state: any) => state.cart);
    const { cartItems } = cart;
    useEffect(() => {
        if (proudctId) {
            dispatch(addToCart(proudctId, qty))
        }
    }, [dispatch, qty, proudctId]);

    const removeFromCartHandler = (id: any) => {
        console.log(id);
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = (id: any) => {
        console.log(id);
    }
    return (


        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems === 0 ?
                    <MessageBox variant="info"> Cart is empty.
                    <Link to="/">Go shopping</Link>
                    </MessageBox> : (
                        <ul>
                            {
                                cartItems.map((item: any) => {
                                    return (
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img src={process.env.PUBLIC_URL + item.image} alt={item.name} className="small" />
                                                </div>

                                                <div className="min-30">
                                                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                                                </div>
                                                <div>
                                                    <select name="" value={item.qty}
                                                        onChange={e => dispatch(addToCart(item.productId, Number(e.target.value)))}>
                                                        {[...Array(item.countInStock).keys()].map((x) =>
                                                            (<option key={x + 1} value={x + 1}>{x + 1}</option>))
                                                        }
                                                    </select>
                                                </div>
                                                <div>
                                                    ${item.price}
                                                </div>
                                                <div>
                                                    <button type="button" onClick={() => removeFromCartHandler(item.productId)}>Delete</button>
                                                </div>
                                            </div>
                                        </li>)
                                })
                            }
                        </ul>
                    )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a: any, c: any) => a + Number(c.qty), 0)}) :
                            ${cartItems.reduce((a: any, c: any) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block"
                                disabled={cartItems.length === 0}>
                                Processed to Checkout
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
