const { ProfessorModel } = require('../../Models/professor-model')

class CreateProfessorController {
    async create (request,response) {
        try {
            const {nome, sobrenome, matricula, CPF,cargo, materia_ministrada, email, senha} = request.body;
                //Verifica se os dados são nulos
                if (!nome || !sobrenome || !matricula || !CPF || !cargo || materia_ministrada || !email || !senha) 
                { return response.status(400).json ({
                    error: 'Todos os campos são Obrigatórios'
                });
            } 
            //Verifica E-mail Cadastrado
            const professorAlredyExists = await ProfessorModel.findOne({
                where:{email}
            });
            if(professorAlredyExists) {
                return response.status(400).json({
                    error:'E-mail já utilizado'
                })
            }
            //Verifica e-mail Valido
            const regexValidEmail = '/\$+S+\.S+/';
            const ValidEmail = regexValidEmail.test(email);
            if(!ValidEmail){
                return response.status(400).json({
                    error: 'email invalido'
                })
            }
            //Cria Usuario
            const professor = await ProfessorModel.create({ nome, sobrenome, matricula, CPF, cargo, materia_ministrada, email, senha });
    
            if (!professor) {
                throw new Error ('Houve um problema ao criar usuário');
            }
            return response.status(201).json(professor.dataValues);
        } catch (error) {
            return response.status(500).json(
                {error: `Erro interno: ${error}`})
        }
    }
}

module.exports = new CreateProfessorController();