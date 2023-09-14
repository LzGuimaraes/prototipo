const {ProfessorModel} = require('../../Models/professor-model')

class DeleteProfessorController {
    async delete (req, res) {
        try {
            const {id_Professor} = request.body;

            //Validar Parametros
            if( !id_Professor) {
                return response.status(400).json({
                    error:`Parametros Invalidos`
                });
            }
            //Buscar Professor
            const ProfessorExist = await ProfessorModel.findOne({
                where:{
                    id_Professor,
                }
            });

            //Se aluno não existir
            if(!ProfessorExist) {
                return response.status(400).json({
                    error:'Professor não Existe'
                })
            }
            //Deletar aluno
            await ProfessorModel.destroy({
                where:{
                    id_Professor
                }
            });
            return response.status(200).json({
                message: 'Professor deletado com sucesso'
            });
        } catch (error) {
            return response.status(500).json({
                error:`Error interno${error}`
            })
        }
    }
    
}

module.exports = new DeleteProfessorController();