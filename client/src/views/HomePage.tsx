import { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ProductType } from '../types/ProductType';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/Product';

export default function HomePage() {
    const dispatch = useDispatch();
    const proudctList = useSelector((state: any) => state.proudctList);
    const { loading, error, products } = proudctList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div>
            {
                loading ? (
                    <div className="row center">
                        <LoadingBox></LoadingBox>
                    </div>
                ) :
                    error ? (
                        <MessageBox variant="danger" >{error}</MessageBox>
                    ) : (
                        <div className="row center">
                            {
                                products?.map((product: ProductType) => {
                                    return (
                                        <Product key={product._id} product={product} />
                                    )
                                })
                            }
                        </div>
                    )

            }

        </div>
    )
}
