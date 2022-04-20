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
import { useLocation } from "react-router-dom";
import "./userbuy.css";

const ThisBuy = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/login/buy_user/profile")}
      >
        MyProfile
      </Button>
      <div style={{ display: "flex" }}>
        <Button
          style={{ marginLeft: "auto" }}
          variant="contained"
          color="secondary"
          onClick={() => navigate("/login/vend_user/completelist")}
        >
          FOOD ITEMS
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          style={{ marginRight: "auto" }}
          variant="contained"
          color="secondary"
          onClick={() => navigate("/login/buy_user/favourites")}
        >
          MY FAVOURITES
        </Button>
        <div
          style={{
            position: "absolute",
            left: "93%",
            top: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/login/vend_user/buyerlistorders")}
          >
            My Orders
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "10%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/login/vend_user/wallet")}
          >
            Wallet
          </Button>
          
        </div>
      </div>
      <div class="buy_image" sx={({ display: "flex" }, { width: 480 })}></div>
    </React.Fragment>
  );
};

export default ThisBuy;
