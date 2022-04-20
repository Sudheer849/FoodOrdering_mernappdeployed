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

const Fooditemlist = (props) => {
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
      .post("/api/food_item/find_items",Items)
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
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            navigate("/login/vend_user/list/addfooditem");
          }}
        >
          Add FoodItem
        </Button>
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
                    <TableCell>Delete</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind}</TableCell>
                      <TableCell>{item.item_name}</TableCell>
                      <TableCell>{item.Price}</TableCell>
                      <TableCell>{item.Type}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => {
                            axios
                              .post(
                                "/api/food_item/delete_item",
                              item
                              )
                              .then((response) => {
                                window.location.reload(false);
                              });
                          }}
                        >
                          Delete Item
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          endIcon={<SendIcon />}
                          onClick={() => {
                            localStorage.setItem("FoodId", item._id);
                            navigate("/login/vend_user/list/edit");
                          }}
                        >
                          Edit Item
                        </Button>
                      </TableCell>
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

export default Fooditemlist;
