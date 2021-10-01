import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';

import {fetchGames} from '../../actions';
import { FETCH_GAMES } from "../../actions/types";

const initState = {
    items: [],
    shoppingCart:[]
};

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('Testa as actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('de recuperar todos os jogos', () =>{
  
    const store = mockStore(initState);

    moxios.stubRequest('/api/games', { status: 200, response: {} });

    return store.dispatch(fetchGames()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(FETCH_GAMES);
    });

  });
});
