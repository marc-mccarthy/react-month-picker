const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calendar = require('./routes/calendar.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/calendar', calendar);

/** ---------- START SERVER ---------- **/
app.listen(PORT, ()  => {
    console.log('Listening on port: ', PORT);
});