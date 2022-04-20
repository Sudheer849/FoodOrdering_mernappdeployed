import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import But from "./Sample_Button";
import Select from "@mui/material/Select";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import List_Items from "./List_items";
import Profile from "../users/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outlet from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BasicSelect from "./Register";
import "./buyer.css";

const VendorUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setcontact] = useState("");
  const [shopname, setshop] = useState("");
  const [openingtime, setopen] = useState("");
  const [closingtime, setclose] = useState("");
  const [venorbuy, setvend] = useState(1);
  const [totalorders, setorders] = useState(0);

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangecontact = (event) => {
    setcontact(event.target.value);
  };
  const onChangeshop = (event) => {
    setshop(event.target.value);
  };
  const onChangeopen = (event) => {
    setopen(event.target.value);
  };
  const onChangeclose = (event) => {
    setclose(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setcontact("");
    setshop("");
    setopen("");
    setclose("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      contact: contactnumber,
      shop: shopname,
      closetime: closingtime,
      opentime: openingtime,
      venorbuy: venorbuy,
      totalorders: 0,
    };

    axios.post("/api/reg/vendor",newUser).then((response) => {
      alert("Created\t" + response.data.name);
      console.log(response.data);
    });

    resetInputs();
  };

  return (
    <React.Fragment>
      <div class="fg_image">
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Manager's Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              variant="outlined"
              value={contactnumber}
              onChange={onChangecontact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shop Name"
              variant="outlined"
              value={shopname}
              onChange={onChangeshop}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Opening time"
              variant="outlined"
              value={openingtime}
              onChange={onChangeopen}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Closing time"
              variant="outlined"
              value={closingtime}
              onChange={onChangeclose}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={onSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default VendorUser;
