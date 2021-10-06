import "./styles/CartNotice.css";

import {Link} from 'react-router-dom';

const CartNotice = ( {item}) => {
  if(item){
    return(
      <div className="cart-notice">
        <div className="cart-notice__content"> 
          <div> 
            <span className="cart-notice__game">{item}</span> adicionado ao carrinho
          </div>
          <div className="cart-notice__links">
            <a href="/" className="link cart-notice__link">voltar ao catálogo</a>
            <Link className="link cart-notice__link" to={"/cart"}>ir para o carrinho</Link>
          </div>
        </div>
         
      </div>
    );
  } 
  return <></>;
}

export default CartNotice;
