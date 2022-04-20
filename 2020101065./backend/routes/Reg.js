var express = require("express");
var router = express.Router();

// Load User model
const Buy = require("../models/Buyer");
const Vend = require("../models/Vendor");

// GET request
// Getting all the users
router.get("/", function (req, res) {
  Vend.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request
// Add a user to db
router.post("/vendor", (req, res) => {
   const newVendor = new Vend({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    shop: req.body.shop,
    opentime: req.body.opentime,
    closetime: req.body.closetime,
    venorbuy: 1,
    totalorders: 0,
  });
  const email = req.body.email;
  Vend.findOne({ email }).then((user) => {
    if (!user) {
      newVendor
        .save()
        .then((use) => {
          res.status(200).json(use);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else {
      return res.status(200).json({
        error: "Email",
      });
    }
  });
})
module.exports = router;

router.post("/buyer", (req, res) => {
  const newUser = new Buy({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    age: req.body.age,
    batch: req.body.batch,
    venorbuy: req.body.venorbuy,
    amount: 40,
  });
  const email = req.body.email;
  Buy.findOne({ email }).then((user) => {
    if (!user) {
      newUser
        .save()
        .then((use) => {
          res.status(200).json(use);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else {
      return res.status(200).json({
        error: "Email",
      });
    }
  });
});
module.exports = router;

router.post("/editbuyerprofile", (req, res) => {
  const NewVendor = {
    name: req.body.name,
    email: req.body.gmail,
    contact: req.body.contact,
    age: req.body.age,
    batch: req.body.batch,
  };
  const mailId = req.body.email;
  Buy.updateOne({ email: mailId }, NewVendor).then((user) => {
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

router.post("/find_itemsbyemail", (req, res) => {
  const email = req.body.email;
  Vend.find({ email }).then((user) => {
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
router.post("/findbybuyeremail", (req, res) => {
  const email = req.body.email;
  Buy.find({ email }).then((user) => {
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

router.post("/editprofile", (req, res) => {
  const NewVendor = {
    name: req.body.name,
    email: req.body.gmail,
    contact: req.body.contact,
    shop: req.body.shop,
    opentime: req.body.opentime,
    closetime: req.body.closetime,
  };
  const mailId = req.body.email;
  Vend.updateOne({ email: mailId }, NewVendor).then((user) => {
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

router.post("/login", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  Buy.findOne({ email, name }).then((user) => {
    if (!user) {
      Vend.findOne({ email, name }).then((use) => {
        if (!use) {
          return res.status(200).json({
            error: "err",
          });
        } else {
          res.status(200).json(use);
          return use;
        }
      });
    } else {
      res.status(200).json(user);
      return user;
    }
  });
});
module.exports = router;

router.post("/updatecount", (req, res) => {
  const variable = req.body.totalorders + 1;
  const Vendor = {
    _id: req.body.id,
    totalorders: parseInt(req.body.totalorders),
  };
  var id = req.body.id;
  // const count  = Number(req.body.totalorders)
  Vend.findByIdAndUpdate(id, { $inc: { totalorders: 1 } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;

router.post("/decreasecount", (req, res) => {
  const variable = req.body.totalorders + 1;
  const Vendor = {
    _id: req.body._id,
    totalorders: parseInt(req.body.totalorders),
  };
  var id = req.body._id;
  // const count  = Number(req.body.totalorders)
  Vend.findByIdAndUpdate(id, { $inc: { totalorders: -1 } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;

router.post("/updateamount", (req, res) => {
  //const variable = req.body.totalorders + 1;
  const User = {
    email: req.body.email,
    amount: parseInt(req.body.amount),
    inc: parseInt(req.body.inc),
  };
  var id = req.body._id;

  // const count  = Number(req.body.totalorders)
  Buy.updateOne({ email: req.body.email }, { $inc: { amount: User.inc } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;

router.post("/decreaseamount", (req, res) => {
  //const variable = req.body.totalorders + 1;
  const User = {
    email: req.body.email,
    amount: parseInt(req.body.amount),
    inc: parseInt(req.body.inc),
  };
  var id = req.body._id;

  // const count  = Number(req.body.totalorders)
  Buy.updateOne({ email: req.body.email }, { $inc: { amount: -User.inc } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
module.exports = router;
