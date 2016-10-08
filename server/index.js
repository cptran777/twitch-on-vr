'use strict'
/******************* INIT DEPENDENCIES *********************/

let express = require('express');
let bodyparser = require('body-parser');
let path = require('path');
require('dotenv').config();

let app = express();

/****************** CUSTOM DEPENDENCIES ********************/

let router = require('./routes');

/******************* INIT MIDDLEWARE ***********************/

app.use(express.static(__dirname + '/../client/public'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());

/********************* INIT ROUTES *************************/

router(app);

/********************* INIT SERVER *************************/

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log('Listening on port', port);
});
