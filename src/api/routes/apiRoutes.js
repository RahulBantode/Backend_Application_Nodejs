const { ERROR_MESSAGES, HTTP_ERRORS } = require('../../constants/apiConstants');

const userRouter = require('./userRouter');

const standardResponse = require('../response/standardResponse');
const response = new standardResponse();

class ApiRoutes { 
    constructor(app) {
        this.app = app;
    }

    init() {
        // Base route for user get initialized.
        this.app.use('/api', userRouter);

        this.app.use((req, res) => {
            response.sendErrorResponse(
                res,
                HTTP_ERRORS.NOT_FOUND,
                ERROR_MESSAGES.NOT_FOUND,
            );
        });
    }
}
module.exports = ApiRoutes;