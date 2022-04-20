var express = require("express");
var router = express.Router();

const Order = require("../models/Orders");

router.get("/", function (req, res) {
  Order.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
router.post("/find_ordersbybuyer", (req, res) => {
  const Buyer = req.body.Buyer;
  Order.find({ Buyer }).then((user) => {
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
router.post("/find_itemsbyVendor", (req, res) => {
  const Vendor = req.body.Vendor;
  Order.find({ Vendor }).then((user) => {
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
router.post("/orders", (req, res) => {
  const Orders = new Order({
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: req.body.Status,
  });
  Orders.save()
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;

router.post("/delete_orders", (req, res) => {
  const Orders = new Order({
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: req.body.Status,
  });
  Order.deleteOne({ item_name: req.body.item_name })
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;

router.post("/editaccstatus", (req, res) => {
  const Orders = {
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: "ACCEPTED",
  };
  const id = req.body._id;
  Order.findByIdAndUpdate(id, Orders, (err, order) => {
    if (err) {
      res.status(200).json(order);
    } else {
      res.status(400).send(err);
    }
  });
});
module.exports = router;

router.post("/editcookstatus", (req, res) => {
  const Orders = {
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: "COOKING",
  };
  const id = req.body._id;
  Order.findByIdAndUpdate(id, Orders, (err, order) => {
    if (err) {
      res.status(200).json(order);
    } else {
      res.status(400).send(err);
    }
  });
});
module.exports = router;
router.post("/editreadystatus", (req, res) => {
  const Orders = {
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: "Ready for Pickup",
  };
  const id = req.body._id;
  Order.findByIdAndUpdate(id, Orders, (err, order) => {
    if (err) {
      res.status(200).json(order);
    } else {
      res.status(400).send(err);
    }
  });
});
module.exports = router;

router.post("/editcompletestatus", (req, res) => {
  const Orders = {
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: "Completed",
  };
  const id = req.body._id;
  Order.findByIdAndUpdate(id, Orders, (err, order) => {
    if (!err) {
      res.status(200).json(order);
    } else {
      res.status(400).send(err);
    }
  });
});
module.exports = router;
router.post("/editrejectstatus", (req, res) => {
  const Orders = {
    item_name: req.body.item_name,
    Price: req.body.Price,
    Vendor: req.body.Vendor,
    Buyer: req.body.Buyer,
    Quantity: req.body.Quantity,
    Status: "Rejected",
  };
  const id = req.body._id;
  Order.findByIdAndUpdate(id, Orders, (err, order) => {
    if (err) {
      res.status(200).json(order);
    } else {
      res.status(400).send(err);
    }
  });
});
module.exports = router;
