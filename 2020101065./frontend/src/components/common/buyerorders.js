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

const BuyerOrders = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [buyer, setbuyer] = useState(localStorage.getItem("Name"));
  const [status, setstatus] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    const Items = {
      Buyer: buyer,
    };

    axios
      .post("/api/buyerorder/find_ordersbybuyer",Items)
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
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
                    <TableCell> Food Item</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Buyer</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, ind) => (
                    <TableRow key={ind}>
                      <TableCell>{ind}</TableCell>
                      <TableCell>{item.item_name}</TableCell>
                      <TableCell>{item.Price}</TableCell>
                      <TableCell>{item.Vendor}</TableCell>
                      <TableCell>{item.Buyer}</TableCell>
                      <TableCell>{item.Quantity}</TableCell>
                      <TableCell>{item.Status}</TableCell>
                      <TableCell>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => {
                            if (item.Status == "Ready for Pickup") {
                              const Order = {
                                item_name: item.item_name,
                                Price: item.Price,
                                Vendor: item.Vendor,
                                Buyer: item.Buyer,
                                Quantity: item.Quantity,
                                Status: item.Status,
                                _id: item._id,
                              };
                              axios
                                .post(
                                  "/api/buyerorder/editcompletestatus"
                                  ,Order
                                )
                                .then((response) => {
                                  //favourites to that particular user
                                  //alert("Successfully Logged in\t")
                                  console.log("Hello");
                                });
                              window.location.reload(false);
                            }
                          }}
                        >
                          Picked up
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

export default BuyerOrders;
