const {AlunoModel} = require('../../Models/aluno-model')

class DeleteAlunoController {
    async delete (req, res) {
        try {
            const {id_Professor, id_Aluno} = request.body;

            //Validar Parametros
            if(!id_Aluno || !id_Professor) {
                return response.status(400).json({
                    error:`Parametros Invalidos`
                });
            }
            //Buscar Aluno
            const AlunoExist = await AlunoModel.findOne({
                where:{
                    id: id_Aluno,
                    id_Professor,
                }
            });

            //Se aluno não existir
            if(!AlunoExist) {
                return response.status(400).json({
                    error:'Aluno não Existe'
                })
            }
            //Deletar aluno
            await AlunoModel.destroy({
                where:{
                    id: id_Aluno,
                    id_Professor
                }
            });
            return response.status(200).json({
                message: 'Aluno deletado com sucesso'
            });
        } catch (error) {
            return response.status(500).json({
                error:`Error interno${error}`
            })
        }
    }
    
}

module.exports = new DeleteAlunoController();