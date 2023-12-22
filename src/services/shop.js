import axios from "axios";
// const API_URL = "https://sideprojectreverseweb.onrender.com/api/shop/";
const API_URL = "http://127.0.0.1:8080/api/shop/";

class ShopService {
  getReversed() {
    return axios.get("http://127.0.0.1:8080/api/");
  }

  getShopData() {
    return axios.get(API_URL);
  }

  register(username, email, password) {
    return axios.post(API_URL + "register", { username, email, password });
  }

  login(email, password) {
    return axios.post(API_URL + "login", { email, password });
  }

  logout() {
    localStorage.removeItem("user");
  }

  settingShop(shopName, startTime, endTime) {
    return axios.post(API_URL + "setting", { shopName, startTime, endTime });
  }

  modifyShop(_id, shopName, startTime, endTime) {
    return axios.patch(API_URL + _id, { shopName, startTime, endTime });
  }
}

export default new ShopService();
