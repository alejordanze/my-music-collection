module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Albums', [{
    releaseDate: '2020-04-10',
    rating: 99.0,
    title: 'Fetch the Bolt Cutters',
    year: 2020,
  },
  {
    releaseDate: '2012-06-18',
    rating: 75.0,
    title: 'The Idler Wheel...',
    year: 2012,
  },
  {
    releaseDate: '2020-03-27',
    rating: 95.0,
    title: 'Saint Cloud',
    year: 2020,
  },
  {
    releaseDate: '2017-07-14',
    rating: 78.0,
    title: 'Out in the Storm',
    year: 2017,
  },
  {
    releaseDate: '2020-06-19',
    rating: 98.0,
    title: 'Rough and Rowdy Ways',
    year: 2020,
  },
  {
    releaseDate: '2013-07-15',
    rating: 87.0,
    title: 'Too Weird to Live, Too Rare to Die!',
    year: 2013,
  },

  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Albums', null, {}),
};
