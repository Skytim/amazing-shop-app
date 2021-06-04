import { useSelector } from "react-redux";
import {
  Route,
  Switch,
  HashRouter,
  Link
} from "react-router-dom";
import CartPage from "./views/CartPage";
import HomePage from './views/HomePage';
import ProductPage from "./views/ProductPage";
function App() {
  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;


  return (
    <HashRouter >
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Amazing Shop</Link>
          </div>
          <div>
            <Link to="/cart">Cart{cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/product/:id?" component={ProductPage} >
            </Route>
            <Route path="/cart/:id" component={CartPage} >
            </Route>
            <Route path="/" component={HomePage}>
            </Route>
          </Switch>
        </main>
        <footer className="row center">
          All right reserved
        </footer>
      </div>
    </HashRouter>

  );
}

export default App;
