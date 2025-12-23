const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      
    password: 'root',
    database: 'game_menu_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

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

module.exports = GameModel;