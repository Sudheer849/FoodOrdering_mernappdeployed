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
import { useNavigate } from "react-router-dom";

const EditItem = (props) => {
  const navigate = useNavigate();
  const [item_name, set_name] = useState("");
  const [Price, set_price] = useState("");
  const [Type, set_type] = useState("");
  //const [Extras, set_extras] =useState("");
  const [Tag, set_tag] = useState("");
  const onChangeitemname = (event) => {
    set_name(event.target.value);
  };

  const onChangeprice = (event) => {
    set_price(event.target.value);
  };
  const onChangetype = (event) => {
    set_type(event.target.value);
  };
  const onChangetag = (event) => {
    set_tag(event.target.value);
  };
  //  const onChangeExtras = (event) => {
  //    set_extras(event.target.value);
  //  };
  const resetInputs = () => {
    set_name("");
    set_price("");
    set_type("");
    set_tag("");
    // set_extras("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newFoodItem = {
      item_name: item_name,
      Price: Price,
      Type: Type,
      Tag: Tag,
      id: localStorage.getItem("FoodId"),
      // Extras: Extras,
    };
    console.log(newFoodItem.id);
    axios
      .post("/api/food_item/edit_item",newFoodItem)
      .then((response) => {
        alert("Successfully Updated the Food Item \t");
        //console.log(response.data);
        navigate("/login/vend_user/list");
      });

    resetInputs();
  };
  return (
    <React.Fragment>
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
            label="Update Item Name"
            variant="outlined"
            value={item_name}
            onChange={onChangeitemname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Update Price"
            variant="outlined"
            value={Price}
            onChange={onChangeprice}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Update Type"
            variant="outlined"
            value={Type}
            onChange={onChangetype}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Update Tag"
            variant="outlined"
            value={Tag}
            onChange={onChangetag}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            ADD
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default EditItem;
