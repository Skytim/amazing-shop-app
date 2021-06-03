import { data } from './Mockdata';
import Product from './components/Product';
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
                <Product key={product._id} product={product} />
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
