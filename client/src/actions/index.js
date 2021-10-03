import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

/* Adiciona produto ao carrinho de compras e sua quantidade.
 * Caso já exista, apenas soma a quantidade
 * data tem o formato:
 *    data {
 *      id, 
 *      name,
 *      price, 
 *      score, 
 *      image, 
 *    }
 * se fossemos usar typescript, deveríamos criar uma interface
 */

export const addToCart = (quantity, data) => {
  return{
    type: ADD_TO_CART,
    payload: {quantity: parseInt(quantity), data}
  }
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  }
}
