import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import ThisBuy from "./components/common/userbuy";

const Laout = () => {
  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route path="login/buy_user" element={<ThisBuy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
