'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname , '../../config/config.json'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
 
  });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
});
  

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//User:Post=1:N
db.Users.hasMany(db.Posts);
db.Posts.belongsTo(db.Users);
//User:Comment=1:N
db.Users.hasMany(db.Comments);
db.Comments.belongsTo(db.Users);
//User:Post=M:N through likedPost
db.Users.belongsToMany(db.Posts,{through:'likedPost'});
db.Posts.belongsToMany(db.Users,{through:'likedPost'});
//Post:Comment=1:N
db.Posts.hasMany(db.Comments);
db.Comments.belongsTo(db.Posts);
//Comment:Comment재귀는 1:N(children)관계이기에 굳이 이거대신 follow속성으로 구분.


module.exports = db;
