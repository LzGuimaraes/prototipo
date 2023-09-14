// Iniciando o banco de dados
require('./database/config/config');

const express = require('express');
const {routes} = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333,()=>{
    console.log(`server rodando na porta http://localhost:${3333}`);
});