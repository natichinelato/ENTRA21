/*const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Meu servidor Node');
});

server.listen(8080, "localhost", () => {
  console.log(`Rodando em http://localhost:8080`);
});*/

const express = require ('express')
const app = express()

cliente = [{
    id:1,
    nome:"jose",
    email: "jose@gmail"
},
{
    id:2,
    nome: "maria",
    email: "maria@gmail"

}]


app.get('/', (req, res)=> {
res.send('home')

})

app.get('/cadastro', (req, res)=> {
    res.send('vc esta na pagina de cadastro ')
})
app.get('/consultar', (req, res)=> {
    res.send(cliente)
})


app.listen(8080, () => console.log
('Executando em http://localhost:8080'))
