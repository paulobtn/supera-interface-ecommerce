import './styles/SearchForm.css';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {ReactComponent as SearchIcon} from '../assets/magnifying-glass.svg';

const SearchForm = () => {

  let [searchTerm, setSearchTerm] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      history.push(`/?q=${searchTerm}`)
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (

    <form className="search" role="search" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={searchTerm}
        onChange={handleChange} 
        className="search__input"
        placeholder="Pesquisar jogo"
      />
      <button 
        className="search__button"
        type="submit"
      >
      <SearchIcon 
        alt="lupa"
        className="search__icon"
      />
      </button>
    </form>

  )
}

export default SearchForm;
