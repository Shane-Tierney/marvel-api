/* eslint-disable no-console */
const models = require('../models')

const getAllHeroesWithMovies = async (request, response) => {
  try {
    const heroes = await models.Heroes.findAll({
      attributes: ['id', 'heroAlias', 'heroName', 'status'],
      include: [{ model: models.Movies, attributes: ['id', 'title', 'phase', 'releaseDate'] }]
    })

    return response.send(heroes)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Heroes, please try again')
  }
}

const getAllHeroesWithMoviesByIdOrAliasOrName = async (request, response) => {
  try {
    const { search } = request.params

    const hero = await models.Heroes.findAll({
      attributes: ['id', 'heroAlias', 'heroName', 'status'],
      where: {
        [models.Sequelize.Op.or]: [
          { id: search },
          { heroAlias: { [models.Sequelize.Op.like]: `%${search}%` } },
          { heroName: { [models.Sequelize.Op.like]: `%${search}%` } }
        ]
      },
      include: [{
        model: models.Movies,
        attributes: ['id', 'title', 'phase', 'releaseDate']
      }]
    })

    return hero ? response.send(hero) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Heroes, please try again')
  }
}

module.exports = { getAllHeroesWithMovies, getAllHeroesWithMoviesByIdOrAliasOrName }
