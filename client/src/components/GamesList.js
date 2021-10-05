
import GameCard from "./GameCard";

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
      return (
        <GameCard 
          item={item}
          key={item.id}
        />
      )    
    })
  )
};

export default GamesList;
