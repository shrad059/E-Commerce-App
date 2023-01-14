import axios from "axios";

const BASE_URL = "http://localhost:8005/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjY5YjM2NGQ3MmVjMDkzOTg1NGY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzY4MzI1MCwiZXhwIjoxNjczOTQyNDUwfQ.7Nu2VOuHmzJ8RO36n_sp_LDSzwh3VY_oetwpXKENWE";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
