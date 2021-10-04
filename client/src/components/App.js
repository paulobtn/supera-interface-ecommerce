import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import NotFound from './NotFound';

const App = () => {
  
  return(
    <Router>

      <div>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/cart'}>Compras</Link></li>
          </ul>
        </nav>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

          <Route exact path="/item/:id">
            <Product /> 
          </Route>

          <Route exact path="/cart">
            <ShoppingCart />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>

    </Router>
  )
}

export default App;
