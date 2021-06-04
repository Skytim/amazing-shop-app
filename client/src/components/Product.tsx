import Rating from '../components/Rating'
import { ProductType } from '../types/ProductType';
import { Link } from "react-router-dom";
function Product(props: { product: ProductType }) {
    const product = props.product ?? {};
    return (
        <div key={product._id} className="card">
            <Link to={'/product/' + product._id}>
                <img className="medium" src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={'/product/' + product._id}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
            <div className="price">
                $ {product.price}
            </div>
        </div>
    )
}
export default Product;