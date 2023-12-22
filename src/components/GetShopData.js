import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopService from "../services/shop";

function GetShopData({ setShopData }) {
  const navigate = useNavigate();
  useEffect(() => {
    ShopService.getShopData().then((data) => {
      setShopData(data.data[0]);
      navigate("/getReverseData");
    });
  }, []);
  return (
    <div>
      <p>載入資料中，請稍候</p>
    </div>
  );
}

export default GetShopData;
