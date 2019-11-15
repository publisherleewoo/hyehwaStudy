module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('Comment',{
      commId: {type: DataTypes.STRING(40), primarykey: true, allowNull : false},
      follow: {type: DataTypes.STRING(40), allowNull : true},
      body: {type: DataTypes.STRING(200), allowNull : false},
      likes: {type: DataTypes.INTEGER, allowNull : false, defaultValue:0}
    },{
      tableName: 'Comment',
      timestamps: true
    });
  }