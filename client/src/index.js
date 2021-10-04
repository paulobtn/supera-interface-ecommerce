import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import storeSynchronize from 'redux-localstore';

import App from './components/App';
import reducers from './reducers';

/* criar store do redux */
const store = createStore(reducers, {} );

/* sincronizar store do redux com o local storage
 * assim conseguimos persistir dados mesmo se o usuário
 * atualizar a página */
storeSynchronize(store);

/* renderizar app */
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);
