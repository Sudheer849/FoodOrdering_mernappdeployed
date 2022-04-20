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
  age: {
    type: Number,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  venorbuy: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
  },
});

module.exports = Buy = mongoose.model("Buyer", Buyerschema);
