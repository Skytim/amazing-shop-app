import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import CartPage from "./views/CartPage";
import HomePage from './views/HomePage';
import ProductPage from "./views/ProductPage";
function App() {
  return (
    <HashRouter >
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href={'/'}>Amazing Shop</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
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
