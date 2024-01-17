// 1 - Importando o express para o projeto;
import express from 'express';

import SelecaoController from './app/controllers/SelecaoController.js';

// 2 - instancia do express;
const app = express();

// 6 - Indicar para que o express leia o body com json;
app.use(express.json());

// 4 - Rotas;
app.get("/selecoes", SelecaoController.index)
app.get("/selecoes/:id", SelecaoController.show)
app.post("/selecoes", SelecaoController.store)
app.put("/selecoes/:id", SelecaoController.update)
app.delete("/selecoes/:id", SelecaoController.delete)

export default app;


// - obs: para rodar o servidor na sua máquina é preciso ir no terminal e digitar node src/app.js;

// - Baixar o nodemon (npm install nodemon -D), que serve para atualizar a página sem parar o servidor
// Depois colocamos o código no package.json, em scripts, ("dev": "nodemon src/app.js"), e para rodar o servidor 
// digitamos npm run dev no terminal; 