const express = require('express');
const app = express();
const mysql = require('mysql');
const util = require('util');

app.use(express.urlencoded({ extended: true }));// for post mathod data encoding

// db connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'info',
    port: '3306',
});
conn.query = util.promisify(conn.query);

conn.connect((err) => {
    if (err) throw err;
    console.log("Database connection is successfully done");
});



// Routes
app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/welcome', (req, res) => {
    res.render('welcome.ejs');
});



//signup route
app.post('/signup_submit', async (req, res) => {
    const { email, password, name, username } = req.body;

    try {
        const sql = `INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)`;
        await conn.query(sql, [name, username, email, password]);
        //res.send('User registered successfully');
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.send(`Error registering user: ${error.message}`);
    }
});



//login route
app.post('/login_submit', async (req, res) => {
    const { email, pass } = req.body;

    try {
        const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
        const results = await conn.query(sql, [email, pass]);

        if (results.length > 0) {
          // res.send('Login successful');
          res.redirect('/welcome');
        } else {
            res.send('Invalid ID or password');
        }
    } catch (error) {
        console.error(error);
        res.send(`Error during login: ${error.message}`);
    }

});

const PORT = 1000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






// sql command for create table

// CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         username VARCHAR(50) NOT NULL,
//         email VARCHAR(50) NOT NULL,
//         password VARCHAR(50) NOT NULL
//     );