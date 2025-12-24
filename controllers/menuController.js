/*
 * SENG 451 - Group 2 - Homework 3
 * Filename    : menuController.css
 * Description : This is the controller component of the project,
 * which acts as the brain of the application,
 * receiving requests from the routes,
 * interacting with the Model for data.
 */

// Import the GameModel (model layer) to allow the controller to request data operations from the MySQL database.
const GameModel = require('../models/gameModel');

// Define the MenuController object which contains the logic for handling user interactions with the menu system.
const MenuController = {
    
    // Receive player data from the game screen, instruct the Model to save it, and then refresh the leaderboard view.
    saveScore: (req, res) => {
        const { player_name, score } = req.body;
        
        GameModel.addScore(player_name, score, (err) => {
            if (err) throw err;
            res.redirect('/leaderboard');
        });

        console.log("New Score created: %s, %s.", player_name, score)
    },

    // Handle the request for the home screen by rendering the main menu index view.
    getMainMenu: (req, res) => {
        res.render('index');
    },

    // Respond to the start command by loading the game simulation view.
    getNewGame: (req, res) => {
        res.render('game');
    },

    // Retrieve the highest scores from the Model and pass them to the leaderboard view for a ranked display.
    getLeaderboard: (req, res) => {
        GameModel.getHighScores((err, results) => {
            if (err) throw err;
            res.render('leaderboard', { scores: results, title: 'High Scores' });
        });
    },

    // Fetch the most recently recorded scores from the Model to show the latest player activity in the view.
    getLatestScores: (req, res) => {
        GameModel.getLatestScores((err, results) => {
            if (err) throw err;
            res.render('leaderboard', { scores: results, title: 'Recent Scores' });
        });
    },

    // Pull all system settings from the database and organize them into a map so the View can display current values.
    getSettings: (req, res) => {
        GameModel.getSettings((err, results) => {
            if (err) throw err;
            const settingsMap = {};
            results.forEach(row => settingsMap[row.setting_name] = row.setting_value);
            res.render('settings', { settings: settingsMap });
        });
    },

    // Capture setting changes from the settings form and update each entry in the database sequentially.
    saveSettings: (req, res) => {
        const { difficulty, master_volume, graphics_quality, language } = req.body;
        
        GameModel.updateSetting('difficulty', difficulty, () => {
            GameModel.updateSetting('master_volume', master_volume, () => {
                GameModel.updateSetting('graphics_quality', graphics_quality, () => {
                    GameModel.updateSetting('language', language, () => {
                        res.redirect('/settings');
                    });
                });
            });
        });

        console.log("Settings updated.")
    }
};

// Export the controller so it can be utilized by the routing system to manage user traffic.
module.exports = MenuController;