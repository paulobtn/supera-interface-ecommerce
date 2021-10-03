import configureMockStore from 'redux-mock-store';

import {addToCart, removeFromCart} from '../../actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actions/types";
import {initState} from '../../reducers/cartReducer';

const mockStore = configureMockStore();

describe('Testa action', () => {

  it('ADD_TO_CART', () => {
    const store = mockStore(initState);
    const item = {
      data: {
        id: 99,
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
        image: "call-of-duty-wwii.png"
      }
    };

    // adiciona item no store
    store.dispatch(addToCart(1,item));
    expect(store.getActions()[0].type).toEqual(ADD_TO_CART);
  });

  it('REMOVE_FROM_CART', () => {
    const store = mockStore(initState);
    const item = {
      data: {
        id: 99,
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
        image: "call-of-duty-wwii.png"
      }
    };

    // adiciona item no store
    store.dispatch(addToCart(1,item));

    //remove item do store
    store.dispatch(removeFromCart(99));
    
    expect(store.getActions()[1].type).toEqual(REMOVE_FROM_CART);
  });

});
