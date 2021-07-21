// Incluindo na biblioteca o pacote 
const http = require('http');
const url = require('url');
const queryString = require('query-string');


// Define IP e porta (endereço url)
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    //Pegar a pergunta na url    
    const params= queryString.parse(url.parse(req.url,true).search);
    console.log(params.pergunta);

    //Verificar a pergunta e escolher uma resposta
    let resposta;
    if(params.pergunta =='melhor-filme'){
      resposta = 'Star Wars';
    }else if(params.pergunta =='melhor-tecnologia-backend'){
      resposta ='Node JS';
    }
    else{
      resposta ='não sei, desculpe :(';
    }


    //Retornar a resposta escolhida
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});