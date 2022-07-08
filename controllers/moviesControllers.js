/* eslint-disable no-console */
const models = require('../models')

const getAllMoviesWithHeroesAndVillains = async (request, response) => {
  try {
    const movies = await models.Movies.findAll({
      attributes: ['id', 'title', 'phase', 'releaseDate'],
      include: [{
        model: models.Heroes,
        attributes: ['id', 'heroAlias', 'heroName', 'status']
      }, {
        model: models.Villains,
        attributes: ['id', 'villainAlias', 'villainName', 'status']
      }]
    })

    return movies ? response.send(movies) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Movies, please try again')
  }
}

const getMovieWithHeroesAndVillainsByTitle = async (request, response) => {
  try {
    const { title } = request.params

    const movie = await models.Movies.findOne({
      attributes: ['id', 'title', 'phase', 'releaseDate'],
      where: { title: { [models.Sequelize.Op.like]: `%${title}%` } },
      include: [{
        model: models.Heroes,
        attributes: ['id', 'heroAlias', 'heroName', 'status']
      }, {
        model: models.Villains,
        attributes: ['id', 'villainAlias', 'villainName', 'status']
      }]
    })

    return movie ? response.send(movie) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Movie, please try again')
  }
}

module.exports = { getAllMoviesWithHeroesAndVillains, getMovieWithHeroesAndVillainsByTitle }
