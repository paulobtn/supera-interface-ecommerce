import './styles/Header.css';

import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ReactComponent as CartIcon } from '../assets/cart-icon-2.svg';
import SearchForm from './SearchForm';

const Header = () => {
  
  const cart = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="header__content">
        <div className="logo">
          {
            //<Link to={'/'} className="logo__link" > LOGO </Link>
            // estou recarregando a página para limpar a pesquisa
            // e atualizar o catálogo
          }
          <a href="/" className="logo__link">LOGO</a>
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
      </div>

    </header>
  )
}

export default Header;
