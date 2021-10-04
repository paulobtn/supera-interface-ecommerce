import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import NotFound from './NotFound';

const App = () => {

  return(
    <Router>

      <div className="container"> 
          
        <Header />

        <Switch>

          <Route exact path="/">
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
