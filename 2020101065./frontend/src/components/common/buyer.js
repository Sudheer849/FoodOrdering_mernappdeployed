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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Outlet from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BasicSelect from "./Register";
import "./buyer.css";

const Buyer = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setcontact] = useState("");
  const [age, setage] = useState("");
  const [batchname, setbatch] = useState("");
  const [vendorbuy, setbuy] = useState(2);

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangecontact = (event) => {
    setcontact(event.target.value);
  };
  const onChangeage = (event) => {
    setage(event.target.value);
  };
  const onChangebatch = (event) => {
    setbatch(event.target.value);
  };
  const resetInputs = () => {
    setName("");
    setEmail("");
    setcontact("");
    setage("");
    setbatch("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      contact: contact_number,
      age: age,
      batch: batchname,
      venorbuy: vendorbuy,
    };

    axios
      .post(
        "/api/reg/buyer",
        newUser
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.error == "Email") {
          alert("Email already taken");
        } else {
          alert("Succefully Registered");
        }
        // }
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
              label="Name"
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
              value={contact_number}
              onChange={onChangecontact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeage}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Batch(UG1/UG2/UG3/UG4/UG5)"
              variant="outlined"
              value={batchname}
              onChange={onChangebatch}
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

export default Buyer;
