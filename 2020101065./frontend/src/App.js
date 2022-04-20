import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Whatever from "./components/users/button";
import Add_Food_Item from "./components/common/Food_items";
import List_Items from "./components/common/List_items";
import Buyer from "./components/common/buyer";
import VendorUser from "./components/common/vendor";
import Login from "./components/common/Login";
import ThisBuy from "./components/common/userbuy";
import ThisVender from "./components/common/uservend";
import BuyApp from "./Buyerapp";
import React from "react";
import Buyerprofile from "./components/common/buyerprofile";
import Vendorprofile from "./components/common/vendorprofile";
import Fooditemlist  from "./components/common/fooditemlist";
import Add_Fooditem from "./components/common/addfooditems";
import EditItem from "./components/common/edititems";
import CompleteList from "./components/common/buyerlist";
import MyFavourites from "./components/common/myfav";
import UserBuy from "./components/common/buy";
import BuyerOrders from "./components/common/buyerorders";
import VendorsOrders from "./components/common/vendororders";
import Wallet from "./components/common/wallet";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
const Lay = () => {
  return (
    <div>
      <Profile />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="button/hello" element={<UsersList />} />
          <Route path="register/buyer" element={<Buyer />} />
          <Route path="register/vendor" element={<VendorUser />} />
          <Route path="login" element={<Login />} />
          <Route path="login/buy_user" element={<ThisBuy />} />
          <Route path="login/vend_user" element={<ThisVender />} />
          <Route path="login/buy_user/profile" element={<Buyerprofile />} />
          <Route path="login/vend_user/profile" element={<Vendorprofile />} />
          <Route path="login/vend_user/list" element={<Fooditemlist />} />
          <Route path="login/vend_user/list/addfooditem" element={<Add_Fooditem />} />
          <Route path="/login/vend_user/list/edit" element={<EditItem />} />
          <Route path="/login/vend_user/completelist" element={<CompleteList />} />
          <Route path="/login/buy_user/favourites" element={<MyFavourites />} />
          <Route path="/login/vend_user/completelist/buy" element={<UserBuy />} />
          <Route path="/login/vend_user/buyerlistorders" element={<BuyerOrders />} />
          <Route path="/login/vend_user/vendorlistorders" element={<VendorsOrders />} />
          <Route path="/login/vend_user/wallet" element = {<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>

  );
}

export default App;


