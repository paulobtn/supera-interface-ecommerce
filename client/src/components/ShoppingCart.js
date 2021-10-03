import {useSelector} from 'react-redux';

const ShoppingCart = () => {

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div>Carrinho de compras</div>
  );
}

export default ShoppingCart;
