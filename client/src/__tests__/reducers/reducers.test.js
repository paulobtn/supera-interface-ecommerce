import configureMockStore from 'redux-mock-store';

import cartReducer from '../../reducers/cartReducer';
import {initState} from '../../reducers/cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actions/types";


describe('Testa reducer', () => {
  
  describe('cartReducer', () => {

    it('retornando o estado inicial', () => {
      expect(cartReducer(undefined, {})).toMatchSnapshot();
    });

    it('retornando estado correto após adicionar um jogo', () => {

      let game = {
        "id": 201,
        "name": "Call Of Duty Infinite Warfare",
        "price": 49.99,
        "score": 80,
        "image": "call-of-duty-infinite-warfare.png"
      };
      
      expect (cartReducer(initState, {
        type: ADD_TO_CART,
        payload: {
          quantity: 10,
          data: game
        }
      })).toMatchSnapshot();  

    })

    it('retornando estado correto após remover um jogo', () => {

      let game = {
        "id": 201,
        "name": "Call Of Duty Infinite Warfare",
        "price": 49.99,
        "score": 80,
        "image": "call-of-duty-infinite-warfare.png"
      };
      
      // adiciona no carrinho
      let state = cartReducer(initState, {
        type: ADD_TO_CART,
        payload: {
          quantity: 1,
          data: game
        }
      });  

      // testa a remoção
      expect (cartReducer(initState, {
        type: REMOVE_FROM_CART,
        payload: {
          id: 201
        }
      })).toMatchSnapshot();  

    })
  });
});
