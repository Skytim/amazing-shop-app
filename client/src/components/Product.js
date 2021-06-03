import Rating from "./Rating";

function Product({ product }) {
    return (
        <div key={product._id} className="card">
            <a href="product.html">
                <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
                <a href={product.image}>
                    <h2>{product.name}</h2>
                </a>
                <Rating  rating={product.rating} numReviews={product.numReviews}/>
            </div>
            <div className="price">
                $ {product.price}
            </div>
        </div>
    )
}
export default Product;