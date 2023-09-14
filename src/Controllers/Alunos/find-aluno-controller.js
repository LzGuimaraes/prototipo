const {AlunoModel} = require('../../Models/aluno-model')

class FindAlunoController {
    async find(request,response) {
        try {
            const {id_Professor} = request.body;
            //Verificando Parametros
            if(!id_Professor) {
            return response.status(500).json({
                error:'parametro Inválido'
            })
        }

        //Buscando todos os Alunos do Professor
        const alunos = await AlunoModel.findAll({
            where:{
                id_Professor
            }
        })

        return response.status(200).json(alunos.map( aluno =>{
            delete aluno.id_Professor;
            return aluno.dataValues
        }));
        } catch (error) {
            return response.status(500).json({
                error:`Erro interno:${error}`
            })
        }
    }
}
module.exports = new FindAlunoController();