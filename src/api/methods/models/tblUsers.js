/* eslint-disable no-undef */
const { DataTypes } = require('sequelize');
const sequelizeDBConnection = require('./dbConfig');

const tblUsers = sequelizeDBConnection.define(
    'tbl_users',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: DataTypes.STRING(55),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(55),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(55),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull:false,
        },
        created_at:{
            type: DataTypes.DATE,
            defaultValue: Date.now(),
        },
        updated_at:{
            type: DataTypes.DATE,
        }
    },
)

module.exports = tblUsers;