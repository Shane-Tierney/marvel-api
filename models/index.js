/* eslint-disable object-curly-newline */
const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')

const HeroesModel = require('./heroes')
const MoviesModel = require('./movies')
const VillainsModel = require('./villains')
const MoviesHeroesModel = require('./moviesHeroes')
const MoviesVillainsModel = require('./moviesVillains')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const { username, password, database, host, dialect } = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect: 'mysql' })

const Heroes = HeroesModel(connection, Sequelize)
const Movies = MoviesModel(connection, Sequelize)
const Villains = VillainsModel(connection, Sequelize)
const MoviesHeroes = MoviesHeroesModel(connection, Sequelize, Heroes, Movies)
const MoviesVillains = MoviesVillainsModel(connection, Sequelize, Villains, Movies)

Heroes.belongsToMany(Movies, { through: MoviesHeroes })
Movies.belongsToMany(Heroes, { through: MoviesHeroes })

Villains.belongsToMany(Movies, { through: MoviesVillains })
Movies.belongsToMany(Villains, { through: MoviesVillains })

module.exports = {
  Heroes,
  Movies,
  Villains,
  MoviesHeroes,
  MoviesVillains,
  Sequelize
}
