const {AlunoModel} = require('../../Models/aluno-model')

class CreateAlunoController {
    async create (request,response) {
        try {
            //verificar Paramentros Validos
            const { nome, sobrenome, CPF, id_Professor} = request.body;
            if (!nome || !sobrenome || !CPF ||!id_Professor ) {
                return response.status(400).json({
                    error: 'Parametros inválidos!'
                });
            }

            //criando Aluno
            const aluno = await AlunoModel.create({
                nome,
                sobrenome,
                CPF,
                id_Professor
            });
            delete aluno.dataValues.id_Professor;

            return response.status(201).json(aluno.datavalues)
        } catch (error) {
            return response.status(500).json({
                error:`Erro Interno ${error}`
            })    
        }
    }
}

module.exports = new CreateAlunoController();