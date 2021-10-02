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
          navbar será aqui
        </nav>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/product/:id">
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
