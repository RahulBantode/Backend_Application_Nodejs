const tblUsersMethod = require('../methods/tblUsersMethod');

const { HTTP_ERRORS, ERROR_MESSAGES } = require('../../constants/apiConstants');
const StandardResponse = require('../response/standardResponse');
const response = new StandardResponse();

/**
 * Fetching the users from DB, and apply filtering on userlist according to payload passed in request body, if payload is not passed
 * then keep user list as it is (unfiltered)
 * @param {*} req 
 * @param {*} res 
 * @returns filtered user list 
 */
const displayAllUsersService = async (req, res) => {
    try {
        // request validation handled in validation middleware
        const { firstName, lastName, email, phone } = req.body;

        // Fetching all users from DB.
        const users = await tblUsersMethod.fetchAll({ raw: true });
        // Error case :- If users not found in system, then sending error response to UI as No users found in DB.
        if (!users.length) {
            console.error('Unable to fetch the users from DB');
            return response.sendErrorResponse(res, HTTP_ERRORS.BAD_REQUEST, ERROR_MESSAGES.USER_NOT_FOUND);
        }

        // Creating the filter list according to the payload (firstname/lastname/email/phone)
        let usersFilteredList = [];
        if(firstName) {
            let userByFirstName = users.filter((user) => user.firstname.toLowerCase() === firstName.toLowerCase());
            if(userByFirstName.length) {
                usersFilteredList.push({firstName : userByFirstName }); 
            }
        }
        if(lastName) {
            let userByLastName = users.filter((user) => user.lastname.toLowerCase() === lastName.toLowerCase());
            if(userByLastName.length) {
                usersFilteredList.push({lastName : userByLastName }); 
            }
        }
        if(email) {
            let userByEmail = users.filter((user) => user.email.toLowerCase() === email.toLowerCase());
            if(userByEmail.length) {
                usersFilteredList.push({email : userByEmail });
            }
        }
        if(phone) {
            let userByPhone = users.filter((user) => user.phone.toString() === phone.toString())
            if(userByPhone.length) {
                usersFilteredList.push({phone : userByPhone });
            }
        }

        // Case :- If (firstname/lastname/email/phone) nothing are present in payload, then it will sending the unfiltered list of users
        //         present in the DB.
        if(!firstName && !lastName && !email && !phone) {
            console.log('There is no filtering option present in request payload, so fetching user list without filter');
            // unfiltered list of users.
            usersFilteredList = users;
        }
        return response.sendSuccessResponse(res, { usersFilteredList });
    } catch (error) {
        console.error(`Error in displayAllUsersService : ${error}`);
        return response.sendErrorResponse(
            res,
            HTTP_ERRORS.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        );
    }
}

module.exports = displayAllUsersService;
