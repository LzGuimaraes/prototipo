const {Model, DataTypes} = require('sequelize')

class AlunoModel extends Model {
    static init(database) {
        super.init({
            id_Aluno: {
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
           nome: DataTypes.TEXT,
           sobrenome: DataTypes.TEXT,
           CPF:DataTypes.TEXT,
        },{
            timestamps:true,
            sequelize:database,
            tableName: 'Aluno',
            modelName:'Aluno',
        });
    }
    static associate(models) {
        this.belongsTo = (models.Professor, {foreignKey: 'id_Professor'});
    }
}
module.exports = {AlunoModel};