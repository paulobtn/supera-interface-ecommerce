# E-commerce de games

Desafio da empresa Supera de desenvolver o front-end de um e-commerce de games em React.

## features desenvolvidas

- api desenvolvida em express que lê o products.json e serve para o cliente
- página inicial que mostra o catálogo buscado pela api
- filtro por nome, maior preço, menor preço e popularidade
- pesquisa de produto a partir de query strings
- página do produto em que o usuário pode adicionar no carrinho ou comprar imediatamente
- carrinho de compras que o usuário pode adicionar ou remover itens.
- uso de local storage para persistir estado do carrinho mesmo se mudar a aba ou fechar o browser
- subtotal, frete e total calculados dinâmicamente na página do carrinho
- totalmente responsívo com uso de flexbox, grids e media queries

## Como executar

### servidor

Para executar o front-end, é necessário rodar um simples servidor desenvolvido que
lê o arquivo json e serve os dados via REST:
```
npm run dev --prefix server
```

Testes da api podem ser realizados com:
```
npm run test --prefix server
```

### cliente

Com o servidor rodando, podemos executar o cliente desenvolvido:
```
npm run test --prefix client
```

O site app pode ser executado pela url:
```
http://localhost:3000
```

## Bibliotecas utilizadas

### no servidor

- nodemon     - para re-executar o servidor ao alterar o código
- express     - para criação da api
- jest        - para testar a api
- supertest   - para executar requests nos testes da api

### no client

* jest                    - para testar actions e reducers 
* axios                   - para executar requests
* http-proxy-middleware   - para reduzir o path para chamada da api (/api/games ao invés de localhost:3001/api/games)
* react-loading           - para tela de load
* redux e react-redux     - controle de estado global para o carrinho de compras
* react-select            - componente de seleção usado na ordenação do catálogo
* redux-localstore        - persistir estado do redux no localstorage
* redux-mock-store        - criar uma store falsa do redux para testes

