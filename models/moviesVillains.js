const MoviesVillains = (connection, Sequelize, Villains, Movies) => {
  return connection.define('moviesVillains', {
    villainId: { type: Sequelize.INTEGER, references: { model: Villains, key: 'id' } },
    movieId: { type: Sequelize.INTEGER, references: { model: Movies, key: 'id' } }
  })
}

module.exports = MoviesVillains
