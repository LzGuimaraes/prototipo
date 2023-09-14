const {AlunoModel} = require('../../Models/aluno-model')

class UpdateAlunoController {
    async update (request, response) {
    try {
        const {id_Professor, id_aluno, nome, sobrenome, CPF} = request.body;

        if(!id_aluno || !id_Professor){
            return response.status(400).json({
                error: 'Parâmetros inválidos!'
            })
        }
        //Atualiza Aluno
        const result = await AlunoModel.update({
            nome,
            sobrenome,
            CPF
        },{
            where:{
                id: id_aluno,
                id_Professor
            }
        });

    } catch (error) {
        return response.status(500).json({
            error: `Erro interno: ${error}`
        })
    }
    }
}

module.exports = new UpdateAlunoController();