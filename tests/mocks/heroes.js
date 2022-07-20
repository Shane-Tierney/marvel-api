const heroesList = [{
  id: 2,
  heroAlias: 'Thor',
  heroName: 'Thor Odinson',
  status: 'Alive',
  movies: [
    {
      id: 3,
      title: 'Thor',
      phase: 1,
      releaseDate: '2011-05-06',
      moviesHeroes: {
        id: 4,
        heroId: 2,
        movieId: 3,
      }
    },
    {
      id: 5,
      title: 'The Avengers',
      phase: 1,
      releaseDate: '2012-05-04',
      moviesHeroes: {
        id: 5,
        heroId: 2,
        movieId: 5,
      }
    }
  ]
},
{
  id: 3,
  heroAlias: 'Captain America',
  heroName: 'Steve Rogers',
  status: 'Alive',
  movies: [
    {
      id: 4,
      title: 'Captain America: The First Avenger',
      phase: 1,
      releaseDate: '2011-07-22',
      moviesHeroes: {
        id: 6,
        heroId: 3,
        movieId: 4,
      }
    },
    {
      id: 5,
      title: 'The Avengers',
      phase: 1,
      releaseDate: '2012-05-04',
      moviesHeroes: {
        id: 7,
        heroId: 3,
        movieId: 5,
      }
    }
  ]
}]

module.exports = { heroesList }
