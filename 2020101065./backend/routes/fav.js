var express = require("express");
var router = express.Router();

const Favourites = require("../models/Favourites");

router.get("/", function (req, res) {
  Favourites.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
router.post("/find_items", (req, res) => {
  const User = req.body.User;
  Favourites.find({ User }).then((user) => {
    if (!user) {
      return res.status(404).json({
        error: "There are no food items corresponding to this user",
      });
    } else {
      res.status(200).json(user);
      return user;
    }
  });
});
module.exports = router;
router.post("/post_items", (req, res) => {
  const newUser = new Favourites({
    item_name: req.body.item_name,
    Price: req.body.Price,
    Type: req.body.Type,
    Tag: req.body.Tag,
    Vendor: req.body.Vendor,
    User: req.body.User,
  });

  newUser
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;
