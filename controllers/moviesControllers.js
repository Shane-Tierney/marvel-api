/* eslint-disable max-len */
/* eslint-disable no-console */
const models = require('../models')

const getAllMoviesWithHeroesAndVillains = async (request, response) => {
  try {
    const movies = await models.Movies.findAll({
      attributes: ['id', 'title', 'phase', 'chronologicalOrder', 'releaseDate'],
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

    const movie = await models.Movies.findAll({
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

const getMovieWithHeroesAndVillainsByID = async (request, response) => {
  try {
    const { id } = request.params

    const movie = await models.Movies.findAll({
      attributes: ['id', 'title', 'phase', 'releaseDate'],
      where: { id: id },
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

const getAllJustMovies = async (request, response) => {
  try {
    const movies = await models.Movies.findAll()

    return response.send(movies)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Movie, please try again')
  }
}

const saveNewMovieWithHeroesAndVillains = async (request, response) => {
  try {
    const {
      title, phase, chronologicalOrder, releaseDate, heroes, villains
    } = request.body

    if (!title || !phase || !chronologicalOrder || !releaseDate || !heroes || !villains) {
      return response.status(400).send('The following fields are required: title, phase, chronologicalOrder, releaseDate, heroes, villains')
    }

    let newMovieResponse = {
      title: '',
      phase: 0,
      chronologicalOrder: 0,
      releaseDate: '',
      heroes: [],
      villains: []
    }

    const doesMovieExist = await models.Movies.findOne({ where: { title: title } })
    let movieId

    if (doesMovieExist) {
      movieId = doesMovieExist.id
      newMovieResponse.title = doesMovieExist.title
      newMovieResponse.phase = doesMovieExist.phase
      newMovieResponse.chronologicalOrder = doesMovieExist.chronologicalOrder
      newMovieResponse.releaseDate = doesMovieExist.releaseDate
    } else {
      const newMovie = await models.Movies.create({ title, phase, chronologicalOrder, releaseDate })

      movieId = newMovie.id
      newMovieResponse.title = newMovie.title
      newMovieResponse.phase = newMovie.phase
      newMovieResponse.chronologicalOrder = newMovie.chronologicalOrder
      newMovieResponse.releaseDate = newMovie.releaseDate
    }
    for (const hero of heroes) {
      const { heroAlias, heroName, status } = hero
      let heroId

      const doesHeroExist = await models.Heroes.findOne({ where: { heroAlias: heroAlias } })

      if (doesHeroExist) {
        heroId = doesHeroExist.id
        newMovieResponse.heroes.push(doesHeroExist.dataValues)
      } else {
        const newHero = await models.Heroes.create({ heroAlias, heroName, status })

        heroId = newHero.id
        newMovieResponse.heroes.push(newHero)
      }

      const doesMovieHeroExist = await models.MoviesHeroes.findOne({
        where: {
          [models.Sequelize.Op.and]: [
            { heroId },
            { movieId }
          ]
        }
      })

      if (!doesMovieHeroExist) {
        await models.MoviesHeroes.create({ heroId, movieId })
      }
    }

    for (const villain of villains) {
      const { villainAlias, villainName, status } = villain
      let villainId

      const doesVillainExist = await models.Villains.findOne({ where: { villainAlias: villainAlias } })

      if (doesVillainExist) {
        villainId = doesVillainExist.id
        newMovieResponse.villains.push(doesVillainExist.dataValues)
      } else {
        const newVillain = await models.Villains.create({ villainAlias, villainName, status })

        villainId = newVillain.id

        newMovieResponse.villains.push(newVillain.dataValues)
      }

      const doesMovieVillainExist = await models.MoviesVillains.findOne({
        where: {
          [models.Sequelize.Op.and]: [
            { villainId },
            { movieId }
          ]
        }
      })

      if (!doesMovieVillainExist) {
        await models.MoviesVillains.create({ villainId, movieId })
      }
    }

    return response.status(201).send(newMovieResponse)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to create Movie, please try again')
  }
}

module.exports = { getAllMoviesWithHeroesAndVillains, getMovieWithHeroesAndVillainsByTitle, getAllJustMovies, saveNewMovieWithHeroesAndVillains, getMovieWithHeroesAndVillainsByID }
