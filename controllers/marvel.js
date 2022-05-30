const indexRender = (request, response) => {
  return response.render('index')
}

const isRunning = () => {
  console.log('Application is up: http://localhost:1337') // eslint-disable-line no-console
}

const catchAll = (request, response) => {
  return response.sendStatus(404)
}

module.exports = { indexRender, isRunning, catchAll }
