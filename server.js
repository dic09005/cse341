const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const express = require('express');

const app = express()
const port = process.env.PORT || 3000

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', '*');
    // res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
  })
  .use('/', require('./routes')
  );

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});