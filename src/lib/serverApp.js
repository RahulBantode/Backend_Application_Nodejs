const express = require('express');
const cors = require('cors');
const ApiRoutes = require('../api/routes/apiRoutes');

class ServerApp {
    async init() {
        console.log('Backend Application server initialized.....');
        this.app = express();
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        
        // To enable cross-origin resource sharing 
        this.app.use(cors());
        // Initialization of ApiRoutes class.
        this.apiRoutes = new ApiRoutes(this.app);
        // init() method of ApiRoutes class get called.
        this.apiRoutes.init();
    }
}

module.exports = new ServerApp();