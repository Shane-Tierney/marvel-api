const MoviesHeroes = (connection, Sequelize, Heroes, Movies) => {
  return connection.define('moviesVillains', {
    villainId: { type: Sequelize.INTEGER, references: { model: Heroes, key: 'id' } },
    movieId: { type: Sequelize.INTEGER, references: { model: Movies, key: 'id' } }
  })
}

module.exports = MoviesHeroes
