const villainsList = [
  {
    id: 1,
    villainAlias: 'Ten Rings',
    villainName: 'The Ten Rings',
    status: 'Alive',
    movies: [
      {
        id: 1,
        title: 'Iron Man',
        phase: 1,
        releaseDate: '2008-05-02',
        moviesVillains: {
          id: 1,
          villainId: 1,
          movieId: 1,
          createdAt: '2022-07-16T18:19:00.000Z',
          updatedAt: '2022-07-16T18:19:00.000Z',
          deletedAt: null
        }
      }
    ]
  },
  {
    id: 2,
    villainAlias: 'Iron Monger',
    villainName: 'Obadiah Stane',
    status: 'Deceased',
    movies: [
      {
        id: 1,
        title: 'Iron Man',
        phase: 1,
        releaseDate: '2008-05-02',
        moviesVillains: {
          id: 2,
          villainId: 2,
          movieId: 1,
          createdAt: '2022-07-16T18:19:00.000Z',
          updatedAt: '2022-07-16T18:19:00.000Z',
          deletedAt: null
        }
      }
    ]
  }
]

module.exports = { villainsList }
