import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopService from "../services/shop";

function Register(props) {
  const navigate = useNavigate();
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const userHandler = (e) => {
    setUser(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = () => {
    navigate("/");
  };
  const registerHandler = () => {
    ShopService.register(username, email, password)
      .then(() => {
        window.alert("註冊成功，即將導向登入頁面");
        navigate("/");
      })
      .catch((e) => {
        setMessage(e.response.data);
      });
  };
  return (
    <div id="Register">
      <div className="card">
        <p className="hello">請填寫以下資料</p>
        <div className="data">
          <label name="username">業主名稱</label>
          <input
            placeholder="請輸入公司或個人名稱"
            name="username"
            type="text"
            onChange={userHandler}
          />
          <label name="email">業主信箱</label>
          <input
            placeholder="請輸入公司或個人信箱"
            name="email"
            type="email"
            onChange={emailHandler}
          />
          <label name="password">密碼</label>
          <input
            placeholder="請輸入密碼"
            name="password"
            type="password"
            onChange={passwordHandler}
          />
        </div>
        {message && <p>{message}</p>}
        <button className="register" onClick={registerHandler}>
          註冊
        </button>
        <div className="login">
          <p>已經註冊過了?</p>
          <button onClick={loginHandler}>點我返回登入</button>
        </div>
      </div>
      <div className="footer">
        <footer>&copy; 2023 Marcus Mu</footer>
      </div>
    </div>
  );
}

export default Register;
