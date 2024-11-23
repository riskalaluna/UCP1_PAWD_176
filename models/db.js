const mysql = require('mysql2');
require('dotenv').config();

// Membuat koneksi ke database MySQL dengan mengambil nilai dari file .env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Mengecek koneksi
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
