const express = require('express')
const app = express()
// const db = require('./config/db');
const camionRutas = require('./routes/camionRoutes')
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );

app.use('/', camionRutas);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('el servidor esta corriendo');
})

