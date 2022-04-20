var express = require("express");
var router = express.Router();

const Food_Item = require("../models/Food_Items");
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
router.post("/find_items", (req, res) => {
  const Vendor = req.body.name;
  Food_Item.find({ Vendor }).then((user) => {
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
router.post("/find_itemsbyId", (req, res) => {
  const _id = req.body._id;
  Food_Item.find({ _id }).then((user) => {
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
router.post("/food_items", (req, res) => {
  const newFood_Item = new Food_Item({
    item_name: req.body.item_name,
    Price: req.body.Price,
    Type: req.body.Type,
    Rating: 0,
    Tag: req.body.Tag,
    //   Vendor : localStorage.getItem('Name')
    Vendor: req.body.Vendor,
  });
  newFood_Item
    .save()
    .then((food_item) => {
      res.status(200).json(food_item);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;
router.post("/delete_item", (req, res) => {
  const Item = new item({
    item_name: req.body.item_name,
    Price: req.body.Price,
    Type: req.body.Type,
    Rating: 0,
    Tag: req.body.Tag,
  });
  item
    .deleteOne({ item_name: req.body.item_name })
    .then((food_item) => {
      res.status(200).json(food_item);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;

router.post("/edit_item", (req, res) => {
  const Item = {
    item_name: req.body.item_name,
    Price: req.body.Price,
    Type: req.body.Type,
    Rating: 0,
    Tag: req.body.Tag,
  };
  var id = req.body.id;
  item.findByIdAndUpdate(id, Item, (err, order) => {
    if (!err) {
      res.status(200).json(order);
    } else {
      res.status(400).send(err);
    }
  });
});

module.exports = router;
