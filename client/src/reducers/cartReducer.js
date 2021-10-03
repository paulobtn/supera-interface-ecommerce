import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const freeShippingValue = 250;
const shippingValue = 10;

// estado inicial exportado para fins de teste
export const initState = { 
  shoppingCart:[], //[{quantity, item{id,name,price,score,image}}]
  quantity: 0,
  subtotal: 0,
  shipping: 0, //apenas adicionado ao total se freeShipping for falso
  freeShipping: false,
  total: 0
}

/* Funções auxiliares para obter os estados internos quantity, subtotal, shipping,
 * freeShipping e total baseados num novo estado com o array shoppingCart preenchido.
 * Essas funções são utilizadas na obtenção do estado total. */

// obter quantidade total 
const getQuantity = (state) => {
  let qty = 0;
  for(let i = 0; i < state.shoppingCart.length ; i++){
    qty += state.shoppingCart[i].quantity;
  }
  return qty;
}

// obter valor sem o frete
const getSubtotal = (state) => {
  let subtotal = 0;
  for(let i = 0; i < state.shoppingCart.length ; i++){
    subtotal += state.shoppingCart[i].quantity * state.shoppingCart[i].data.price;
  }
  return subtotal;
}

// obter valor do frete
const getShipping = (state) => {
  return state.quantity*shippingValue;
}

// verificar se o estado está isento de frete
const getFreeShipping = (state) => {
  return state.subtotal > freeShippingValue ? true: false;
}

// obter valor total
const getTotal = (state) => {
  let total = getSubtotal(state);
  if(!getFreeShipping(state)){
    total += getShipping(state);
  }
  return total; 
}

/* Funções para obter o novo estado que será retornado pelo reducer */

// stateAddToCart retorna o novo estado ao adicionar o produto ao carrinho 
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
  
  // atualiza os outros estados
  newState.quantity     = getQuantity(newState);
  newState.subtotal     = getSubtotal(newState);
  newState.shipping     = getShipping(newState);
  newState.freeShipping = getFreeShipping(newState);
  newState.total        = getTotal(newState);

  return newState;
}

// stateRemoveFromCart retorna o novo estado ao remover o produto do carrinho
const stateRemoveFromCart = (state, action) => {

  // deep copy do state
  let newState = JSON.parse(JSON.stringify(state));
  let {id} = action.payload;

  // cópia do array sem o elemento a ser removido
  newState.shoppingCart = newState.shoppingCart.filter((entry) => (entry.data.id !== id));
  
  // recalcula outros estados
  newState.quantity     = getQuantity(newState);
  newState.subtotal     = getSubtotal(newState);
  newState.shipping     = getShipping(newState);
  newState.freeShipping = getFreeShipping(newState);
  newState.total        = getTotal(newState);
  
  return newState;

}

/* Reducer do carrinho de compras */

const cartReducer = (state = initState, action) => {

  switch(action.type){
    case ADD_TO_CART:
      return stateAddToCart(state, action);
    case REMOVE_FROM_CART:
      return stateRemoveFromCart(state, action);         
    default:
        return state;
  }
}

export default cartReducer;
