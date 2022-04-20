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
import "./login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [variant, setvar] = useState(1);
  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
    };

    axios.post("/api/reg/login",newUser).then((response) => {
      //favourites to that particular user
      //alert("Successfully Logged in\t");
      setvar(response.data.venorbuy);
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      console.log(response.data);
      if (response.data.error == "err") {
        alert("Incorrect Email/Username");
      }
      // console.log(response.data.batch);
      else {
        localStorage.setItem("money", response.data.amount);
        if (response.data.venorbuy == 1) {
          navigate("vend_user");
        } else if (response.data.venorbuy == 2) {
          //   console.log(name);
          navigate("buy_user");
        }
      }
    });

    resetInputs();
  };

  return (
    <React.Fragment>
      <div class="pg_image">
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
            <Button variant="contained" onClick={onSubmit}>
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Login;
