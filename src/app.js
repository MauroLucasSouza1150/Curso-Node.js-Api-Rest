// 1 - Importando o express para o projeto;
import express from 'express';
import routes from './routes.js'

// 2 - instancia do express;
const app = express();

// 6 - Indicar para que o express leia o body com json;
app.use(express.json());

// usar routes
app.use(routes)

export default app;


// - obs: para rodar o servidor na sua máquina é preciso ir no terminal e digitar node src/app.js;

// - Baixar o nodemon (npm install nodemon -D), que serve para atualizar a página sem parar o servidor
// Depois colocamos o código no package.json, em scripts, ("dev": "nodemon src/app.js"), e para rodar o servidor 
// digitamos npm run dev no terminal; 