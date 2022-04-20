const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Userschema = new Schema({
  tip: {
    type: String,
    required: true,
  },
});

module.exports = Helloo = mongoose.model("HiH", Userschema);
