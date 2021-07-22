// Incluindo na biblioteca o pacote 
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');



// Define IP e porta (endereço url)
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  var resposta;
  const urlparse = url.parse(req.url,true);
  //Receber as informacoes do usuario
  const params= queryString.parse(url.parse(req.url,true).search);

  if (urlparse.pathname == '/criar-atualizar-usuario'){

  // Criar um usuario
     
      //Salvar as informações do usuario
      fs.writeFile('users/'+ params.id +'.txt', JSON.stringify(params), function (err) {
        if (err) throw err;
        console.log('Saved!');
        resposta = "Usuario criado/atualizado com sucesso.";

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });

     
     
  }else if(urlparse.pathname == '/selecionar-usuario'){

    fs.readFile('users/'+ params.id +'.txt', function(err, data) {      
      resposta = data;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

  }else if(urlparse.pathname == '/remover-usuario'){

    fs.unlink('users/'+ params.id +'.txt', function (err) {
      console.log('File deleted!');
      resposta = err ? 'Usuario nao encontrado' :'Usuario removido';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

  }
  // Atualizar um usuario
  // Selecionar usuario
  // Remover usuario
    
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});