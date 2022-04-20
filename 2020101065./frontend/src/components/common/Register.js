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
import { createTheme, ThemeProvider } from "@mui/material/styles";
const BasicSelect = () => {
  const navigate = useNavigate();
  const [Option, setOption] = React.useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <Box id="dropdown" sx={({ display: "flex" }, { width: 480 })}>
      <FormControl sx={{ m: 2, width: 560 }}>
        <InputLabel id="">User Type</InputLabel>
        <Select
          labelId=""
          id=""
          value={Option}
          // defaultValue={this.state.selectValue}
          label="Option"
          onChange={handleChange}
        >
          <MenuItem value={1}>Buyer</MenuItem>
          <MenuItem value={2}>Vendor</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            if (Option == 1) {
              navigate("buyer"); //http://localhost:3000/register/buyer
              // export default App;
            } else if (Option == 2) {
              navigate("vendor");
            }
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};
export default BasicSelect;
