import { ADD_TO_CART } from "./types";

/* Adiciona produto ao carrinho de compras e sua quantidade.
 * Caso já exista, apenas soma a quantidade
 */
export const addToCart = (qtd, data) => {
  return{
    type: ADD_TO_CART,
    payload: {qtd, data}
  }
};
