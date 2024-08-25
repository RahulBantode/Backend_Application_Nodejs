const tblUsersMethod = require('../methods/tblUsersMethod');
const { Op } = require('sequelize');

const { HTTP_ERRORS, ERROR_MESSAGES } = require('../../constants/apiConstants');
const StandardResponse = require('../response/standardResponse');
const response = new StandardResponse();

/**
 * Register the new user into the DB
 * @param {*} req 
 * @param {*} res 
 * @returns Registered user object
 */
const registerUserService = async (req, res) => {
    try {
        // request validation handled in validation middleware
        const { firstName, lastName, email, phone } = req.body;

        // Fetching the user with combination of firstname && lastname && email
        const user = await tblUsersMethod.fetchOne({
            where: { email },
            raw:true,
        });
        
        // Error case : If we found the user then it confirm that user was already registered into the system, so we need to restrict
        // that user and send error response to UI
        if(user) {
            console.error(`The user is already registerd into the system`);
            return response.sendErrorResponse(res, HTTP_ERRORS.BAD_REQUEST, ERROR_MESSAGES.USER_ALREADY_EXIST);
        }

        // creation of payload.
        const payload = {
            firstname: firstName,
            lastname: lastName,
            email,
            phone: parseInt(phone)
        };

        // registering the user into DB
        let registeredUser = await tblUsersMethod.create(payload);
        // on successful registeration of user, sending success response to UI.
        if(registeredUser) {
            console.log(`User ${firstName} ${lastName} successfully registered`);
            return response.sendSuccessResponse(res, { registedUser: payload });
        }
    } catch(error) {
        console.error(`Error in registeredUserSerive : ${error}`);
        return response.sendErrorResponse(
            res,
            HTTP_ERRORS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        );
    }
}

module.exports = registerUserService;