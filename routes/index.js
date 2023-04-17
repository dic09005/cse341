

const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.json('Hello Awesome World');
});

module.exports = routes;