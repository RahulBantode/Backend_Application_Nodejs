/* eslint-disable no-undef */
const API_CONSTANTS = {

    HTTP_SUCCESS: 200,

    HTTP_ERRORS: {
        INTERNAL_SERVER_ERROR: 500,
        NOT_FOUND: 404,
        BAD_REQUEST: 400,
    },

    ERROR_MESSAGES: {
        INTERNAL_SERVER_ERROR: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal Server error',
        },
        NOT_FOUND: {
            code: 'NOT_FOUND',
            message: 'requested resources not found, Invalid route',
        },
        USER_NOT_FOUND: {
            code: 'NOT_FOUND',
            message: "Users not found in system"
        },
        INSUFFICIENT_DATA: {
            code: 'INSUFFICIENT_DATA',
            message: 'Insufficient data (firstname/lastname/email/phone) is required to update'
        },
        INVALID_DATA_FORMAT: {
            code: 'INVALID_DATA_FORMAT',
            message: 'Required data are missing'
        },
        USER_ALREADY_EXIST: {
            code: 'USER_ALREADY_EXIST',
            message: 'User already registered into the system'
        },
    },
};

module.exports = API_CONSTANTS;
