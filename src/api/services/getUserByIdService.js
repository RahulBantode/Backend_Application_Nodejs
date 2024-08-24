const tblUsersMethod = require('../methods/tblUsersMethod');

const { HTTP_ERRORS, ERROR_MESSAGES } = require('../../constants/apiConstants');
const StandardResponse = require('../response/standardResponse');
const response = new StandardResponse();

/**
 * Fetching the user data with respect to id passed in request params.
 * @param {*} req 
 * @param {*} res 
 * @returns User object fetched from DB
 */
const getUserByIdService = async(req, res) => {
    try {
        // request validation handled in validation middleware
        const { id } = req.params;

        // fetching the user with id from DB
        let user = await tblUsersMethod.fetchOne({ where : { id }, raw:true });
        // Error case : if user not found then sending response to UI as user not found
        if(!user) {
            console.erro(`User with id ${id} not present in DB, please provide correct user id`);
            return response.sendErrorResponse(res, HTTP_ERRORS.BAD_REQUEST, ERROR_MESSAGES.USER_NOT_FOUND);
        }
        
        console.log(`Fetched the user data : ${JSON.stringify(user)}`);
        return response.sendSuccessResponse(res,  user );
    } catch(error) {
        console.error(`Error in getUsersByIdService : ${error}`);
        return response.sendErrorResponse(
            res,
            HTTP_ERRORS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        );
    }
}

module.exports = getUserByIdService;