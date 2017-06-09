var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM lessons`).then(function(lessons){
    res.json(lessons.rows)
  })
});

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM lessons WHERE id = ${req.params.id}`)
  .then(function(lesson) {
    res.json(lesson.rows)
  })
})

router.post('/', function(req, res, next) {
  knex.raw(`INSERT INTO lessons (date_taught, subject, content, reflections, user_id) VALUES ('${req.body.date}', '${req.body.subject}', '${req.body.content}', '${req.body.reflections}', 1)`)
  .then(function() {
    knex.raw(`SELECT * FROM lessons`).then(function(lesson) {
      res.json(lesson.rows)
    })
  })
})

router.put('/edit/:id', function(req, res, next) {
  console.log(req.body)
  knex.raw(`UPDATE lessons SET subject = '${req.body.subject}', content = '${req.body.content}', reflections = '${req.body.reflections}' WHERE id = ${req.params.id}`)
  .then(function() {
    knex.raw(`SELECT * FROM lessons WHERE id = ${req.params.id}`).then(function(lesson) {
      res.json(lesson.rows)
    })
  })
})

router.delete('/:id', function(req, res, next) {
  knex.raw(`DELETE FROM lessons WHERE id = ${req.params.id}`)
  .then(function(lesson) {
    res.json(lesson)
  })
})

module.exports = router;
