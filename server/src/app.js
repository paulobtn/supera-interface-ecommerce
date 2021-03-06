/* app.js é onde o express e as rotas são configuradas
 * O app está separado do index.js para facilitar o seu
 * uso nos testes automatizados com jest
 */

const express = require('express');
const gamesRouter = require("./routes/games");

module.exports = () => {

  const app = express();
  
  // middlewares
  app.use(express.json()); // para conseguir ler o body
  app.use(gamesRouter);    // rotas para buscar os jogos

  return app;
}
