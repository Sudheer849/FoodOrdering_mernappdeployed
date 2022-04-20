import { useState, useEffect } from "react";
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

const Vendorprofile = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [email, setemail] = useState(localStorage.getItem("Email"));
  const [name, set_name] = useState("");
  const [gmail, set_gmail] = useState("");
  const [contact, set_contact] = useState("");
  const [shop, set_shop] = useState("");
  const [opentime, set_opentime] = useState("");
  const [closetime, set_closetime] = useState("");
  const onChangename = (event) => {
    set_name(event.target.value);
  };
  const onChangeemail = (event) => {
    set_gmail(event.target.value);
  };
  const onChangecontact = (event) => {
    set_contact(event.target.value);
  };
  const onChangeshop = (event) => {
    set_shop(event.target.value);
  };
  const onChangeopentime = (event) => {
    set_opentime(event.target.value);
  };
  const onChangeclosetime = (event) => {
    set_closetime(event.target.value);
  };
  //  const onChangeExtras = (event) => {
  //    set_extras(event.target.value);
  //  };
  const resetInputs = () => {
    set_name("");
    set_gmail("");
    set_contact("");
    set_shop("");
    set_opentime("");
    set_closetime("");
  };
  useEffect(() => {
    const Items = {
      email: email,
    };
    axios
      .post("/api/reg/find_itemsbyemail", Items)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();

    const UpdatedUser = {
      name: name,
      gmail: gmail,
      contact: contact,
      shop: shop,
      opentime: opentime,
      closetime: closetime,
      email: localStorage.getItem("Email"),
    };
    // console.log(newFoodItem.id);
    axios
      .post("/api/reg/editprofile", UpdatedUser)
      .then((response) => {
        localStorage.setItem("Email", response.data.gmail);
        alert(
          "Successfully Updated the User's Profile(Login with your updated account) \t"
        );

        //console.log(response.data);
        navigate("/login");
      });

    resetInputs();
  };
  return (
    <React.Fragment>
      <div class="pg_image">
        {items.map((item, ind) => (
          <React.Fragment>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "15%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2>Name : {item.name}</h2>
            </div>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "20%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2>Email: {item.email}</h2>
            </div>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "25%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2>Contact Number : {item.contact}</h2>
            </div>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "30%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2>Shop : {item.shop}</h2>
            </div>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "35%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2>Open Time : {item.opentime}</h2>
            </div>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3>Close time : {item.closetime}</h3>
            </div>
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Button color="success" variant="contained">
                Edit Details
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "red",
              }}
            >
              <h2> Let's Edit </h2>
            </div>
            <Grid container align={"center"} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Update Name"
                  variant="outlined"
                  value={name}
                  onChange={onChangename}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Update Email"
                  variant="outlined"
                  value={gmail}
                  onChange={onChangeemail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Update Contact Number"
                  variant="outlined"
                  value={contact}
                  onChange={onChangecontact}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Update shop"
                  variant="outlined"
                  value={shop}
                  onChange={onChangeshop}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Update opentime"
                  variant="outlined"
                  value={opentime}
                  onChange={onChangeopentime}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Update closetiem"
                  variant="outlined"
                  value={closetime}
                  onChange={onChangeclosetime}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="success" onClick={onSubmit}>
                  EDIT
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Vendorprofile;
