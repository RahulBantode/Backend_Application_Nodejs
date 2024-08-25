const { body, param } = require('express-validator');

// user validation rules
const userValidation = {
    registerUser: [
        body('firstName')
            .exists().withMessage('firstName is required')
            .isAlpha().withMessage('firstName should have only letters'),
        body('lastName')
            .exists().withMessage('lastName is required')
            .isAlpha().withMessage('lasttName should have only letters'),
        body('email')
            .exists().withMessage('email is required')
            .isEmail().withMessage('Invalid email address, please enter correct email address'),
        body('phone')
            .exists().withMessage('phone number is required')
            .isLength({min:10, max:10}).withMessage('Invalid phone number, please enter correct phone number')
            .isNumeric().withMessage('Invalid phone number, please enter correct phone number')
    ],
    getUser: [
        param('id')
            .exists().withMessage('id is required')
            .isInt().withMessage('Please enter correct user id')
    ],
    updateUser: [
        body('id')
            .exists().withMessage('id is required')
            .isInt().withMessage('Please enter correct user id'),
        body('firstName')
            .optional()
            .isAlpha().withMessage('firstName should have only letters'),
        body('lastName')
            .optional()
            .isAlpha().withMessage('lasttName should have only letters'),
        body('email')
            .optional()
            .isEmail().withMessage('Invalid email address, please enter correct email address'),
        body('phone')
            .optional()
            .isLength({min:10, max:10}).withMessage('Invalid phone number, please enter correct phone number')
            .isNumeric().withMessage('Invalid phone number, please enter correct phone number')
    ],
    deleteUser: [
        param('id')
            .exists().withMessage('id is required')
            .isInt().withMessage('Please enter correct user id')
    ],
    displayUsers: [
        body('firstName')
            .optional()
            .isAlpha().withMessage('firstName should have only letters'),
        body('lastName')
            .optional()
            .isAlpha().withMessage('lasttName should have only letters'),
        body('email')
            .optional()
            .isEmail().withMessage('Invalid email address, please enter correct email address'),
        body('phone')
            .optional()
            .isLength({min:10, max:10}).withMessage('Invalid phone number, please enter correct phone number')
            .isNumeric().withMessage('Invalid phone number, please enter correct phone number')
    ],
}

module.exports = userValidation;