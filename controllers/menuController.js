const GameModel = require('../models/gameModel');

const MenuController = {
    saveScore: (req, res) => {
        const { player_name, score } = req.body;
        
        GameModel.addScore(player_name, score, (err) => {
            if (err) throw err;
            res.redirect('/leaderboard');
        });

        console.log("New Score created.")
    },
    getMainMenu: (req, res) => {
        res.render('index');
    },

    getNewGame: (req, res) => {
        res.render('game');
    },

    getLeaderboard: (req, res) => {
        GameModel.getHighScores((err, results) => {
            if (err) throw err;
            res.render('leaderboard', { scores: results, title: 'High Scores' });
        });
    },

    getLatestScores: (req, res) => {
        GameModel.getLatestScores((err, results) => {
            if (err) throw err;
            res.render('leaderboard', { scores: results, title: 'Recent Scores' });
        });
    },

    getSettings: (req, res) => {
        GameModel.getSettings((err, results) => {
            if (err) throw err;
            const settingsMap = {};
            results.forEach(row => settingsMap[row.setting_name] = row.setting_value);
            res.render('settings', { settings: settingsMap });
        });
    },

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

module.exports = MenuController;