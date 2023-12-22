import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopService from "../services/shop";

function ShopPage({ shopData, reverseData }) {
  const navigate = useNavigate();
  const [hiden, setHiden] = useState(true);

  const settingHandler = () => {
    navigate("/setting");
  };
  const logoutHandler = () => {
    ShopService.logout();
    window.alert("成功登出!返回登入介面");
    navigate("/");
  };

  const displayHandler = () => {
    if (hiden == true) {
      setHiden(false);
    } else {
      setHiden(true);
    }
  };

  window.onload = () => {
    navigate("/getShopData");
  };
  return (
    <div id="ShopPage">
      {shopData && (
        <div className="card">
          <h1>{shopData.shopName}</h1>
          <div className="shopdata-p">
            <p>開始營業時間:</p>
            <p>{shopData.startTime}點</p>
          </div>
          <div className="shopdata-p">
            <p>結束營業時間:</p>
            <p>{shopData.endTime}點</p>
          </div>
          <div className="button">
            <button onClick={settingHandler}>修改商店資訊</button>
            <button onClick={logoutHandler}>登出</button>
          </div>
        </div>
      )}
      <p className="reverse-title">以下是即將到來的預約</p>
      {reverseData && (
        <div className="reverse-div">
          {reverseData.map((data, index) => {
            return (
              <div className="reverse-card" key={index}>
                <div onClick={displayHandler} className="display">
                  <p className="arow">〉</p>
                  <div className="display-p date">
                    <p>
                      {data.month + 1}月{data.date}日{data.time}點
                    </p>
                  </div>
                  <div className="display-p name">
                    <p>
                      {data.name}
                      {data.gender}
                    </p>
                  </div>
                  <div className="display-p service">
                    <p>{data.service}</p>
                  </div>
                </div>
                <div className={hiden == true ? "hiden" : "visible"}>
                  <div className="other">
                    <div className="other-p phone">
                      <p>手機 :</p>
                      <p>0{data.phone}</p>
                    </div>
                    <div className="other-p email">
                      <p>信箱 :</p>
                      <p>{data.email}</p>
                    </div>
                    <div className="other-p textarea">
                      <p>備註 :</p>
                      <p>{data.textarea}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="footer">
        <footer>&copy; 2023 Marcus Mu</footer>
      </div>
    </div>
  );
}

export default ShopPage;
