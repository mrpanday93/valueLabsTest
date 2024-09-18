var express = require('express');
var router = express.Router();
const AuthenticationMiddleware = require('../Middleware/authentication').AuthenticationMiddleware;


router.get('/:num1/:num2', [AuthenticationMiddleware], function(req, res, next) {
  try {
    let num1 = req.params.num1;

    let num2 = req.params.num2;

    let pattern= /[0-9]/;

    if (!pattern.test(num1) || !pattern.test(num2)) {
      res.status(404).send(`Bad request. Numbers must be interger`)
    } else {
      let sum = parseInt(num1) + parseInt(num2);

      res.send({ sum: sum });
    }

  } catch (e) {
    next(e);
  }
  
});

module.exports = router;
