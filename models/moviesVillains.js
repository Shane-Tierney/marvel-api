const MoviesVillains = (connection, Sequelize, Villains, Movies) => {
  return connection.define('moviesVillains', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },
    villainId: { type: Sequelize.INTEGER, references: { model: Villains, key: 'id' } },
    movieId: { type: Sequelize.INTEGER, references: { model: Movies, key: 'id' } },
  }, { paranoid: true })
}

module.exports = MoviesVillains
