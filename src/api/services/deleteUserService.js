const tblUsersMethod = require('../methods/tblUsersMethod');

const { HTTP_ERRORS, ERROR_MESSAGES } = require('../../constants/apiConstants');
const StandardResponse = require('../response/standardResponse');
const response = new StandardResponse();

/**
 * Deleting the user from DB with respect to id.
 * @param {*} req 
 * @param {*} res 
 * @returns Sucess response : Successful deletion of user from DB
 */
const deleteUserService = async (req, res) => {
    try {
        // request validation handled in validation middleware
        const { id } = req.params;
        
        // fetching the user with id from DB
        const user = await tblUsersMethod.fetchOne({ where : { id }, raw:true });
        // Error case : if user not found then sending response to UI as user not found
        if(!user) {
            console.error(`User with id ${id} not present in DB, please provide correct user id to delete`);
            return response.sendErrorResponse(res, HTTP_ERRORS.BAD_REQUEST, ERROR_MESSAGES.USER_NOT_FOUND);
        }

        // deleting the user from DB.
        const deleteCount = await tblUsersMethod.delete({ where : { id }});
        // case : If successful deletion of user then sending success response to UI.
        if(deleteCount) {
            console.log(`User ${user.firstname} ${user.lastname} is deleted`);
            return response.sendSuccessResponse(res, {data : `User ${user.firstname} ${user.lastname} is deleted`});
        }
    } catch(error) {
        console.error(`Error in deleteUserService : ${error}`);
        return response.sendErrorResponse(
            res,
            HTTP_ERRORS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        );
    }
}

module.exports = deleteUserService;