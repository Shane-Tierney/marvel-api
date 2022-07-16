const models = require('../models')

const getAllVillainsWithMovies = async (request, response) => {
  try {
    const villains = await models.Villains.findAll({
      attributes: ['id', 'villainAlias', 'villainName', 'status'],
      include: [{ model: models.Movies, attributes: ['id', 'title', 'phase', 'releaseDate'] }]
    })

    return response.send(villains)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Villains, please try again')
  }
}

const getAllVillainsWithMoviesByIdOrAliasOrName = async (request, response) => {
  try {
    const { search } = request.params

    const villain = await models.Villains.findAll({
      attributes: ['id', 'villainAlias', 'villainName', 'status'],
      where: {
        [models.Sequelize.Op.or]: [
          { id: search },
          { villainAlias: { [models.Sequelize.Op.like]: `%${search}%` } },
          { villainName: { [models.Sequelize.Op.like]: `%${search}%` } }
        ]
      },
      include: [{
        model: models.Movies,
        attributes: ['id', 'title', 'phase', 'releaseDate']
      }]
    })

    return villain ? response.send(villain) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Heroes, please try again')
  }
}

module.exports = { getAllVillainsWithMovies, getAllVillainsWithMoviesByIdOrAliasOrName }
