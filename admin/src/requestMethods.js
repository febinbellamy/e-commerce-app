import axios from "axios";

const BASE_URL = "https://ecommerce-app-mern-stack.herokuapp.com/api";

// https://ecommerce-app-admin-dashboard.herokuapp.com/

const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
)?.currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
