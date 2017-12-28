var express = require('express');
var router = express.Router();
const db = require('../db/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db
    .query(`SELECT * FROM highscores`)
    .then(res => {
      res.json({
        date: res,
        message: 'Highscore received'
      });
    });
});
router.post('/create', function(req, res, next) {
  console.log("Route Create (user)",req.body.name)
  db.one(`
    INSERT INTO highscores 
    (name, score, date)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [
      req.data.name,
      req.data.address,
      req.data.event_date,
    ]
  );

  //store name and score on db
  //return success message
  res.send('respond with a resource');
});
module.exports = router;
