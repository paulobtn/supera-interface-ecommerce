/* renderiza um componente a partir de uma requisição feita
 * com useRequest. Lida com mostrar load e redirecionar para
 * telas de erro */

import {RESOLVED, REJECTED} from '../../hooks/useRequest';

export const renderWithRequest = (response, component) => {
    switch(response.status){
      case RESOLVED:
        return (component())
      case REJECTED:
        return response.error.response.statusText;
      default:
        return 'loading...'
    }
}

/* Converte um valor dado para reais */
export const toBRL = (val) => {

  let locale = 'pt-BR';
  let localeOpts = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  };

  return val.toLocaleString(locale,localeOpts);
}
