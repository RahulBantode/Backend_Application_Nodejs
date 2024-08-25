const connection = require('./dbConfig');

// Class to establish the db connection and once the object is created send it back to caller.
class Sequel {
    static async getConnection() {
        if (!Sequel.connection) {
            await new Sequel().init();
        }
        return Sequel.connection;
    }

    async init() {
        try {
            await connection.authenticate();
            console.log('Database connection successful...');
            Sequel.connection = connection;
        } catch (error) {
            console.log('Exit from app as DB connection could not be established !', error);
            // If error encountered while creation of database the node process will terminate by following line 
            // DB connection should be established before the server is started listening. if DB connection get fail then server is not
            // going to start and process will turn off its execution.
            process.exit(1);
        }
    }
}

module.exports = Sequel.getConnection();
