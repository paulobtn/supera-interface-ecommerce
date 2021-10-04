import { useState } from 'react';
import { useHistory } from 'react-router-dom';


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
    <form role="search" onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <input type="submit" value="pesquisar" />
    </form>
  )
}

export default SearchForm;
