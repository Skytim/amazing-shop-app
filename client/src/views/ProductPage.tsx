import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { detailProduct } from '../actions/Product';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

type RouteInfo = {
    id: string;
};

export default function ProductPage({ match }: RouteComponentProps<RouteInfo>) {

    const dispatch = useDispatch();
    const { loading, error, product } = useSelector((state: any) => state.productDetail);
    const [qty, setQty] = useState(1);
    const history = useHistory();
    useEffect(() => {

    }, [dispatch]);

    useEffect(() => {
        dispatch(detailProduct(match.params.id));

    }, [dispatch, match.params.id]);

    const addToCartHandler = () => {
        history.push(`/cart/${product._id}?qty=${qty}`);
    }
    
    return (
        loading ? (
            <LoadingBox></LoadingBox>) :
            error ? (
                <MessageBox variant="danger" >{error}</MessageBox>
            ) : (

                <div>
                    <Link to="/">Back to Result</Link>
                    <div className="row top">
                        <div className="col-2">
                            <img className="large" src={process.env.PUBLIC_URL + product?.image} alt="" />
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{product?.name}</h1>
                                </li>
                                <li>
                                    <Rating rating={product.rating} numReviews={product.numReviews} />
                                </li>
                                <li>
                                    Price : {product.price}
                                </li>
                                <li>
                                    Description
                            <p>{product.description}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div className="price">
                                                ${product.price}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div >
                                                {product.countInStock > 0 ?
                                                    <span className="success">
                                                        In Stock
                                        </span> :
                                                    <span className="Error">
                                                        Unavailable
                                            </span>
                                                }

                                            </div>
                                        </div>
                                    </li>
                                    {
                                        product.countInStock > 0 && (
                                            <>
                                                <li className="row">
                                                    <div>Qty</div>
                                                    <div>
                                                        <select value={qty} onChange={e => setQty(Number(e.target.value))}>
                                                            {[...Array(product.countInStock).keys()].map((x) =>
                                                                (<option key={x + 1} value={x + 1}>{x + 1}</option>))
                                                            }
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button className="primary" onClick={addToCartHandler}>Add To Cart</button>
                                                </li>
                                            </>
                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
    )
}
