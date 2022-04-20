var express = require("express");
var router = express.Router();

const Food_Item = require("../models/Hi");
const item = require("../models/Food_Items");

router.get("/", function (req, res) {
  Food_Item.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
