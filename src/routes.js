const { Router} = require('express')

//Importando controllers
const loginProfessorController = require('./Controllers/Professor/login-Professor-controller')
const createProfessorController  = require('./Controllers/Professor/create-Professor-controller')
const updateProfessorController = require('./Controllers/Professor/update-Professor-controller')
const deleteProfessorController = require('./Controllers/Professor/delete-professor-controller')

const createAlunoController = require('./Controllers/Alunos/create-aluno-controller')
const findAlunoController = require('./Controllers/Alunos/find-aluno-controller')
const deleteAlunoController = require('./Controllers/Alunos/delete-aluno-controller')
const updateAlunoController = require('./Controllers/Alunos/update-aluno-controller')

const routes = Router();

//Rota de Professor
routes.post('/Login', loginProfessorController.login);
routes.post('/Registro', createProfessorController.create);
routes.update('/Update', updateProfessorController.update)
routes.delete('/Delete', deleteProfessorController.delete);

//Rotas do Aluno de aluno
routes.post('/Aluno', createAlunoController.create);
routes.get('/FindAluno',findAlunoController.find)
routes.delete('/DeleteAluno', deleteAlunoController.delete);
routes.put('/Aluno', updateAlunoController.update);

module.exports = {routes};