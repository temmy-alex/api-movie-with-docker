'use strict';

const { hashPassword } = require('../helpers/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let setPassword = hashPassword('rahasia123')

    const addUser = [
      {
        name: 'admin',
        email: 'admin@mail.com',
        password: setPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Users', addUser, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
