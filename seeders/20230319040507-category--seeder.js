'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addCategories = [
      {
        title: "Action",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comedy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Categories', addCategories, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
