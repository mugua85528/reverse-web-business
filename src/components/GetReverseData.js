import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopService from "../services/shop";

function GetReverseData({ setReverseData }) {
  const navigate = useNavigate();
  useEffect(() => {
    ShopService.getReversed().then((data) => {
      setReverseData(data.data);
      navigate("/shop-page");
    });
  }, []);
  return (
    <div>
      <p>載入資料中，請稍候</p>
    </div>
  );
}

export default GetReverseData;
