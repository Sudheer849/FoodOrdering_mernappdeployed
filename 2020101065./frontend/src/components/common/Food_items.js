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

const Add_Food_Item = (props) => {
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
      // Extras: Extras,
    };

    axios
      .post("/api/food_item/food_items",newFoodItem)
      .then((response) => {
        alert("Successfully Added Food Item \t" + response.data.item_name);
        console.log(response.data);
      });

    resetInputs();
  };
  return (
    <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="ItemName"
          variant="outlined"
          value={item_name}
          onChange={onChangeitemname}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Price"
          variant="outlined"
          value={Price}
          onChange={onChangeprice}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Type"
          variant="outlined"
          value={Type}
          onChange={onChangetype}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Tag"
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
  );
};
export default Add_Food_Item;
