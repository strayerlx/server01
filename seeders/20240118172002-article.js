'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles', [
      {
        title: '今天11',
        content: "不知道干嘛11",
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        title: '今天12',
        content: "不知道干嘛12",
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        title: '今天13',
        content: "不知道干嘛13",
        createdAt: new Date(),
        updateAt: new Date(),
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Articles', null, {});

  }
};
