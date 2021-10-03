import { Link } from "react-router-dom";

/* Retorna uma função de comparação a ser usada pela função sort.
 * A propriedade do array de objects e a ordem é customizável.
 * Podemos chamar por exemplo: 
 *    games.sort(compareProperty('score', DESC))
 */
const compareProperty = (property, order) => {
  return function (a,b) {
    let result;

    if(a[property] < b[property]){
      result = -1;
    } else if(a[property] > b[property]){
      result =  1;
    } else{
      result = 0;
    }

    return result * order;
  } 
}

/* Componente que renderiza o catálogo de jogos */
const GamesList = ({games, sortProperty, sortOrder}) => {
  
  // ordena
  if(sortProperty && sortOrder){
    games.sort(compareProperty(sortProperty, sortOrder));
  }

  return (
    games.map( (item) => {
      let imagePath = `${process.env.PUBLIC_URL}/assets/${item.image}`;
      return (
          <div key={item.id} style={{padding: '1rem'}}>
            <Link to={`/item/${item.id}`}>
              <img src={imagePath} alt={`${item.name}`}/>
            </Link>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>price: {item.price}</div>
            <div>score: {item.score}</div>
          </div>
      )
    })
  )
};

export default GamesList;
