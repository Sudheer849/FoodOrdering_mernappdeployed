const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Vendor: {
    type: String,
  },
  Buyer: {
    type: String,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
  },
});

module.exports = Order = mongoose.model("Orders", UserSchema);
