import React, { useEffect, useState } from "react";
import ShopService from "../services/shop";
import { useNavigate } from "react-router-dom";

function ShopSetting({ shopData, setShopData }) {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const nameHandler = (e) => {
    setShopName(e.target.value);
  };
  const startHandler = (e) => {
    setStartTime(e.target.value);
  };
  const endHandler = (e) => {
    setEndTime(e.target.value);
  };
  const buttonHandler = () => {
    let _id = shopData._id;
    ShopService.modifyShop(_id, shopName, startTime, endTime)
      .then((data) => {
        setShopData(data.data.shopData);
        window.alert("設定成功，將導向首頁");
        navigate("/shop-page");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };
  const backHandler = () => {
    navigate("/shop-page");
  };
  window.onload = () => {
    navigate("/getShopData");
  };

  return (
    <div id="setting">
      <div className="card">
        <p className="hello">更改資料</p>
        <div className="data">
          <label name="shopName">商店名稱</label>
          <input onChange={nameHandler} name="shopName" type="text" />
          <label name="startTime">開始營業時間</label>
          <input onChange={startHandler} name="startTime" type="text" />
          <label name="endTime">最後營業時間</label>
          <input onChange={endHandler} name="endTime" type="text" />
        </div>
        <div className="button">
          <button className="setting" onClick={buttonHandler}>
            設定
          </button>
          <button className="back" onClick={backHandler}>
            返回
          </button>
        </div>
      </div>
      <div className="footer">
        <footer>&copy; 2023 Marcus Mu</footer>
      </div>
    </div>
  );
}

export default ShopSetting;
