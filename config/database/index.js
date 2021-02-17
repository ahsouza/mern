const
 configMYSQL = require('./mysql.js'),
 configMONGO = require('./mongo.js'),
 dbMYSQL = {},
 dbMONGO = {},
 mongoose = require('mongoose'),
 Sequelize = require('sequelize')
// MYSQL DATABASE
const sequelize = new Sequelize(configMYSQL.DB, configMYSQL.USER, configMYSQL.PASSWORD, {
  host: configMYSQL.HOST,
  dialect: configMYSQL.dialect,
  operatorsAliases: false,
  pool: {
    max: configMYSQL.pool.max,
    min: configMYSQL.pool.min,
    acquire: configMYSQL.pool.acquire,
    idle: configMYSQL.pool.idle
  }
})

dbMYSQL.Sequelize = Sequelize
dbMYSQL.sequelize = sequelize
dbMYSQL.imoveis = require("./../../models/imoveis.model.mysql.js")(sequelize, Sequelize)

// MONGODB DATABASE
mongoose.Promise = global.Promise;

dbMONGO.mongoose = mongoose;
dbMONGO.url = configMONGO.URL
dbMONGO.imoveis = require("./../../models/imoveis.model.mongo.js")(mongoose)

module.exports = {dbMYSQL, dbMONGO};