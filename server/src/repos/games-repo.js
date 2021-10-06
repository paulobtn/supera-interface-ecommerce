/* games-repo.js é onde os dados dos jogos são carregados,
 * neste caso pelo arquivo products.json. Todas as operações
 * de IO são feitas aqui para que a interface de routes/games.js
 * não mude, mesmo se a forma de obtenção dos dados mudar
 * (ex: para um banco de dados) 
 */

const fs = require('fs');
const path = require('path');

const loadProducts = () => {
  let productsPath = path.join(__dirname, '..', '..', 'data', 'products.json');
  let rawProducts = fs.readFileSync(productsPath);
  let products = JSON.parse(rawProducts);
  return products;
}

class GamesRepo {

  //Recupera todos os jogos
  static async find(){
    return loadProducts(); 
  }
  
  //Recupera um jogo em particular
  static async findById(id){

    let games = loadProducts();
    let game = games.find((entry) => {
      return entry.id == id
    });
    
    return game;
  }

}

module.exports = GamesRepo;
