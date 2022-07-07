'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      heroAlias: { type: Sequelize.STRING, allowNull: false },
      heroName: { type: Sequelize.STRING, allowNull: false },
      status: { type: Sequelize.ENUM('Alive', 'Deceased'), allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    await queryInterface.createTable('movies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING, allowNull: false },
      phase: { type: Sequelize.INTEGER, allowNull: false },
      chronologicalOrder: { type: Sequelize.INTEGER, allowNull: false },
      releaseDate: { type: Sequelize.DATEONLY, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    await queryInterface.createTable('villains', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      villainAlias: { type: Sequelize.STRING, allowNull: false },
      villainName: { type: Sequelize.STRING, allowNull: false },
      status: { type: Sequelize.ENUM('Alive', 'Deceased'), allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    await queryInterface.createTable('moviesHeroes', {
      heroId: { type: Sequelize.INTEGER, references: { model: 'Heroes', key: 'id' } },
      movieId: { type: Sequelize.INTEGER, references: { model: 'Movies', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    return queryInterface.createTable('moviesVillains', {
      villainId: { type: Sequelize.INTEGER, references: { model: 'Villains', key: 'id' } },
      movieId: { type: Sequelize.INTEGER, references: { model: 'Movies', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('moviesVillains')
    await queryInterface.dropTable('moviesHeroes')
    await queryInterface.dropTable('villains')
    await queryInterface.dropTable('movies')

    return queryInterface.dropTable('heroes')
  }
};
