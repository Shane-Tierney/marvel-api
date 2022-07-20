'use strict'



module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Heroes', [
      { heroAlias: 'Iron Man', heroName: 'Tony Stark', status: 'Deceased' },
      { heroAlias: 'Thor', heroName: 'Thor Odinson', status: 'Alive' },
      { heroAlias: 'Captain America', heroName: 'Steve Rogers', status: 'Alive' },
      { heroAlias: 'Hulk', heroName: 'Bruce Banner', status: 'Alive' },
      { heroAlias: 'Black Widow', heroName: 'Natasha Romanoff', status: 'Deceased' },
      { heroAlias: 'Hawkeye', heroName: 'Clint Barton', status: 'Alive' },
      { heroAlias: 'Nick Fury', heroName: 'Nicholas J. Fury', status: 'Alive' },
      { heroAlias: 'War Machine', heroName: 'James "Rhodey" Rhodes', status: 'Alive' },
      { heroAlias: 'Bucky', heroName: 'James Buchanan "Bucky" Barnes', status: 'Alive' },
    ])

    await queryInterface.bulkInsert('movies', [
      { title: 'Iron Man', phase: 1, chronologicalOrder: 3, releaseDate: '2008-05-02' },
      { title: 'Iron Man 2', phase: 1, chronologicalOrder: 4, releaseDate: '2010-05-07' },
      { title: 'Thor', phase: 1, chronologicalOrder: 5, releaseDate: '2011-05-06' },
      { title: 'Captain America: The First Avenger', phase: 1, chronologicalOrder: 1, releaseDate: '2011-07-22' },
      { title: 'The Avengers', phase: 1, chronologicalOrder: 6, releaseDate: '2012-05-04' },
    ])

    await queryInterface.bulkInsert('villains', [
      { villainAlias: 'Ten Rings', villainName: 'The Ten Rings', status: 'Alive' },
      { villainAlias: 'Iron Monger', villainName: 'Obadiah Stane', status: 'Deceased' },
      { villainAlias: 'Justin Hammer', villainName: 'Justin Hammer', status: 'Alive' },
      { villainAlias: 'Whiplash', villainName: 'Ivan Vanko', status: 'Deceased' },
      { villainAlias: 'Loki', villainName: 'Loki Laufeyson', status: 'Deceased' },
      { villainAlias: 'Destroyer', villainName: 'Destroyer', status: 'Deceased' },
      { villainAlias: 'Red Skull', villainName: 'Johann Schmidt', status: 'Alive' },
      { villainAlias: 'Arnim Zola', villainName: 'Arnim Zola', status: 'Deceased' },
      { villainAlias: 'The Chitauri', villainName: 'The Chitauri', status: 'Deceased' },
    ])

    await queryInterface.bulkInsert('moviesHeroes', [
      { heroId: 1, movieId: 1 },
      { heroId: 1, movieId: 2 },
      { heroId: 1, movieId: 5 },
      { heroId: 2, movieId: 3 },
      { heroId: 2, movieId: 5 },
      { heroId: 3, movieId: 4 },
      { heroId: 3, movieId: 5 },
      { heroId: 4, movieId: 5 },
      { heroId: 5, movieId: 2 },
      { heroId: 5, movieId: 5 },
      { heroId: 6, movieId: 3 },
      { heroId: 6, movieId: 5 },
      { heroId: 7, movieId: 1 },
      { heroId: 7, movieId: 2 },
      { heroId: 7, movieId: 3 },
      { heroId: 7, movieId: 4 },
      { heroId: 7, movieId: 5 },
      { heroId: 8, movieId: 1 },
      { heroId: 8, movieId: 2 },
      { heroId: 9, movieId: 4 },
    ])

    return queryInterface.bulkInsert('moviesVillains', [
      { villainId: 1, movieId: 1 },
      { villainId: 2, movieId: 1 },
      { villainId: 3, movieId: 2 },
      { villainId: 4, movieId: 2 },
      { villainId: 5, movieId: 3 },
      { villainId: 6, movieId: 3 },
      { villainId: 7, movieId: 4 },
      { villainId: 8, movieId: 4 },
      { villainId: 5, movieId: 5 },
      { villainId: 9, movieId: 5 },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('villainsMovies')
    await queryInterface.bulkDelete('heroesMovies')
    await queryInterface.bulkDelete('villains')
    await queryInterface.bulkDelete('movies')

    return queryInterface.bulkDelete('heroes')
  }
}
