import { useState } from 'react';

import GamesList from './GamesList';
import useRequest from '../hooks/useRequest';

import {renderWithRequest} from './helpers';


/* Funções auxiliares para extrair os dados do valor
 * de formato "propriedade-ordem" do select list */

// retorna a propriedade do valor "propriedade-ordem"
const getPropertyFromValue = (value) => {
  return value.split('-')[0];
}

/* Retorna o valor da direção da ordenação. Se for "asc"
 * retornará 1, se for "desc" retornará -1. Essa lógica
 * segue a ideia da função de comparação usada em sort() */
const getDirectionFromValue = (value) => {
  let sortString = value.split('-')[1];
  switch(sortString){
    case 'asc':
      return 1;
    case 'desc':
      return -1;
    default:
      return 0;
  }
}

const Home = () => {
  
  // valor do select list que gerencia a ordenação do catálogo
  let [sortValue, setSortValue] = useState("price-asc");
  
  // realiza a requisição de todos os jogos
  let {response} = useRequest({
    url: '/api/games',
    method: 'get'
  });
  
  // atualiza o valor do select list
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  }
  
  return renderWithRequest(response, () => {
    return (
      <div>
          <label htmlFor="sort-games">ordenar por: </label>
          <select
              id="sort-games"
              name="sort-games"
              onChange={handleSortChange}
          >
            <option value="price-asc">menor preço</option>
            <option value="price-desc">maior preço</option>
            <option value="name-asc">nome</option>
            <option value="score-desc">popularidade</option>
          </select>
          
          <GamesList
            games = {response.data}
            sortProperty  = {getPropertyFromValue(sortValue)}
            sortDirection = {getDirectionFromValue(sortValue)}
          />
      </div>
    );
  });

}

export default Home;
