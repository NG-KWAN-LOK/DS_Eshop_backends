var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("hello eshop v0.0.1");
});

module.exports = router;
