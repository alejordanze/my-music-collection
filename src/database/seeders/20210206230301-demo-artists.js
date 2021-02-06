'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', [{
      firstName: "Fiona",
      lastName: "Apple",
      birthDate: "1977-08-13"
      },
      {
        firstName: "Katie",
        lastName: "Crutchfield",
        birthDate: "2010-09-20"
      },
      {
        firstName: "Bob",
        lastName: "Dylan",
        birthDate: "1941-05-24"
      },
      {
        firstName: "Brendon",
        lastName: "Urie",
        birthDate: "1987-04-12"
      },
      {
        firstName: "Spencer",
        lastName: "Smith",
        birthDate: "1987-09-02"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};
