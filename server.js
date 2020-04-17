const express = require('express');
const path = require('path');
const ejs = require('ejs');
const pug = require('pug');

var app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
    res.render(__dirname + '/index.html');
});

app.listen(7777, () => {
    console.log(`server is running...`);
});
