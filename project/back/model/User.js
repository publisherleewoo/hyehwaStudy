module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('User',{
      snsId: {type: DataTypes.STRING(40), primarykey: true, allowNull : false},
      nick: {type: DataTypes.STRING(40), allowNull : false},
      email: {type: DataTypes.STRING(40), allowNull : false},
      frontimg: {type: DataTypes.STRING(200), allowNull : true},
      provider: {type: DataTypes.STRING(20), allowNull : false}
    },{
      tableName: 'User',
      timestamps: false
    });
  }