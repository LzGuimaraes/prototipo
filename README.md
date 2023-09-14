Instalando sequelize
-- npm install Sequelize

Instalando os drives do postgresql
-- npm install --save pg pg-hstore

Conectando ao banco 
try {
  await sequelize.authenticate();
  console.log('Conectou com sucesso.');
} catch (error) {
  console.error('Não conectou', error);
}

//Migrations
npm install sequelize-cli -D

comandos para criar banco 
//npx sequelize db:create

criando tabelas
//npx sequelize migration:create --name=create-table-nome-da-migration

após todas as tabelas criadas criar as migrations 
criando os relacionamentos 
//npx sequelize migration:create --name=create-relation-tabble1-to-table2

--npm i express -D
--npm i nodemon -D
--npm install bcrypt dotenv jsonwebtoken

### OBS: as rotas estão entregando objeto vazio no request.body