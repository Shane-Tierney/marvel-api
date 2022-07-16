const moviesList = [
  {
    id: 1,
    title: 'Iron Man',
    phase: 1,
    chronologicalOrder: 3,
    releaseDate: '2008-05-02',
    heroes: [
      {
        id: 1,
        heroAlias: 'Iron Man',
        heroName: 'Tony Stark',
        status: 'Deceased',
        moviesHeroes: {
          id: 1,
          heroId: 1,
          movieId: 1,
        }
      },
      {
        id: 7,
        heroAlias: 'Nick Fury',
        heroName: 'Nicholas J. Fury',
        status: 'Alive',
        moviesHeroes: {
          id: 13,
          heroId: 7,
          movieId: 1,
        }
      },
      {
        id: 8,
        heroAlias: 'War Machine',
        heroName: 'James "Rhodey" Rhodes',
        status: 'Alive',
        moviesHeroes: {
          id: 18,
          heroId: 8,
          movieId: 1,
        }
      }
    ],
    villains: [
      {
        id: 1,
        villainAlias: 'Ten Rings',
        villainName: 'The Ten Rings',
        status: 'Alive',
        moviesVillains: {
          id: 1,
          villainId: 1,
          movieId: 1,
        }
      },
      {
        id: 2,
        villainAlias: 'Iron Monger',
        villainName: 'Obadiah Stane',
        status: 'Deceased',
        moviesVillains: {
          id: 2,
          villainId: 2,
          movieId: 1,
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Captain America: The First Avenger',
    phase: 1,
    chronologicalOrder: 1,
    releaseDate: '2011-07-22',
    heroes: [
      {
        id: 3,
        heroAlias: 'Captain America',
        heroName: 'Steve Rogers',
        status: 'Alive',
        moviesHeroes: {
          id: 6,
          heroId: 3,
          movieId: 4,
        }
      },
      {
        id: 7,
        heroAlias: 'Nick Fury',
        heroName: 'Nicholas J. Fury',
        status: 'Alive',
        moviesHeroes: {
          id: 16,
          heroId: 7,
          movieId: 4,
        }
      },
      {
        id: 9,
        heroAlias: 'Bucky',
        heroName: 'James Buchanan "Bucky" Barnes',
        status: 'Alive',
        moviesHeroes: {
          id: 20,
          heroId: 9,
          movieId: 4,
        }
      }
    ],
    villains: [
      {
        id: 7,
        villainAlias: 'Red Skull',
        villainName: 'Johann Schmidt',
        status: 'Alive',
        moviesVillains: {
          id: 7,
          villainId: 7,
          movieId: 4,
        }
      },
      {
        id: 8,
        villainAlias: 'Arnim Zola',
        villainName: 'Arnim Zola',
        status: 'Deceased',
        moviesVillains: {
          id: 8,
          villainId: 8,
          movieId: 4,
        }
      }
    ]
  },
]

const singleMovie = {
  id: 1,
  title: 'Iron Man',
  phase: 1,
  chronologicalOrder: 3,
  releaseDate: '2008-05-02',
  heroes: [
    {
      id: 1,
      heroAlias: 'Iron Man',
      heroName: 'Tony Stark',
      status: 'Deceased',
      moviesHeroes: {
        id: 1,
        heroId: 1,
        movieId: 1,
      }
    },
    {
      id: 7,
      heroAlias: 'Nick Fury',
      heroName: 'Nicholas J. Fury',
      status: 'Alive',
      moviesHeroes: {
        id: 13,
        heroId: 7,
        movieId: 1,
      }
    },
    {
      id: 8,
      heroAlias: 'War Machine',
      heroName: 'James "Rhodey" Rhodes',
      status: 'Alive',
      moviesHeroes: {
        id: 18,
        heroId: 8,
        movieId: 1,
      }
    }
  ],
  villains: [
    {
      id: 1,
      villainAlias: 'Ten Rings',
      villainName: 'The Ten Rings',
      status: 'Alive',
      moviesVillains: {
        id: 1,
        villainId: 1,
        movieId: 1,
      }
    },
    {
      id: 2,
      villainAlias: 'Iron Monger',
      villainName: 'Obadiah Stane',
      status: 'Deceased',
      moviesVillains: {
        id: 2,
        villainId: 2,
        movieId: 1,
      }
    }
  ]
}

module.exports = { moviesList, singleMovie }
