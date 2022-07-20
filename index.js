/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
const express = require('express')
const path = require('path')
const cors = require('cors')
const { getAllHeroesWithMovies, getAllHeroesWithMoviesByIdOrAliasOrName } = require('./controllers/heroesControllers')
const { getAllMoviesWithHeroesAndVillains, getMovieWithHeroesAndVillainsByTitle, getAllJustMovies, saveNewMovieWithHeroesAndVillains, getMovieWithHeroesAndVillainsByID } = require('./controllers/moviesControllers')
const { getAllVillainsWithMovies, getAllVillainsWithMoviesByIdOrAliasOrName } = require('./controllers/villainsControllers')
const { indexRender, isRunning } = require('./controllers/marvel')

const app = express()

app.use(cors())
app.use(express.static('client/build'))

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/api/documentation', indexRender)

app.get('/api/movies', getAllMoviesWithHeroesAndVillains)
app.get('/api/movies/movies', getAllJustMovies)
app.get('/api/movies/:id', getMovieWithHeroesAndVillainsByID)
app.get('/api/movies/search/:title', getMovieWithHeroesAndVillainsByTitle)

app.get('/api/heroes', getAllHeroesWithMovies)
app.get('/api/heroes/:search', getAllHeroesWithMoviesByIdOrAliasOrName)

app.get('/api/villains', getAllVillainsWithMovies)
app.get('/api/villains/:search', getAllVillainsWithMoviesByIdOrAliasOrName)

app.post('/api/movies', express.json(), saveNewMovieWithHeroesAndVillains)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(1337, isRunning)
