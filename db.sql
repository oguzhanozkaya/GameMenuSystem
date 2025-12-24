-- Creates database game_menu_db for the game menu system.
CREATE DATABASE game_menu_db;
USE game_menu_db;

-- Creates settings table.
CREATE TABLE settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_name VARCHAR(50) NOT NULL UNIQUE,
    setting_value VARCHAR(50) NOT NULL
);

-- Creates scores table. 
CREATE TABLE scores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    player_name VARCHAR(50) NOT NULL,
    score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserts initial data to settings table.
INSERT INTO settings (setting_name, setting_value) VALUES 
('difficulty', 'Normal'),
('master_volume', '50'),
('graphics_quality', 'High'),
('language', 'English');

-- Inserts initial data to scores table
INSERT INTO scores (player_name, score, created_at) VALUES 
('Neo', 9999, NOW()),
('Trinity', 8500, NOW() - INTERVAL 2 HOUR),
('Morpheus', 7200, NOW() - INTERVAL 1 DAY),
('Agent Smith', 5000, NOW() - INTERVAL 3 DAY),
('Cypher', 100, NOW() - INTERVAL 5 DAY);