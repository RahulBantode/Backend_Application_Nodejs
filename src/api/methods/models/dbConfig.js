const  { Sequelize } = require('sequelize');

// Database configurations
module.exports = new Sequelize(
    process.env.DATABASE_URL,
    {
        define: {
            freezeTableName: true,
            timestamps: false,
        },
        logging: false,
    },
);