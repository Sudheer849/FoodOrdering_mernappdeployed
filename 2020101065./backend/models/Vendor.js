const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Buyerschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
  opentime: {
    type: String,
    required: true,
  },
  closetime: {
    type: String,
    required: true,
  },
  venorbuy: {
    type: Number,
    required: true,
  },
  totalorders: {
    type: Number,
    required: true,
  },
});

module.exports = Vend = mongoose.model("Vendor", Buyerschema);
