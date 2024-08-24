const getUserByIdService = require('../services/getUserByIdService');
const registerUserService = require('../services/registerUserService');
const updateUserService = require('../services/updateUserService');
const deleteUserService = require('../services/deleteUserService');
const displayAllUsers = require('../services/displayAllUsersService');

const userController = {
    getUserById: async(req, res) => {
        await getUserByIdService(req, res);
    },
    registerUser: async(req, res) => {
        await registerUserService(req, res);
    },
    updateUser: async(req, res) => {
        await updateUserService(req, res);
    },
    deleteUser: async(req, res) => {    
        await deleteUserService(req, res);
    },
    displayAllUsers: async(req, res) => {
        await displayAllUsers(req, res);
    }
};

module.exports = userController;