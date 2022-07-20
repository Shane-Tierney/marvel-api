const Villains = (connection, Sequelize) => {
  return connection.define('villains', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },
    villainAlias: { type: Sequelize.STRING, allowNull: false },
    villainName: { type: Sequelize.STRING, allowNull: false },
    status: { type: Sequelize.ENUM('Alive', 'Deceased'), allowNull: false },
  }, { paranoid: true })
}

module.exports = Villains
