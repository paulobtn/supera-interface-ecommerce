import './styles/App.css'

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
import Footer from './Footer';

const App = () => {

  return(
    <Router>

      <> 
          
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
        <Footer />
      </>


    </Router>
  )
}

export default App;
