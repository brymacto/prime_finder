const express = require('express');
const primeNumberCalculator = require('../services/prime-number-calculator')

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, _next) => {
  res.render('index', { title: 'Express' });
});

router.get('/prime_numbers', (req, res, next) => {
  res
    .set('Content-Type', 'application/json')
    .status(200)
    .send({ median: primeNumberCalculator(req.query.upper_limit) });
  next();
});

module.exports = router;
