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

const Wallet = (props) => {
  const navigate = useNavigate();
  const [amount, setamount] = useState(0);
  const onChangeamount = (event) => {
    setamount(event.target.value);
  };
  const resetInputs = () => {
    setamount(0);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const User = {
      email: localStorage.getItem("Email"),
      amount: localStorage.getItem("money"),
      inc: amount,
    };
    console.log(User.amount);
    axios
      .post("/api/reg/updateamount", User)
      .then((response) => {
        alert("Money Added Successfully");
        console.log(response.data);
      });
    resetInputs();
    const newUser = {
      name: localStorage.getItem("Name"),
      email: localStorage.getItem("Email"),
    };
    axios.post("/api/reg/login", newUser).then((response) => {
      //favourites to that particular user
      //alert("Successfully Logged in\t");
      console.log(response.data);
      localStorage.setItem("money", response.data.amount);
      //window.location.reload(false);
    });
  };
  return (
    <React.Fragment>
      <div class="pg_image">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h3>Amount in the Wallet : {localStorage.getItem("money")}</h3>
        </div>
        <Grid container align={"center"} spacing={4}>
          <Grid item xs={20}>
            <TextField
              label="Enter Amount"
              variant="outlined"
              value={amount}
              onChange={onChangeamount}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" onClick={onSubmit}>
              ADD AMOUNT
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Wallet;
