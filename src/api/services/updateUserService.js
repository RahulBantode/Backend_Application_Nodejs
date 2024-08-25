const moment = require('moment');
const tblUsersMethod = require('../methods/tblUsersMethod');
const { HTTP_ERRORS, ERROR_MESSAGES } = require('../../constants/apiConstants');
const StandardResponse = require('../response/standardResponse');
const response = new StandardResponse();

/**
 * Update the user service with respect to id passed in request body.
 * @param {*} req 
 * @param {*} res 
 * @returns updated user object
 */
const updateUserService = async (req, res) => {
    try {
        // request validation handled in validation middleware
        const { id, firstName, lastName, email, phone } = req.body;
        
        // Error Case :- If (firstname/lastname/email/phone) nothing are present in payload, then sending error response to UI as
        //               Insufficient data to update
        if(!firstName && !lastName && !email && !phone) {
            console.error(`There are no data found in request payload to update for userId : ${id}`);
            return response.sendErrorResponse(res, HTTP_ERRORS.BAD_REQUEST, ERROR_MESSAGES.INSUFFICIENT_DATA);
        }

        // Error case :- Fetching the user from DB by id, to validate the user is actually present in DB or not
        const user = await tblUsersMethod.fetchOne({ where : { id: parseInt(id) }, raw:true });
        // Error case :- If user not present in DB, then sending user not found error response to UI.
        if(!user) {
            console.error(`User with id ${id} not present in DB, please provide correct user id to update the data`);
            return response.sendErrorResponse(res, HTTP_ERRORS.BAD_REQUEST, ERROR_MESSAGES.USER_NOT_FOUND);
        }

        // creation of user updation payload
        const payload = {
            firstname: (firstName) ? firstName : user.firstname,
            lastname : (lastName) ? lastName : user.lastname,
            email : (email) ? email : user.email,
            phone : (phone) ? parseInt(phone) : user.phone,
            updated_at: Date.now(),
        };

        // updating the user into the DB 
        const updatedUser = await tblUsersMethod.update(payload, { where: { id: parseInt(id) }});
        // on successful updation of user data, sending sucess response to UI.
        if(updatedUser) {
            console.log(`User data is successfully updated`);
            payload.updated_at = moment(payload.updated_at).format('YYYY-MM-DD HH:mm:ss');
            return response.sendSuccessResponse(res, { userData: payload });
        }
    } catch (error) {
        console.error(`Error in updateUserService : ${error}`);
        return response.sendErrorResponse(
            res,
            HTTP_ERRORS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        );
    }
}

module.exports = updateUserService;