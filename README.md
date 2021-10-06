# E-commerce de games

Desafio da empresa Supera de desenvolver o front-end de um e-commerce de games em React.

![webapp screenshot](/games-home.png)

## features desenvolvidas

- api desenvolvida em express que lê o products.json e serve para o cliente
- página inicial que mostra o catálogo buscado pela api
- filtro por nome, maior preço, menor preço e popularidade
- pesquisa de produto a partir de query strings
- página do produto em que o usuário pode adicionar no carrinho ou comprar imediatamente
- carrinho de compras que o usuário pode adicionar ou remover itens.
- uso de local storage para persistir estado do carrinho mesmo se mudar a aba ou fechar o browser
- subtotal, frete e total calculados dinâmicamente na página do carrinho
- totalmente responsivo com uso de flexbox, grids e media queries

## Como executar

### dependências

Instale as dependências do projeto com
```
npm install --prefix server && npm install --prefix client
```


### servidor

Antes de executar o front-end, é necessário rodar um simples servidor desenvolvido que
lê o arquivo json e serve os dados via REST:
```
npm run dev --prefix server
```

Testes da api podem ser realizados com:
```
npm run test --prefix  server
```

### cliente

Com o servidor rodando, podemos executar o cliente desenvolvido:
```
npm start --prefix client
```
testes podem ser executados com
```
npm run test --prefix client
```

O site app pode ser executado pela url:
```
http://localhost:3000
```

## Bibliotecas utilizadas

### no servidor

- **nodemon**     &emsp;- para re-executar o servidor ao alterar o código
- **express**     &emsp;- para criação da api
- **jest**        &emsp;- para testar a api
- **supertest**   &emsp;- para executar requests nos testes da api

### no client

* **jest**                     &emsp; - para testar actions e reducers 
* **axios**                    &emsp; - para executar requests
* **http-proxy-middleware**    &emsp;- para reduzir o path para chamada da api (/api/games ao invés de localhost:3001/api/games)
* **react-loading**            &emsp; - para tela de load
* **redux e react-redux**      &emsp; - controle de estado global para o carrinho de compras
* **react-select**            &emsp;  - componente de seleção usado na ordenação do catálogo
* **redux-localstore**        &emsp; - persistir estado do redux no localstorage
* **redux-mock-store**        &emsp; - criar uma store falsa do redux para testes

