/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const { moviesList, singleMovie } = require('../mocks/movies')
const { getAllMoviesWithHeroesAndVillains, getMovieWithHeroesAndVillainsByTitle, getAllJustMovies, saveNewMovieWithHeroesAndVillains } = require('../../controllers/moviesControllers')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers -- Movies', () => {
  let sandbox
  let stubbedFindAll
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindAll = sandbox.stub(models.Movies, 'findAll')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  describe('getAllMoviesWithHeroesAndVillains', () => {
    it('retrieves a list of Movies with its heroes and its villains and calls response.send() with the list', async () => {
      stubbedFindAll.returns(moviesList)

      await getAllMoviesWithHeroesAndVillains({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(moviesList)
    })
  })

//   describe('getMovieWithHeroesAndVillainsByTitle', () => {
//     it('retrieves the movie associated with the provided title', async () => {
//       stubbedFindAll.returns(singleMovie)
//       const request = { params: { title: 'Iron Man' } }

//       await getMovieWithHeroesAndVillainsByTitle(request, response)

//       expect(stubbedFindAll).to.have.been.calledWith({ where: { title: 'Iron Man' } })
//       expect(stubbedSend).to.have.been.calledWith(singleMovie)
//     })

//     it('returns a 404 when no movie is found', async () => {
//       stubbedFindAll.returns(null)
//       const request = { params: { title: 'not-found' } }

//       await getMovieWithHeroesAndVillainsByTitle(request, response)

//       expect(stubbedFindAll).to.have.been.calledWith({ where: { title: 'not-found' } })
//       expect(stubbedSendStatus).to.have.been.calledWith(404)
//     })

//     it('returns a 500 with an error message when the database call throws an error', async () => {
//       stubbedFindAll.throws('ERROR!')
//       const request = { params: { title: 'throw-error' } }

//       await getMovieWithHeroesAndVillainsByTitle(request, response)

//       expect(stubbedFindAll).to.have.been.calledWith({ where: { slug: 'throw-error' } })
//       expect(stubbedStatus).to.have.been.calledWith(500)
//       expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve Movie, please try again')
//     })
//   })

  //   describe('saveNewMovieWithHeroesAndVillains', () => {
  //     it('accepts new movie details and saves it as a new movie, then returns the saved movie with a 201 status', async () => {
  //       const request = { body: singleMovie }
  //       const stubbedCreate = sinon.stub(models.Movies, 'create').returns(singleMovie)

  //       await saveNewMovieWithHeroesAndVillains(request, response)

//       expect(stubbedCreate).to.have.been.calledWith(singleMovie)
//       expect(stubbedStatus).to.have.been.calledWith(201)
//       expect(stubbedSend).to.have.been.calledWith(singleMovie)
//     })
//   })
})
