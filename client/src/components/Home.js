import './styles/Home.css'

import { useState } from 'react';
import Select from 'react-select';

import GamesList from './GamesList';
import useRequest from '../hooks/useRequest';
import useQuery from '../hooks/useQuery';

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
  let [sortOption, setSortOption] = useState({
    value: 'price-asc',
    label: 'menor preço'
  });
  
  // endpoint para buscar todos os jogos
  let endpoint = '/api/games';

  /* verifica a existência da query string ?q= para filtrar os
    resultados. Se existir, atualiza o endpoint */
  let query = useQuery().get('q');
  if(query){
    endpoint += `?q=${query}`;
  }

  // realiza a requisição de todos os jogos
  let {response} = useRequest({
    url: endpoint,
    method: 'get'
  });
  
  // atualiza o valor do select list
  const handleSelect = (option) => {
    // setSortOption(option.value);
    setSortOption(option);
  }

  return renderWithRequest(response, () => {
    return (
      <section className="catalogue">
        <div className="catalogue__content">
          <div className="catalogue__sort">
            <label>Ordenar por: </label>
            <Select 
              options={[
                  {value: "price-asc",  label: "menor preço"},
                  {value: "price-desc", label: "maior preço"},
                  {value: "name-asc",   label: "nome"},
                  {value: "score-desc", label: "popularidade"},
                ]
              }
              styles={customSelectStyle}
              components={{IndicatorSeparator:() => null}}
              onChange={handleSelect}
              isSearchable={false}
              value={sortOption}
              name="sort-select"
            />
          </div>
          <div className="catalogue__games">
            <GamesList
              games = {response.data}
              sortProperty  = {getPropertyFromValue(sortOption.value)}
              sortDirection = {getDirectionFromValue(sortOption.value)}
            />
          </div>
        </div>
      </section>
    );
  });

}

/* Customização para o Select da biblioteca react-select. A biblioteca
 * provê uma interface em que podemos alterar os elementos do css por
 * este objeto
 */
const customSelectStyle = {
    container: (provided, state) => ({
      // container do select
      ...provided,
      width: 'inherit',
      display: 'inline-block',
    }),
    singleValue: (provided, state) => ({
      // texto selecionado
      ...provided,
    }),
    control: (provided, state) => ({
      // elemento inteiro
      ...provided,
      boxShadow: "none",
      border: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer'
    }),
    menu: (provided, state) => ({
      // estilo para a lista de opções
      ...provided,
      border: "none",
      boxShadow: "none",
      zIndex: 100,
      width: '15rem'
    }),
    option: (provided, state) => ({
      // estilo para opção específica
      ...provided,
      cursor: 'pointer',
    }),
    dropdownIndicator: (base, state) => {
      /* estilo para ícone de seta para baixo.
         Rotaciona ao abrir o menu */
      return {
        ...base,
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen? 'rotate(180deg)' : null,
      }
    }
}

export default Home;
