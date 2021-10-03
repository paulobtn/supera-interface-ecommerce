import configureMockStore from 'redux-mock-store';

import {addToCart} from '../../actions';
import { ADD_TO_CART } from "../../actions/types";
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
    store.dispatch(addToCart(1,item));
    expect(store.getActions()[0].type).toEqual(ADD_TO_CART);
  });

});
