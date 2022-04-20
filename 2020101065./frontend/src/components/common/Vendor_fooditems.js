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

const List_Items = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
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
    <div>
      <React.Fragment>
        <Button variant="contained" endIcon={<SendIcon />}>
          ADD
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
                          variant="contained"
                          color="success"
                          onClick={() => {
                            <Alert variant="outlined" severtiy="warning">
                              Hello
                            </Alert>;
                            /*  <Alert variant="outlined" severity="warning">
                              Are you sure you want to delete the item
                              <Button color="inherit"
                              onClick={() => {
                                axios
                                .post(
                                  "/food_item/delete_item",
                                  item
                                )
                                .then((response) => {
                                });
                              }}>
                                  Yes
                              </Button>
                              <Button color="inherit" onClick={() => {


                              }}>
                              No</Button>
                          </Alert>*/
                          }}
                        >
                          Delete_Item
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => {
                            axios
                              .post(
                                "/api/food_item/edit_item"
                              ,item
                              )
                              .then((response) => {});
                          }}
                        >
                          Edit_Item
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
};

export default List_Items;
