import configureMockStore from 'redux-mock-store';

import shoppingReducer from '../../reducers/shoppingReducer';
import {initState} from '../../reducers/shoppingReducer';
import { FETCH_GAMES } from "../../actions/types";

let games = [{
  "id": 201,
  "name": "Call Of Duty Infinite Warfare",
  "price": 49.99,
  "score": 80,
  "image": "call-of-duty-infinite-warfare.png"
},
{
  "id": 102,
  "name": "The Witcher III Wild Hunt",
  "price": 119.5,
  "score": 250,
  "image": "the-witcher-iii-wild-hunt.png"
}];

describe('Testa reducer', () => {
  
  describe('shoppingReducer', () => {
    it('returnando o estado inicial', () => {
      expect(shoppingReducer(undefined, {})).toMatchSnapshot();
    });

    it('retornando o estado com os jogos carregados', () => {

      expect(
        shoppingReducer(initState, {
          type: FETCH_GAMES,
          payload: games
        })
      ).toMatchSnapshot();
    })
  });
});
