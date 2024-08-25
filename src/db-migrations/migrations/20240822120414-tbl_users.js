'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'tbl_users',
      {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: Sequelize.STRING(55),
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING(55),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(55),
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING(20),
            allowNull:false,
        },
        created_at:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("now"),
        },
        updated_at:{
            type: Sequelize.DATE,
        }
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_users')
  }
};
