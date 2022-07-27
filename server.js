'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views/pug'));
app.set('view engine', 'pug');
fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  res.render('index', { title: 'Hello', message: 'Please login' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
