/* useRequest é um hook para auxiliar na requisição de dados.
 * Possui controle de estado da requisição e previne erros caso
 * a requisição termine depois do componente ser desmontado.
 *
 * Deve ser chamado como:
 *      let request = useRequest({
 *        url="example.com",
 *        method="metodo http",
 *        body="body da requisicao",      //opcional
 *        headers="headers da requisicao" //opcional
 *      });
 *
 * os valores retornados são
 *  - request.status  - estado atual do request (IDLE, PENDING, RESOLVED, REJECTED)
 *                      que podem ser importados do módulo caso o usuário queira 
 *                      prevenir erros de digitação.
 *
 *  - request.error   - erro da requisição que será não nulo se status = REJECTED
 *  - request.data    - dado retornado da requisição não nulo se status = RESOLVED
 */

import { useEffect, useReducer } from 'react';
import axios from 'axios';

/* Estados do request que podem ser usados pelo usuário
 * para verificar o valor de state.status */
export const IDLE     = 'IDLE';
export const PENDING  = 'PENDING';
export const RESOLVED = 'RESOLVED';
export const REJECTED = 'REJECTED';

const useRequest = ({ url, method, body = null, headers = null }) => {
    
    // estado inicial da requisição
    const initialState = {
      status: IDLE,
      error: null,
      data: []
    }
    
    // reducer para alterar o estado inicial da requisição
    const [state, dispatch] = useReducer((state, action) => {
      switch (action.type){
        case 'started':
          return {status: PENDING, error: null, data: []};
        case 'success':
          return {status: RESOLVED, error: null, data: action.payload};
        case 'error':
          return {status: REJECTED, error: action.payload, data: []};
        default:
          return {...state};
      }
    }, initialState);
   
    
    useEffect(() => {
      
      /* flag indicando que o dispatch não pode ser efetuado
       * pois o componente já foi desmontado */
      let cancelRequest = false;
      
      // função que realiza a requisição
      const fetchData = () => {

        dispatch({type: 'started'});
        axios[method](url, headers, body)
          .then((res) => {
            if(cancelRequest) return;
            dispatch({type: 'success', payload: res.data});
          })
          .catch((err) => {
            if(cancelRequest) return;
            dispatch({type: 'error', payload: err})
          });
      }

      fetchData();

      return function cancel() {
        cancelRequest = true;
      }

    }, [method, url, body, headers]);
    
    return {response: state};
};

export default useRequest;
