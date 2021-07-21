// Incluindo na biblioteca o pacote 
const http = require('http');
const url = require('url');
const queryString = require('query-string');


// Define IP e porta (endereço url)
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  // Criar um usuario
      //Receber as informacoes do usuario
      const params= queryString.parse(url.parse(req.url,true).search);
      console.log(params);
      //Salvar as informações do usuario
  // Atualizar um usuario
  // Selecionar usuario
  // Remover usuario
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World");
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});