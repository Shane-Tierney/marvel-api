const Heroes = (connection, Sequelize) => {
  return connection.define('heroes', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    heroAlias: { type: Sequelize.STRING, allowNull: false },
    heroName: { type: Sequelize.STRING, allowNull: false },
    status: { type: Sequelize.ENUM('Alive', 'Deceased'), allowNull: false },
  }, { paranoid: true })
}

module.exports = Heroes
