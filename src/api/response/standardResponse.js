class StandardResponse {
    constructor() {
        this.error = null;
        this.data = null;
    }

    sendSuccessResponse(res, data, header){
        return res.header(header).json(data);
    }

    sendErrorResponse(res, httpStatusCode, error) {
        this.error = { ...error };
        this.data = null;
        return res.status(httpStatusCode).json(this);
    }
}

module.exports = StandardResponse;