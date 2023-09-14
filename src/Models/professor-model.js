const {Model, DataTypes} = require('sequelize')

class ProfessorModel extends Model {
    static init(database) {
        super.init({
            id_Professor: {
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },     
            nome: DataTypes.TEXT,
            sobrenome: DataTypes.TEXT,
            matricula: DataTypes.TEXT,
            CPF: DataTypes.TEXT,
            cargo: DataTypes.TEXT,
            materia_ministrada: DataTypes.TEXT,
            email: DataTypes.TEXT,
        },{
            timestamps:true,
            sequelize:database,
            tableName: 'Professor',
            modelName:'Professor',
        });
    }
    static associate(models) {
        this.hasMany = (models.aluno, {foreignKey: 'id_Professor'});
    }
}
module.exports = {ProfessorModel};