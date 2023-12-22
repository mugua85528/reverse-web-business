import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import ShopPage from "./components/ShopPage";
import ShopSetting from "./components/ShopSetting";
import GetShopData from "./components/GetShopData";
import GetReverseData from "./components/GetReverseData";
import "./styles/style.css";

function App() {
  const [shopData, setShopData] = useState(null);
  const [reverseData, setReverseData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home setShopData={setShopData} />} />
        <Route
          path="/setting"
          element={
            <ShopSetting shopData={shopData} setShopData={setShopData} />
          }
        />
        <Route
          path="/shop-page"
          element={<ShopPage shopData={shopData} reverseData={reverseData} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/getShopData"
          element={<GetShopData setShopData={setShopData} />}
        />
        <Route
          path="/getReverseData"
          element={<GetReverseData setReverseData={setReverseData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
