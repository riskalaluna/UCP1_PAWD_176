const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');  // Untuk menggunakan PUT dan DELETE
const hospitalRoutes = require('./routes/hospitalRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // Untuk parsing data form
app.use(methodOverride('_method'));  // Untuk mendukung PUT dan DELETE di form

// Menggunakan routing hospital
app.use('/hospitaly', hospitalRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
