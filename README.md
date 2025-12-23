# SENG 451 - Group 2 - Homework 3 - Game Menu System (MVC)
This project is a prototype demonstrating the **Model-View-Controller (MVC)** architectural pattern. It features a sci-fi themed game menu system with settings page, a high-score leaderboard, a lastest scores dashboard, and a simulated game environment.

## Group Members
* **Ayşe İrem Göksu**
* **Emir Can Tokalakoğlu**
* **Oğuzhan Özkaya**

## Project Overview
* **Pattern Implemented:** MVC (Model-View-Controller)
* **Scenario:** Game Menu System
* **Tech Stack:** Node.js (Express), MySQL, EJS Templating

### Architectural Breakdown
* **Model (`/models`):** Handles all database interactions (SQL queries) for fetching scores and updating settings.
* **View (`/views`):** Renders the UI using EJS templates. Decoupled from logic.
* **Controller (`/controllers`):** Processes user input, and selects the View.

---

## Setup

### 1. Prerequisites
* [Node.js](https://nodejs.org/)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/)

### 2. Clone the Repository
```bash
git clone https://github.com/oguzhanozkaya/GameMenuSystem.git
cd GameMenuSystem
```

### 3. Install Dependencies
```bash
npm install
```

---

## Database Configuration

1.  Open **MySQL Workbench** or preferred SQL client.
2.  Open the file `db.sql` located in project folder.
3.  Run the entire script to create the database (`game_menu_db`), tables, and seed initial data.

**Important:**
Database connection must be configured with local MySQL credentials.
1.  Open `models/gameModel.js`.
2.  Update the `password` field (and `user` if different from 'root'):

```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Update if necessary
    password: 'root', // Update if necessary
    database: 'game_menu_db'
});
```

## Usage

### 1. Start the Server
```bash
node gamemenu.js
```
Message if everything is true: `Game Menu Server running on http://localhost:3000`

### 2. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000).

### 3. Features to Demo
* **Main Menu:** Central hub navigating to all subsystems.
* **Settings:** Change Difficulty, Volume, or Language. Values persist in the database.
* **High Scores:** View the top players (fetched from MySQL).
* **Recent Scores:** View the Recent Scores (fetched from MySQL).
* **Play Mission:** * Click "Start Mission".
    * Click **"Create Game"** to simulate a game over.
    * Enter a name and score to save it to the database.

## Project Structure

```
GameMenuSystem/
├── controllers/            # CONTROLLER: Handles logic & traffic
│   └── menuController.js
├── models/                 # MODEL: Database interactions
│   └── gameModel.js       
├── views/                  # VIEW: EJS Templates
│   ├── index.ejs        
│   ├── settings.ejs     
│   ├── leaderboard.ejs  
│   └── game.ejs
├── public/                 # Static Assets (CSS)
│   └── css/style.css
├── gamemenu.js             # Entry point
└── db.sql                  # SQL setup script
```

---
*Submission for SENG315/SENG451 - Homework 3*