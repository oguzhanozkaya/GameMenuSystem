const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Game Menu Server running on http://localhost:${PORT}`);
});