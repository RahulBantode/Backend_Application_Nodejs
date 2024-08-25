/* eslint-disable no-undef */
require('dotenv').config();

const http = require('http');
const sequelizeDBConn = require('./src/api/methods/models/sequelizeDBConnection');

const backendServerApp = require('./src/lib/serverApp');

//On successful resovled of promise for database connection backend server and routes are initialized, 
//if DB connection fails appropriate error message thrown and process stop its execution.
sequelizeDBConn.then(() => {
    backendServerApp.init();
    const server = http.createServer(backendServerApp.app);

    server.listen(process.env.SERVER_PORT, (error) => {
        if(!error) {
            console.log(`Backend server started at http://localhost:${process.env.SERVER_PORT}/`);
        }
    })

})
