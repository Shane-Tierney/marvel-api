const Movies = (connection, Sequelize) => {
  return connection.define('heroes', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    phase: { type: Sequelize.INTEGER, allowNull: false },
    chronologicalOrder: { type: Sequelize.INTEGER, allowNull: false },
    releaseDate: { type: Sequelize.DATEONLY, allowNull: false }
  }, { paranoid: true })
}

module.exports = Movies
