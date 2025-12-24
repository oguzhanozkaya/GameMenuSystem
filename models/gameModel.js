/*
 * SENG 451 - Group 2 - Homework 3
 * Filename    : gameModel.js
 * Description : This file implements the MODEL component of the MVC architecture.
 * It handles the application's data logic and direct communication with the 
 * MySQL database, keeping data rules separate from the user interface.
 */

// Import the mysql2 library to enable the application to communicate with the MySQL database server.
const mysql = require('mysql2');

// Establish the connection parameters for the database connection.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      
    password: 'root',
    database: 'game_menu_db'
});

// Attempt to open the connection to the database and print a confirmation message or an error if the connection fails.
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// GameModel object which centralizes all data-related operations and for the system.
const GameModel = {
    addScore: (name, score, callback) => {
        db.query('INSERT INTO scores (player_name, score) VALUES (?, ?)', [name, score], callback);
    },

    getHighScores: (callback) => {
        db.query('SELECT * FROM scores ORDER BY score DESC LIMIT 10', callback);
    },

    getLatestScores: (callback) => {
        db.query('SELECT * FROM scores ORDER BY created_at DESC LIMIT 10', callback);
    },

    getSettings: (callback) => {
        db.query('SELECT * FROM settings', callback);
    },

    updateSetting: (name, value, callback) => {
        db.query('UPDATE settings SET setting_value = ? WHERE setting_name = ?', [value, name], callback);
    }
};

// Export the GameModel so it can be used to manage data flow within the application.
module.exports = GameModel;