/* app.js é onde o express e as rotas são configuradas
 * O app está separado do index.js para facilitar o seu
 * uso nos testes automatizados com jest
 */

const express = require('express');

module.exports = () => {
  const app = express();
  app.use(express.json());
  return app;
}