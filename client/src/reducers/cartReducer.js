import { ADD_TO_CART } from '../actions/types';

const freeShippingValue = 250;
const shippingValue = 10;

//exportando para fins de teste
export const initState = { 
  shoppingCart:[], //[{quantity, item{id,name,price,score,image}}]
  quantity: 0,
  subtotal: 0,
  shipping: 0, //apenas adicionado ao total se freeShipping for falso
  freeShipping: false,
  total: 0
}

/* stateAddToCart retorna o novo estado ao adicionar o produto ao
 * carrinho */
const stateAddToCart = (state, action) => {

  /* dado e quantidade do payload para não termos que escrever
   * action.payload varias vezes */
  let {data, quantity} = action.payload;

  /* faz uma deep copy do state, note que apenas 
   * newState = {...state}
   * iria copiar a referência de shoppingCart e não queremos
   * alterar state, apenas retornar um novo
   */
  let newState = JSON.parse(JSON.stringify(state));

  // verifica se o produto já existe
  let product = newState.shoppingCart.find( (product) => {
    return product.data.id === data.id
  });
  
  // Adiciona produto ao carrinho ou incrementa quantidade
  if(product){
    newState
      .shoppingCart[newState.shoppingCart.indexOf(product)]
      .quantity += quantity;
  } else{
    newState.shoppingCart = newState.shoppingCart.concat(action.payload);
  }
    
  // atualiza quantidade e subtotal
  newState.quantity += quantity;
  newState.subtotal += data.price * quantity;

  // atualiza fretes
  newState.shipping += quantity*shippingValue;
  if(newState.subtotal > 250){
    newState.freeShipping = true;
  }

  // atualiza total
  newState.total = newState.subtotal;
  if(!newState.freeShipping){
    newState.total += newState.shipping;
  }
  return newState;
}

const cartReducer = (state = initState, action) => {

    switch(action.type){
        case ADD_TO_CART:
          return stateAddToCart(state, action);
        default:
            return state;
    }
}

export default cartReducer;
