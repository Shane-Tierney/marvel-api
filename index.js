/* eslint-disable max-len */
const express = require('express')
const { getAllHeroesWithMovies, getAllHeroesWithMoviesByIdOrAliasOrName } = require('./controllers/heroesControllers')
const { getAllMoviesWithHeroesAndVillains, getMovieWithHeroesAndVillainsByTitle, getAllJustMovies, saveNewMovieWithHeroesAndVillains } = require('./controllers/moviesControllers')
const { getAllVillainsWithMovies, getAllVillainsWithMoviesByIdOrAliasOrName } = require('./controllers/villainsControllers')
const { indexRender, isRunning, catchAll } = require('./controllers/marvel')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/api/documentation', indexRender)

app.get('/api/movies', getAllMoviesWithHeroesAndVillains)
app.get('/api/movies/movies', getAllJustMovies)
app.get('/api/movies/:title', getMovieWithHeroesAndVillainsByTitle)

app.get('/api/heroes', getAllHeroesWithMovies)
app.get('/api/heroes/:search', getAllHeroesWithMoviesByIdOrAliasOrName)

app.get('/api/villains', getAllVillainsWithMovies)
app.get('/api/villains/:search', getAllVillainsWithMoviesByIdOrAliasOrName)

app.post('/api/movies', express.json(), saveNewMovieWithHeroesAndVillains)

app.all('*', catchAll)

app.listen(1337, isRunning)
