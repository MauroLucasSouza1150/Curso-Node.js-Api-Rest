// para usar a importação precisa colocar "type": "module" no package.json
import app from './src/app.js';

// 3 - definir a porta para o servidor;
const PORT = 3000; 

// 5 - escutar a porta;
app.listen(PORT, () => {
    console.log(`O Servidor está rodando no Endereço http://localhost:${PORT}`);
})

