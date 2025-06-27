const express = require('express')
const app = express()
const engine = require('ejs-mate');
// const db = require('./config/db');
const camionRutas = require('./routes/camionRoutes')
const path = require('path');

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))
app.use('/', camionRutas);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('el servidor esta corriendo');
})

