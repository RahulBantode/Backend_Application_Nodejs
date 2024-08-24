const userRouter = require('express').Router();
const userValidationRule = require('../validations/userValidationRule');
const requestValidation = require('../validations/requestValidation');
const userController = require('../controllers/userController');

// get user by id
userRouter.get(
    '/user/:id', 
    userValidationRule.getUser,     // request validation rule accepted
    requestValidation,              // validating the request.
    userController.getUserById      // calling the user controller getUserById 
);

// register user
userRouter.post(
    '/user/register',
    userValidationRule.registerUser,
    requestValidation,
    userController.registerUser
);

// update user
userRouter.put(
    '/user/update', 
    userValidationRule.updateUser,
    requestValidation,
    userController.updateUser
);

// delete user
userRouter.delete(
    '/user/delete/:id', 
    userValidationRule.deleteUser,
    requestValidation,
    userController.deleteUser
);

// list of all users
userRouter.get(
    '/users', 
    userValidationRule.displayUsers,
    requestValidation,
    userController.displayAllUsers
);

module.exports = userRouter;