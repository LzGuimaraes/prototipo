const {ProfessorModel} = require('../../Models/professor-model')

class UpdateProfessorController {
    async update (request, response) {
    try {
        const {id_Professor, nome, sobrenome, matricula, CPF, cargo, materia_ministrada, email, senha} = request.body;
        if (!id_Professor) {
            return response.status(400).json({
               error: 'Parâmetros inválidos'
            })
        }
        //Atualizar Professor
        const result = await ProfessorModel.update({
            nome,
            sobrenome,
            matricula,
            CPF,
            cargo,
            materia_ministrada,
            email,
            senha
        },{
            where:{
                id: id_Professor
            }
        })
    } catch (error) {
        return response.status(500).json({
            error: `Erro interno: ${error}`
        })
        
    }
}}
module.exports = new UpdateProfessorController();