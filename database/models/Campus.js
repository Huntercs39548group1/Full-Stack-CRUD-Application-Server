/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require("sequelize"); // Import Sequelize
const db = require("../db"); // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    description: {
        type: Sequelize.TEXT,
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://img.freepik.com/free-vector/hand-draw-city-skyline-sketch_1035-19581.jpg?w=2000",
    },
});

// Export the campus model
module.exports = Campus;
