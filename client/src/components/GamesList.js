import { Link } from "react-router-dom";
import { toBRL } from "./helpers";

/* Retorna uma função de comparação a ser usada pela função sort.
 * A propriedade do array de objects e a ordem é customizável.
 * Podemos chamar por exemplo: 
 *    games.sort(compareProperty('score', DESC))
 */
const compareProperty = (property, direction) => {
  return function (a,b) {
    let result;

    if(a[property] < b[property]){
      result = -1;
    } else if(a[property] > b[property]){
      result =  1;
    } else{
      result = 0;
    }

    return result * parseInt(direction);
  } 
}

/* Componente que renderiza o catálogo de jogos */
const GamesList = ({games, sortProperty, sortDirection}) => {
  
  // ordena
  if(sortProperty && sortDirection){
    games.sort(compareProperty(sortProperty, sortDirection));
  }

  return (
    games.map( (item) => {
      let imagePath = require(`../assets/${item.image}`).default;
      return (
          <div key={item.id} style={{padding: '1rem'}}>
            <Link to={`/item/${item.id}`}>
              <img src={imagePath} alt={`${item.name}`}/>
            </Link>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>price: {toBRL(item.price)}</div>
            <div>score: {item.score}</div>
          </div>
      )
    })
  )
};

export default GamesList;
