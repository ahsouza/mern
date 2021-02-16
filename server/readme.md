<p align="center">
 <img width="100px" src="assets/node.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">API REST</h2>
 <p align="center">
    React.js & Node.js</p>
 </p>
  <p align="center">
    <a href="https://github.com/ahsouza/github-readme-stats/actions">
      <img alt="GitHub issues" src="https://img.shields.io/github/issues/ahsouza/mern">
    </a>
    <a href="https://codecov.io/gh/ahsouza/github-readme-stats">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/ahsouza/mern">
    </a>
    <a href="https://a.paddle.com/v2/click/16413/119403?link=1227">
      <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/ahsouza/mern">
    </a>
    <a href="https://a.paddle.com/v2/click/16413/119403?link=2345">
      <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/ahsouza/mern">
    </a>
  </p>
</p>

<br>
<br>
<br>

## Estrutura de Arquivos & Pastas

```
branch: backend

├📂 assets
├📂 config
├📂 controllers
└📂 models
└📂 test
│ ├📄 imovel.spec.js
└📄 package.json
├📄 readme.md
├📄 server.js
```


## Backend

- Clone o repositório `https://github.com/ahsouza/mern.git` 
- Altere a branch do projeto de `main` para `backend` executando o comando `git checkout backend` 
- Instale as dependências: `npm install` or `yarn`
- Execute `npm run test` para testes unitários com [Mocha](https://karma-runner.github.io/latest/index.html)
- Execute o servidor de desenvolvimento express: `npm run start`
- Acesse no browser: `http://localhost:8080`

<br>

Fazer [download](https://github.com/ahsouza/mern/archive/backend.zip) do projeto backend `Express.js 4.17.1`

<br>
<br>

🌐 **URL** 

 - Implantado com Heroku https://mern-ahsouza.herokuapp.com/


<br>
<br>

## Endpoints
 
 <br>
 
 baseURL: `https://mern-ahsouza.herokuapp.com/`
 
 <br>
 
```
| MÉTODOS HTTP         | Serviços             | Descrição               |
| -------------------- | :--------------------| ------------------------|
| - GET                | `/api/imoveis`       | Receber todos imóveis     |
| - POST               | `/api/imoveis`       | Salvar imóvel           |
| - GET                | `/api/imoveis/:id`   | Receber imóvel específico |
| - PUT                | `/api/imoveis/:id`   | Atualizar imóvel        |
| - DELETE             | `/api/imoveis/:id`   | Excluír imóvel          |
```

<br>
<br>
<br>
<br>

## 📋 Documentação

As documentações do projeto, facilita na navegação entre as ramificações do projeto `(backend)(frontend)` 

<br>
<br>

👉 [Docs Frontend React.js](https://github.com/ahsouza/mern/tree/frontend)


mongodb+srv://mern:<password>@cluster0.codwv.mongodb.net/<dbname>?retryWrites=true&w=majority