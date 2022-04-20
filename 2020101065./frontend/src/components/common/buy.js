import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";

const UserBuy = (props) => {
  const navigate = useNavigate();
  const [quantity, setquantity] = useState("");
  const [items, setItems] = useState([]);
  const [id, setid] = useState(localStorage.getItem("FoodItemid"));
  const [vendor, setvendor] = useState(localStorage.getItem("VendorName"));
  const [buyer, setbuyer] = useState(localStorage.getItem("Name"));
  const [item_name, setitem] = useState(localStorage.getItem("Itemname"));
  const [price, setprice] = useState(localStorage.getItem("FoodPrice"));
  const onChangequantity = (event) => {
    setquantity(event.target.value);
  };
  const resetInputs = () => {
    setquantity("");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: localStorage.getItem("Name"),
      email: localStorage.getItem("Email"),
    };
    axios.post("/api/reg/login",newUser).then((response) => {
      localStorage.setItem("money", response.data.amount);
    });
    if (localStorage.getItem("money") < price * quantity) {
      alert("There is no enough money to buy");
    } else {
      const User = {
        email: localStorage.getItem("Email"),
        amount: localStorage.getItem("money"),
        inc: price * quantity,
      };
      console.log(User.amount);
      axios
        .post("/api/reg/decreaseamount",User)
        .then((response) => {
          // alert("Money Added Successfully");
          console.log(response.data);
        });

      const Buyer_Order = {
        item_name: item_name,
        Price: price,
        Vendor: vendor,
        Buyer: buyer,
        Quantity: quantity,
        Status: "PLACED",
      };
      console.log(localStorage.getItem("Name"));
      axios
        .post("/api/buyerorder/orders",Buyer_Order)
        .then((response) => {
          alert("Order Placed Successfully");
          console.log(response.data);
        });
    }
    resetInputs();
  };
  useEffect(() => {
    const Items = {
      _id: id,
    };
    axios
      .post("/api/food_item/find_itemsbyId",Items)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <div class="pg_image">
        {items.map((item, ind) => (
          <React.Fragment>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "30%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3>Item Name : {item.item_name}</h3>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "35%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3>Price : {item.Price}</h3>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3>Item Tags : {item.Tag}</h3>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3>Item Type : {item.Type}</h3>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3> Vendor : {item.Vendor}</h3>
            </div>
          </React.Fragment>
        ))}
        <Grid container align={"center"} spacing={4}>
          <Grid item xs={20}>
            <TextField
              label="Quantity(in numbers)"
              variant="outlined"
              value={quantity}
              onChange={onChangequantity}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={onSubmit}>
              Place Order
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default UserBuy;
