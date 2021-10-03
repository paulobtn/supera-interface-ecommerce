import configureMockStore from 'redux-mock-store';

import cartReducer from '../../reducers/cartReducer';
import {initState} from '../../reducers/cartReducer';
import { ADD_TO_CART } from "../../actions/types";


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
          qtd: 1,
          data: game
        }
      })).toMatchSnapshot();  

    })
  });
});
