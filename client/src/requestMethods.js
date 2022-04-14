import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDFlYTZjNzdlNmQ0OTNjODFlNmYyNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU4OTA2NywiZXhwIjoxNjQ4ODQ4MjY3fQ.lpJkxGNv0izqkBPuT-KoHP6PqxdoXB5KzlWP6rtUUgg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
