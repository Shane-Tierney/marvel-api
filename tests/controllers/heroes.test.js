/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const { heroesList } = require('../mocks/heroes')
const { getAllHeroesWithMovies } = require('../../controllers/heroesControllers')



chai.use(sinonChai)
const { expect } = chai

describe('Controllers -- Heroes', () => {
  let sandbox
  let stubbedFindAll
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindAll = sandbox.stub(models.Heroes, 'findAll')

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

  describe('getAllHeroesWithMovies', () => {
    it('retrieves a list of Heroes with its Movies and calls response.send() with the list', async () => {
      stubbedFindAll.returns(heroesList)

      await getAllHeroesWithMovies({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(heroesList)
    })
  })
})
