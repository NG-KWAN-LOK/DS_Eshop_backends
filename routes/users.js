var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { email, password } = req.body;

  // process here

  res.status(200).send({ token: 123, email, password });
});

module.exports = router;
