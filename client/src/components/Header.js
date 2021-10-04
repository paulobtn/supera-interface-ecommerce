import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ReactComponent as CartIcon } from '../assets/cart-icon.svg';
import SearchForm from './SearchForm';

const Header = () => {
  
  const cart = useSelector((state) => state.cart);

  return (
    <header className="header">

        <div className="logo">
          <Link to={'/'} className="logo__link" > LOGO </Link>
        </div>
        
        <SearchForm />

        <nav className="cart-nav">
            <div className="cart-nav__icon-box">
                
              <Link to={'/cart'} className='cart-nav__link'>
                <CartIcon
                alt="carrinho"
                className="cart-nav__icon"
                />

                <span className="cart-nav__notification">{cart.quantity}</span>
              </Link>
            </div>
        </nav>

    </header>
  )
}

export default Header;
