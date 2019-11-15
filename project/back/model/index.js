var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development'; 
var config = require('../config/config')[env];
var db = {}; 

var sequelize = new Sequelize(config.database, config.username, config.password, config); 

db.sequelize = sequelize;
db.Sequelize = Sequelize; 
db.User = require('./User')(sequelize, Sequelize); 
db.Post = require('./Post')(sequelize, Sequelize); 
db.Comment = require('./Comment')(sequelize, Sequelize);
//User:Post=1:N
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
//User:Comment=1:N
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
//User:Post=M:N through likedPost
db.User.belongsToMany(db.Post,{through:'likedPost'});
db.Post.belongsToMany(db.User,{through:'likedPost'});
//Post:Comment=1:N
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);
//Comment:Comment재귀는 1:N(children)관계이기에 굳이 이거대신 follow속성으로 구분.
module.exports = db;


