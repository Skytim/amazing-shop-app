import { data } from './Mockdata';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">Amazing Shop</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map(product => {
              return (
                <div key={product._id} className="card">
                  <a href="product.html">
                    <img className="medium" src={product.image} alt={product.name} />
                  </a>
                  <div className="card-body">
                    <a href={product.image}>
                      <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span><i className="fa fa-star"></i>
                      </span>
                      <span><i className="fa fa-star"></i>
                      </span>
                      <span><i className="fa fa-star"></i>
                      </span>
                      <span><i className="fa fa-star"></i>
                      </span>
                      <span><i className="fa fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="price">
                    $ {product.price}
                    </div>
                </div>
              )
            })
          }

        </div>
      </main>
      <footer className="row center">
        All right reserved
    </footer>
    </div>
  );
}

export default App;
