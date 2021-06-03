import Rating from '../components/Rating'
import { ProductType } from '../types/ProductType';

function Product(props: { product: ProductType }) {
    const product = props.product ?? {};
    return (
        <div key={product._id} className="card">
            <a href={'/product/' + product._id}>
                <img className="medium" src={process.env.PUBLIC_URL +product.image} alt={product.name} />
            </a>
            <div className="card-body">
                <a href={'/product/' + product._id}>
                    <h2>{product.name}</h2>
                </a>
                <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
            <div className="price">
                $ {product.price}
            </div>
        </div>
    )
}
export default Product;