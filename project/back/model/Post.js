module.exports = (sequelize, DataTypes) => { 
    return  sequelize.define('Posts',{
      postId: {type: DataTypes.STRING(40), primarykey: true, allowNull : false},
      title: {type: DataTypes.STRING(40), allowNull : false},
      body: {type: DataTypes.STRING(1000), allowNull : false},
      likes: {type: DataTypes.INTEGER, allowNull : false, defaultValue:0},
      category: {type: DataTypes.INTEGER, allowNull : false},
    },{
      tableName: 'Posts',
      timestamps: true
    });
  }