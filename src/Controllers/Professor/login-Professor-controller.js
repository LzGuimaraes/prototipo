const {ProfessorModel } = require('../../Models/professor-model') 
const jwt = require('jsonwebtoken')

class LoginProfessorController {
    async login (request, response) {
        try {
            //recebendo dados
            const { email, senha} = request.body

            // verificando se os dados foram enviados
            if(!email, !senha) {
                return response.status(400).json({
                    error:' todos os dados são necessarios'
                })
            }
            //Verificando se existe o usuario
            const professor = await ProfessorModel.findOne({ where: {email} })

            if(!professor) {
                return response.status(400).json({error:'Usuario não encontrado'})
            }
            //verificando se a senha esta correta
            if(professor.senha !== senha) {
                return response.status(400).json({error: 'Senha incorreta'})
            }

            //criando token
            const token = jwt
        } catch (error) {
            
        }
    }
}
module.exports = new LoginProfessorController();