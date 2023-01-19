import axios from "axios";

const instance = axios.create({
  baseURL: "https://entertainment-web-app-api-production.up.railway.app/api",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
