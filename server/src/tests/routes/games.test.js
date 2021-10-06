/* games.test.js é o módulo de teste da api em routes/games.js */

const request = require('supertest');
const app = require('../../app');
const GamesRepo = require('../../repos/games-repo');

it('Carrega todos os jogos', async () => {

  /* carrega todos os jogos, verifica se a requisição foi bem
  sucedida, se o conteúdo é json e se a quantidade de jogos
  está correta */

  const response = await request(app())
    .get('/api/games')
    .expect(200)
    .expect("Content-Type", /json/) ;

  expect(response.body.length).toEqual(9);

});

it('Carrega um jogo específico', async () => {

  /*Carrega o the witcher III e verifica se todos
  os dados estão corretos */

  const response = await request(app())
    .get('/api/games/102')
    .expect(200)
    .expect("Content-Type", /json/) ;

  expect(response.body.id).toEqual(102);
  expect(response.body.name).toEqual("The Witcher III Wild Hunt");
  expect(response.body.price).toEqual(119.5);
  expect(response.body.score).toEqual(250);
  expect(response.body.image).toEqual("the-witcher-iii-wild-hunt.png");

});

it('Carrega jogos a partir de query string', async () => {
  const response = await request(app())
    .get('/api/games?q=call+of+duty')
    .expect(200)
    .expect("Content-Type", /json/);

  expect(response.body.length).toEqual(2);
});
