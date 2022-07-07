const MoviesHeroes = (connection, Sequelize, Heroes, Movies) => {
  return connection.define('moviesHeroes', {
    heroId: { type: Sequelize.INTEGER, references: { model: Heroes, key: 'id' } },
    movieId: { type: Sequelize.INTEGER, references: { model: Movies, key: 'id' } },
  }, { paranoid: true })
}

module.exports = MoviesHeroes
