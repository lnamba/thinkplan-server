var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM users`).then(function(users){
    res.json(users.rows)
  })
});

router.post('/', function(req, res, next) {
  knex.raw(`INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`)
  .then(function(users) {
    res.json(users.rows)
  })
})


module.exports = router;
