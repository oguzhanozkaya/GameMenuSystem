/*
 * SENG 451 - Group 2 - Homework 3
 * Filename    : gamemenu.js
 * Description : This is the main entry point of the Game Menu System.
 * It initializes the Express server, configures the EJS view engine,
 * sets up middleware for parsing requests, and connects the Routes.
 */

/*
 * Import necessary core modules.
 * express for the web server.
 * body-parser for form data.
 * path for file directory management.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

/*
 * Configure the View engine to use EJS, 
 * which allows the application to separate the user interface logic from business rules.
 * Define the public folder as a source for static assets like CSS.
 */
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routing Table
 * This section maps specific URLs to the logic inside the MenuController.
 * This ensures that when a user visits a link, the correct action is taken.
 */
const router = express.Router();
const MenuController = require('./controllers/menuController');
router.get('/', MenuController.getMainMenu);
router.get('/game', MenuController.getNewGame);
router.post('/save-score', MenuController.saveScore);
router.get('/leaderboard', MenuController.getLeaderboard);
router.get('/latest', MenuController.getLatestScores);
router.get('/settings', MenuController.getSettings);
router.post('/settings', MenuController.saveSettings);
app.use('/', router);

/**
 * SERVER EXECUTION
 * Defines the port number where the app will be hosted locally.
 * Confirms the server is active and ready for the demo.
 */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Game Menu Server running on http://localhost:${PORT}`);
});