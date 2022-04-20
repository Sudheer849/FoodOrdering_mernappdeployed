const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var FoodRouter = require("./routes/food_items");
var RegRouter  = require("./routes/Reg");
var FavRouter  = require("./routes/fav");
var OrderRouter  = require("./routes/orders");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://mongo:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})                         

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/food_item",FoodRouter);
app.use("/reg",RegRouter);
app.use("/fav",FavRouter);
app.use("/buyerorder",OrderRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
