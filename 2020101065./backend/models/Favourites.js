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
  Rating: {
    type: Number,
    default: 0,
  },
  Vendor: {
    type: String,
  },
  Type: {
    type: String,
    required: true,
  },
  Tag: [
    {
      type: String,
    },
  ],
  User: {
    type: String,
  },
});

module.exports = Favourite = mongoose.model("Favourites", UserSchema);
