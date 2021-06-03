import axios from 'axios';
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ProductType } from '../types/ProductType';

export default function HomePage() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
    return (
        <div>
            {
                loading ? (
                    <LoadingBox></LoadingBox>) :
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
