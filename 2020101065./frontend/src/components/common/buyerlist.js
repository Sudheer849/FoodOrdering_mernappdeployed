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

const CompleteList = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [name, setname] = useState(localStorage.getItem("Name"));

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const Items = {
      name: name,
    };

    axios
      .get("/api/food_item")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div>
        <Grid container>
          <Grid item xs={12} md={9} lg={9}>
            <Paper>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell> Sr No.</TableCell>
                    <TableCell> Item_Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Add to Favourites</TableCell>
                    <TableCell>Buy item</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind}</TableCell>
                      <TableCell>{item.item_name}</TableCell>
                      <TableCell>{item.Price}</TableCell>
                      <TableCell>{item.Type}</TableCell>
                      <TableCell>{item.Vendor}</TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={() => {
                            const Fav = {
                              item_name: item.item_name,
                              Price: item.Price,
                              Type: item.Type,
                              Vendor: item.Vendor,
                              Tag: item.Tag,
                              User: localStorage.getItem("Name"),
                            };

                            axios
                              .post("/api/fav/post_items",Fav)
                              .then((response) => {
                                alert(
                                  "Food Item successfully added to Favourites\t" +
                                    response.data.name
                                );
                                console.log(response.data);
                              });
                          }}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      </TableCell>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          localStorage.setItem("FoodItemid", item._id);
                          localStorage.setItem("VendorName", item.Vendor);
                          localStorage.setItem("FoodPrice", item.Price);
                          localStorage.setItem("Itemname", item.item_name);
                          navigate("/login/vend_user/completelist/buy");
                        }}
                      >
                        Buy
                      </Button>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default CompleteList;
